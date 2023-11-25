import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { Store } from '@ngrx/store';

import {
  IAnswer,
  IAnswerOption,
  IQuestion,
} from '../shared/questions/interfaces/question.interface';
import { IAppState } from 'src/app/state/app.state';
import {
  answerQuestion,
  answerRollBack,
  removeQuestion,
  selectQuestionById,
} from 'src/app/state/questions';

import { v4 as uuidv4 } from 'uuid';
import { take } from 'rxjs';

/**
 * Angular component representing a question card with various answer handling logic.
 */
@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardComponent {
  singleAnswerId?: string;
  multipleAnswerIds: string[] = [];
  eneteredText: string = '';

  @Input() question!: IQuestion;

  isManagment: boolean = this.route.snapshot.url[0]?.path === 'managment';
  @Input() isEditOrCreatePage?: boolean;

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *   Handles user's attempt to answer the question, considering different question types.
   */
  onAnswer(): void {
    // Logic depends on the question type:
    // - For 'open' questions, adds a new answer with the entered text.

    if (this.question.type === 'open') {
      const options = [{ id: uuidv4(), value: this.eneteredText }];

      this.addAnswer(options);
    } else if (this.question.type === 'single') {
      // - For 'single' choice questions, marks the selected option as the answer.
      const options = this.question.answer.options?.map((option) => {
        return {
          ...option,
          isSelected: this.singleAnswerId === option.id,
        };
      });

      this.addAnswer(options);
    } else {
      // - For 'multiple' choice questions, marks selected options as the answer.
      const options = this.question.answer.options?.map((option) => {
        return {
          ...option,
          isSelected: this.multipleAnswerIds.some((id) => id === option.id),
        };
      });

      // Updates the answer in the store and triggers change detection.
      this.addAnswer(options);
    }
  }

  /**
   * Removes the question card by dispatching a removal action to the store.
   * @param id question id
   */
  onRemoveCard(id: string): void {
    this.store.dispatch(removeQuestion({ id }));
  }

  /**
   *  Rolls back the answer to a previous state by dispatching an action to the store.
   * @param id question id
   */
  onRollBack(id: string): void {
    this.store.dispatch(answerRollBack({ id }));
  }

  /**
   * Updates the answer in the store and triggers change detection.
   * @param options answer options object that contains id, value and isSelected field
   */
  addAnswer(options: IAnswerOption[] | undefined): void {
    const updatedAnswer: IAnswer = {
      ...this.question.answer,
      options: options,
      date: new Date().toISOString(),
      isAnswered: true,
    };
    this.store.dispatch(
      answerQuestion({
        answer: updatedAnswer,
        id: this.question.id,
      })
    );
    this.store
      .select(selectQuestionById(this.question.id))
      .pipe(take(1))
      .subscribe((question) => {
        this.question = { ...question! };
        console.log(question);
        this.cd.markForCheck();
      });
  }

  /**
   * Updates the list of selected multiple-choice answers.
   * @param changedOption represents an answer options object with fields id, value, and isSelected.
   * @param event represents the MatCheckboxChange event, indicating whether the checkbox state has changed.
   */
  updateMultipleSelectedOptions(
    changedOption: IAnswerOption,
    event: MatCheckboxChange
  ): void {
    if (event.checked) {
      this.multipleAnswerIds.push(changedOption.id);
    } else {
      this.multipleAnswerIds = this.multipleAnswerIds.filter(
        (id) => id !== changedOption.id
      );
    }
  }

  /**
   * Updates the selected single-choice answer.
   * @param changedOption represents an answer options object with fields id, value, and isSelected.
   */
  updateSingleSelectedOption(changedOption: IAnswerOption): void {
    this.singleAnswerId = changedOption.id;
  }

  /**
   * Checks if the entered answer is valid based on the question type.
   * @returns `true` if it's valid and `false` otherwise
   */
  isAnswerValid(): boolean {
    if (this.question.type === 'open') {
      return this.eneteredText.trim() !== '';
    } else if (this.question.type === 'single') {
      return !!this.singleAnswerId;
    } else {
      return this.multipleAnswerIds.length >= 1;
    }
  }
}
