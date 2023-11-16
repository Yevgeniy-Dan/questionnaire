import { createAction, props } from '@ngrx/store';
import { IQuestion } from 'src/app/questions/shared/questions/interfaces/question.interface';

export const editQuestion = createAction(
  '[Edit Question]',
  props<{ editQuestion: IQuestion }>()
);

export const createQuestion = createAction(
  '[Create Question]',
  props<{ question: IQuestion }>()
);

export const removeQuestion = createAction(
  '[Remove Question]',
  props<{ id: string }>()
);
