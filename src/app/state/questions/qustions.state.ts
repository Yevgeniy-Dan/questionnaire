import { IQuestion } from 'src/app/questions/shared/questions/interfaces/question.interface';

export interface IQuestionState {
  questions: IQuestion[];
}

export const initialState: IQuestionState = {
  questions: [],
} as IQuestionState;
