import { Component, Input } from '@angular/core';

import { IQuestion } from '../shared/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent {
  @Input() questions!: IQuestion[];
}
