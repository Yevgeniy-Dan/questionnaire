import { createAction, props } from '@ngrx/store';
import { IQuestion } from 'src/app/questions/shared/questions/question.model';

export const loadQuestions = createAction('[Questions Load] Get All Questions');

export const loadQuestionsComplete = createAction(
  '[Questions Load Completed] Get All Questions',
  props<{ questions: IQuestion[] }>()
);
