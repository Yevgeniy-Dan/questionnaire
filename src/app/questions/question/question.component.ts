import { Component, Input } from '@angular/core';
import { IQuestion } from '../shared/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question!: IQuestion;

  editCard(): void {}

  removeCard(id: string): void {}
}
