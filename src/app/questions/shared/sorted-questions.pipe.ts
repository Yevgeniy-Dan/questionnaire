import { Pipe, PipeTransform } from '@angular/core';

import { Question } from './question.model';

@Pipe({
  name: 'sortedQuestions',
})
export class SortedQuestionsPipe implements PipeTransform {
  transform(questions: Question[]): Question[] {
    return questions.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
}
