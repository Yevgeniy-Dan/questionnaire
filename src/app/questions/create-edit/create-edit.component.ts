import { Component, OnInit, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';

import {
  createQuestion,
  editQuestion,
  selectQuestionById,
} from 'src/app/state/questions';
import { UnsubscriberService } from 'src/app/services/unsubscriber.service';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { IAppState } from 'src/app/state/app.state';

import { IQuestion } from '../shared/questions/interfaces/question.interface';
import { answerOptionsValidator } from '../shared/questions/question.validator';
import { CreateEditFormValues } from '../shared/questions/interfaces/form.interface';

import { QuestionType } from '../shared/questions/types/question.type';

import { v4 as uuidv4 } from 'uuid';

/**
 * Component for Editing Questions
 */
@Component({
  selector: 'app-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss'],
})
export class CreateEditComponent implements OnInit {
  mode: 'create' | 'edit' = this.route.snapshot.queryParams['mode'];

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  announcer: LiveAnnouncer = inject(LiveAnnouncer);

  editQuestion$: Observable<IQuestion | undefined> = this.store.select(
    selectQuestionById(this.route.snapshot.queryParams['id'])
  );

  realTimeEditQuestion: IQuestion = {} as IQuestion;

  questionTypes: QuestionType[] = ['single', 'multiple', 'open'];

  createEditForm: FormGroup = this.fb.group(
    {
      title: ['', [Validators.required]],
      questionType: ['', [Validators.required]],
      answerOptions: this.fb.array([]),
    },
    {
      validators: answerOptionsValidator,
    }
  );

  get answerOptions(): FormArray {
    return this.createEditForm.get('answerOptions') as FormArray;
  }

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private readonly unsubscriber: UnsubscriberService
  ) {}

  ngOnInit(): void {
    if (this.mode === 'edit') {
      // Edit mode
      this.loadEditForm();
    } else {
      // Create mode
      this.setupCreateForm();
    }
  }

  loadEditForm(): void {
    this.editQuestion$.pipe(take(1)).subscribe((question) => {
      // Populate form with question data
      this.createEditForm.patchValue({
        title: question?.text,
        questionType: question?.type,
      });

      // Add answer options to the form
      if (question?.answer_options) {
        question?.answer_options.forEach((option) => {
          this.answerOptions.push(this.fb.control(option));
        });
      }

      if (question) {
        this.realTimeEditQuestion = { ...question };
      }

      this.onChanges();
    });
  }

  setupCreateForm(): void {
    const questionId = uuidv4();

    const newQuestion: IQuestion = {
      id: questionId,
      text: '',
      type: 'single',
      answer_options: [],
      date: new Date().toISOString(),
    };

    this.createEditForm.patchValue({
      title: newQuestion.text,
      questionType: newQuestion.type,
      answerOptions: newQuestion.answer_options,
    });

    this.realTimeEditQuestion = { ...newQuestion };

    this.onChanges();
  }
  /**
   * Listens to changes in the edit form values and updates the real-time edited question
   */
  onChanges(): void {
    this.createEditForm.valueChanges
      .pipe(this.unsubscriber.takeUntilDestroy)
      .subscribe((formValues: CreateEditFormValues) => {
        this.realTimeEditQuestion = {
          ...this.realTimeEditQuestion,
          text: formValues.title,
          type: formValues.questionType,
          answer_options: formValues.answerOptions,
        };
      });
  }

  /**
   * Method to add a new answer option to the answer options
   * @param event - The MatChipInput event containing the input value
   */
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.answerOptions.push(this.fb.control(value));
    }

    event.chipInput!.clear();
  }

  /**
   * Method to remove an answer option from the answer options
   * @param id - The index of the answer option to be removed
   */
  remove(id: number): void {
    this.answerOptions.removeAt(id);

    this.announcer.announce(`Removed ${id}`);
  }

  /**
   * Method to edit an answer option in the answer options
   * @param id - The index of the answer option to be edited
   * @param event - The MatChipEditedEvent containing the edited value
   */
  edit(id: number, event: MatChipEditedEvent): void {
    const value = event.value.trim();
    if (!value) {
      this.remove(id);
      return;
    }

    const optionControl = this.answerOptions.at(id) as FormControl;
    optionControl.setValue(value);
  }

  saveChanges(): void {
    if (this.mode === 'edit') {
      this.store.dispatch(
        editQuestion({
          editQuestion: {
            ...this.realTimeEditQuestion,
            date: new Date().toISOString(),
          },
        })
      );
    } else {
      this.store.dispatch(
        createQuestion({
          question: this.realTimeEditQuestion,
        })
      );
    }
  }
}
