import { Action, createReducer, on } from '@ngrx/store';
import * as questionActions from './questions.actions';
import { IQuestionState, initialState } from './qustions.state';

const questionsReducer = createReducer(
  initialState,
  on(questionActions.editQuestion, (state, { editQuestion }) => {
    const updatedQuestions = state.questions.map((question) =>
      question.id === editQuestion.id ? editQuestion : question
    );

    return {
      ...state,
      questions: updatedQuestions,
    };
  })
);

export function reducer(state: IQuestionState | undefined, action: Action) {
  return questionsReducer(state, action);
}
