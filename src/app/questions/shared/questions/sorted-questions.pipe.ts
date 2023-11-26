import { Pipe, PipeTransform } from '@angular/core';

import { IQuestion } from './interfaces/question.interface';

@Pipe({
  name: 'sortedQuestions',
})
export class SortedQuestionsPipe implements PipeTransform {
  transform(
    questions: IQuestion[],
    isAnsweredQuestionList: boolean,
    isManagmentPage: boolean
  ): IQuestion[] {
    const sortedQuestions = [...questions];

    if (isAnsweredQuestionList) {
      return sortedQuestions
        .filter((q) => {
          return q.answer && q.answer.isAnswered;
        })
        .sort(
          (a, b) =>
            new Date(b.answer.date!).getTime() -
            new Date(a.answer.date!).getTime()
        );
    } else {
      if (isManagmentPage) {
        return sortedQuestions.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      }
      return sortedQuestions
        .filter((q) => !q.answer.isAnswered)
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }
  }
}
