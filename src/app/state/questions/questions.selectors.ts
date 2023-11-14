import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IQuestionState } from './qustions.state';

export const questionFeatureKey = 'questions';

export const selectQuestions =
  createFeatureSelector<IQuestionState>(questionFeatureKey);

export const selectQuestionsData = createSelector(
  selectQuestions,
  (state: IQuestionState) => state.questions
);
