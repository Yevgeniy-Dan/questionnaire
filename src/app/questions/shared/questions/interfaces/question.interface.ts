import { QuestionType } from '../types/question.type';

export interface IQuestion {
  id: string;
  text: string;
  type: QuestionType;
  answer: IAnswer;
  date: string;
}

export interface IAnswer {
  options?: IAnswerOption[];
  isAnswered: boolean;
  date?: string;
}

export interface IAnswerOption {
  id: string;
  value: string;
  isSelected?: boolean;
}
