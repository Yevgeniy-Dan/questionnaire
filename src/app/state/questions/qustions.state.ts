import { IQuestion } from 'src/app/questions/shared/question.model';

export interface IQuestionState {
  questions: {
    data: IQuestion[];
    loading: boolean;
  };
}

export const initialState: IQuestionState = {} as IQuestionState;
