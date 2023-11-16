import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { IAppState } from 'src/app/state/app.state';
import { editQuestion, selectQuestionById } from 'src/app/state/questions';
import { IQuestion } from '../shared/questions/interfaces/question.interface';
import { UnsubscriberService } from 'src/app/services/unsubscriber.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { answerOptionsValidator } from '../shared/questions/question.validator';
import { EditFormValues } from '../shared/questions/interfaces/form.interface';
import { QuestionType } from '../shared/questions/types/question.type';

/**
 * Component for Editing Questions
 */
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  announcer: LiveAnnouncer = inject(LiveAnnouncer);

  editQuestion$: Observable<IQuestion | undefined> = this.store.select(
    selectQuestionById(this.route.snapshot.queryParams['id'])
  );

  realTimeEditQuestion: IQuestion = {} as IQuestion;

  questionTypes: QuestionType[] = [] as QuestionType[];

  editForm: FormGroup = this.fb.group(
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
    return this.editForm.get('answerOptions') as FormArray;
  }

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private readonly unsubscriber: UnsubscriberService
  ) {}

  ngOnInit(): void {
    this.editQuestion$.pipe(take(1)).subscribe((question) => {
      // Populate form with question data
      this.editForm.patchValue({
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

  /**
   * Listens to changes in the edit form values and updates the real-time edited question
   */
  onChanges(): void {
    this.editForm.valueChanges
      .pipe(this.unsubscriber.takeUntilDestroy)
      .subscribe((formValues: EditFormValues) => {
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
    this.store.dispatch(
      editQuestion({ editQuestion: this.realTimeEditQuestion })
    );
  }
}
