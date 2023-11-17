import { Component, Input } from '@angular/core';

import { IQuestion } from '../shared/questions/interfaces/question.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-cards',
  templateUrl: './question-cards.component.html',
  styleUrls: ['./question-cards.component.scss'],
})
export class QuestionCardsComponent {
  @Input() questions!: IQuestion[];
  @Input() isAnsweredQuestionList: boolean = false;

  isManagment: boolean = this.route.snapshot.url[0]?.path === 'managment';
  constructor(private route: ActivatedRoute) {}
}
