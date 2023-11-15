import { Action, createReducer, on } from '@ngrx/store';
import * as questionActions from './questions.actions';
import { IQuestionState, initialState } from './qustions.state';

const questionsReducer = createReducer(
  initialState,
  on(questionActions.loadQuestions, (state) => {
    return {
      ...state,
      questions: {
        ...state.questions,
      },
    };
  }),
  on(questionActions.loadQuestionsComplete, (state, { questions }) => {
    return { ...state, questions };
  })
);

export function reducer(state: IQuestionState | undefined, action: Action) {
  return questionsReducer(state, action);
}
