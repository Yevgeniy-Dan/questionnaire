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
  }),
  on(questionActions.createQuestion, (state, { question }) => {
    const updatedQuestions = [...state.questions];
    updatedQuestions.push(question);
    return {
      ...state,
      questions: updatedQuestions,
    };
  }),
  on(questionActions.removeQuestion, (state, { id }) => {
    const updatedQuestions = state.questions.filter(
      (question) => question.id !== id
    );

    return {
      ...state,
      questions: updatedQuestions,
    };
  }),
  on(questionActions.answerQuestion, (state, { id, answer }) => {
    const updatedQuestions = state.questions.map((question) => {
      if (question.id === id) {
        const updatedQuestion = { ...question };

        updatedQuestion.answer = { ...answer };

        return updatedQuestion;
      }

      return question;
    });

    return { ...state, questions: updatedQuestions };
  }),
  on(questionActions.answerRollBack, (state, { id }) => {
    const updatedQuestions = state.questions.map((question) => {
      if (question.id === id) {
        const updatedQuestion = { ...question };

        updatedQuestion.answer = undefined;

        return updatedQuestion;
      }

      return question;
    });

    return { ...state, questions: updatedQuestions };
  })
);

export function reducer(state: IQuestionState | undefined, action: Action) {
  return questionsReducer(state, action);
}
