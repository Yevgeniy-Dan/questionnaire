import { createAction, props } from '@ngrx/store';
import { IQuestion } from 'src/app/questions/shared/questions/question.model';

export const editQuestion = createAction(
  '[Edit Question]',
  props<{ editQuestion: IQuestion }>()
);
