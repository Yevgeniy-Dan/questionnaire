import { Action, createReducer, on } from '@ngrx/store';
import * as questionActions from './questions.actions';
import { IQuestionState, initialState } from './qustions.state';
import { IAnswerOption } from 'src/app/questions/shared/questions/interfaces/question.interface';

import { v4 as uuidv4 } from 'uuid';

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

        let options = question.answer.options;

        if (question.type === 'open') {
          options = [{ id: (options && options[0].id) || uuidv4(), value: '' }];
        } else {
          options = question.answer.options?.map((option) => {
            return {
              id: option && option.id,
              value: option.value,
              isSelected: false,
            };
          });
        }
        updatedQuestion.answer = {
          options: options,
          isAnswered: false,
        };

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
