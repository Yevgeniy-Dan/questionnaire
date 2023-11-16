import { QuestionType } from '../types/question.type';

export interface IQuestion {
  id: string;
  text: string;
  type: QuestionType;
  answer_options?: string[];
  date: string;
}
