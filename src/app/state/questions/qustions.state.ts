import { IQuestion } from 'src/app/questions/shared/questions/interfaces/question.interface';
import { questionDataInitialState } from 'src/app/questions/shared/questions/questions-data';

export interface IQuestionState {
  questions: IQuestion[];
}

export const initialState: IQuestionState = {
  questions: questionDataInitialState,
} as IQuestionState;
