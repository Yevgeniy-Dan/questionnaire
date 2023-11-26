import { QuestionType } from '../types/question.type';

export interface CreateEditFormValues {
  title: string;
  questionType: QuestionType;
  answerOptions: string[];
}

export interface AnswerEditFormValues {
  openAnswer: string;
  singleMultipleAnswer: string[];
}
