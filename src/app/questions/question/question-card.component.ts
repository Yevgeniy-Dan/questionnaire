import { Component, Input } from '@angular/core';
import {
  IAnswer,
  IAnswerOption,
  IQuestion,
} from '../shared/questions/interfaces/question.interface';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/state/app.state';
import {
  answerQuestion,
  answerRollBack,
  removeQuestion,
} from 'src/app/state/questions';
import { ActivatedRoute } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent {
  singleAnswerId?: string;
  multipleAnswerIds: string[] = [];
  eneteredText: string = '';

  @Input() question!: IQuestion;

  @Input() mode: 'list' | 'edit' | 'create' = 'list';

  isManagment: boolean = this.route.snapshot.url[0]?.path === 'managment';
  isAnswerEdit: boolean = this.route.snapshot.url[1]?.path === 'answer-edit';

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {}

  answer(): void {
    if (this.question.type === 'open') {
      const options = [{ id: uuidv4(), value: this.eneteredText }];

      if (this.eneteredText.length !== 0) {
        this.addAnswer(options);
      }
    } else if (this.question.type === 'single') {
      const options = this.question.answer.options?.map((option) => {
        return {
          ...option,
          isSelected: this.singleAnswerId === option.id,
        };
      });

      if (this.singleAnswerId) {
        this.addAnswer(options);
      }
    } else {
      const options = this.question.answer.options?.map((option) => {
        return {
          ...option,
          isSelected: this.multipleAnswerIds.some((id) => id === option.id),
        };
      });

      if (this.multipleAnswerIds.length >= 2) {
        this.addAnswer(options);
      }
    }
  }

  removeCard(id: string): void {
    this.store.dispatch(removeQuestion({ id }));
  }

  rollBack(id: string): void {
    this.store.dispatch(answerRollBack({ id }));
  }

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
  }

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

  updateSingleSelectedOption(changedOption: IAnswerOption): void {
    this.singleAnswerId = changedOption.id;
  }
}
