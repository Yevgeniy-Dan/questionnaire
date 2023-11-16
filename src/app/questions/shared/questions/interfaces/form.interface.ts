import { QuestionType } from '../types/question.type';

export interface CreateEditFormValues {
  title: string;
  questionType: QuestionType;
  answerOptions: string[];
}
