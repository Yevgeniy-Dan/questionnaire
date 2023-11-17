import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { IAppState } from 'src/app/state/app.state';
import { IQuestion } from '../shared/questions/interfaces/question.interface';

import { answerQuestion, selectQuestionById } from 'src/app/state/questions';
import { answerValidator } from '../shared/questions/question.validator';
import { UnsubscriberService } from 'src/app/services/unsubscriber.service';
import { AnswerEditFormValues } from '../shared/questions/interfaces/form.interface';

/**
 * Component for Editing Answer
 */
@Component({
  selector: 'app-answer-edit',
  templateUrl: './answer-edit.component.html',
  styleUrls: ['./answer-edit.component.scss'],
})
export class AnswerEditComponent implements OnInit {
  question$: Observable<IQuestion | undefined> = this.store.select(
    selectQuestionById(this.route.snapshot.queryParams['id'])
  );

  realTimeEditQuestion: IQuestion = {} as IQuestion;

  isManagment: boolean = this.route.snapshot.url[0]?.path === 'managment';

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private readonly unsubscriber: UnsubscriberService
  ) {}

  answerEditForm: FormGroup = this.fb.group({
    openAnswer: [''],
    singleMultipleAnswer: [null],
  });

  ngOnInit(): void {
    this.loadEditForm();
  }

  /**
   * Loads the edit form with data from the 'question$' observable.
   * Sets validators based on the 'realTimeEditQuestion' type and triggers form validation.
   */
  loadEditForm(): void {
    this.question$.pipe(take(1)).subscribe((question) => {
      this.answerEditForm.patchValue({
        openAnswer: question?.answer?.answer || '',
        singleMultipleAnswer: question?.answer?.answer || [''],
      });

      if (question) {
        this.realTimeEditQuestion = { ...question };

        this.answerEditForm.setValidators(
          answerValidator(this.realTimeEditQuestion.type)
        );
        this.answerEditForm.updateValueAndValidity();
      }

      this.onChanges();
    });
  }

  /**
   * Listens to changes in the edit form values and updates the real-time edited question
   */
  onChanges(): void {
    this.answerEditForm.valueChanges
      .pipe(this.unsubscriber.takeUntilDestroy)
      .subscribe((formValues: AnswerEditFormValues) => {
        this.realTimeEditQuestion = {
          ...this.realTimeEditQuestion,
          answer: {
            answer:
              this.realTimeEditQuestion.type === 'open'
                ? formValues.openAnswer
                : formValues.singleMultipleAnswer,
            date: new Date().toISOString(),
          },
        };
      });
  }

  saveChanges(): void {
    if (this.realTimeEditQuestion.answer) {
      this.store.dispatch(
        answerQuestion({
          answer: this.realTimeEditQuestion.answer,
          id: this.realTimeEditQuestion.id,
        })
      );
    }
  }

  goBack(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
