import { QuestionType } from '../types/question.type';

export interface EditFormValues {
  title: string;
  questionType: QuestionType;
  answerOptions: string[];
}
