import { Pipe, PipeTransform } from '@angular/core';

import { IQuestion } from './question.model';

@Pipe({
  name: 'sortedQuestions',
})
export class SortedQuestionsPipe implements PipeTransform {
  transform(questions: IQuestion[]): IQuestion[] {
    const sortedQuestions = [...questions];

    return sortedQuestions.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
}
