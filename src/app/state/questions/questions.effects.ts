import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { QuestionService } from 'src/app/questions/shared/questions/question.service';
import { EMPTY, mergeMap } from 'rxjs';
import { IQuestion } from 'src/app/questions/shared/questions/interfaces/question.interface';
import { createQuestion, editQuestion } from './questions.actions';
import { Router } from '@angular/router';
import { AppQuestionRoute } from 'src/app/app-routing.enum';

@Injectable()
export class QuestionEffects {
  editQuestion$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editQuestion, createQuestion),
        mergeMap(() => {
          this.router.navigate([AppQuestionRoute.QuestionModulePage]);
          return EMPTY;
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
