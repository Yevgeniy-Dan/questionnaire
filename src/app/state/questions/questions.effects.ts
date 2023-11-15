import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { QuestionService } from 'src/app/questions/shared/questions/question.service';
import { loadQuestions, loadQuestionsComplete } from './questions.actions';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { IQuestion } from 'src/app/questions/shared/questions/question.model';

@Injectable()
export class QuestionEffects {
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuestions),
      mergeMap((action: any) => {
        return this.questionService.getQuestions().pipe(
          map((questions: IQuestion[]) => loadQuestionsComplete({ questions })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private questionService: QuestionService
  ) {}
}
