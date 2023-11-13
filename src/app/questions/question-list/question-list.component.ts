import { Component } from '@angular/core';
import { Question } from '../shared/question.model';
import { questions } from '../shared/questions-data';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent {
  questions: Question[];
  constructor() {
    this.questions = questions;
  }
}
