import { Component, Input } from '@angular/core';
import { Question } from '../shared/question.model';
import { questions } from '../shared/questions-data';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question!: Question;
}
