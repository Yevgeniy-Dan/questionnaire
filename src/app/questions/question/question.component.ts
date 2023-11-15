import { Component, Input } from '@angular/core';
import { IQuestion } from '../shared/questions/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question!: IQuestion;

  removeCard(id: string): void {}
}
