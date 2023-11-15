import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IQuestionState } from './qustions.state';
import { IQuestion } from 'src/app/questions/shared/questions/question.model';

export const questionFeatureKey = 'questions';

export const selectQuestions =
  createFeatureSelector<IQuestionState>(questionFeatureKey);

export const selectQuestionsData = createSelector(
  selectQuestions,
  (state: IQuestionState) => state.questions
);

export const selectQuestionById = (id: string) =>
  createSelector(selectQuestionsData, (questions: IQuestion[]) =>
    questions.find((q) => q.id === id)
  );
