import { Component, Input } from '@angular/core';
import { IQuestion } from '../shared/questions/interfaces/question.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question!: IQuestion;

  @Input() width: string = '300px';
  @Input() height: string = '250px';

  @Input() mode: 'list' | 'edit' | 'create' = 'list';

  removeCard(id: string): void {}
}
