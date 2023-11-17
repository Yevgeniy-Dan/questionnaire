import { QuestionType } from '../types/question.type';

export interface IQuestion {
  id: string;
  text: string;
  type: QuestionType;
  answer_options?: string[];
  date: string;
  answer?: IAnswer;
}

export interface IAnswer {
  answer: string | string[];
  date: string;
}
