import { IQuestion } from 'src/app/questions/shared/questions/question.model';

export interface IQuestionState {
  questions: IQuestion[];
}

export const initialState: IQuestionState = {} as IQuestionState;
