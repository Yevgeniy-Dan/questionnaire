import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { IAppState } from 'src/app/state/app.state';
import { IQuestion } from '../shared/questions/interfaces/question.interface';
import { selectQuestionsData } from 'src/app/state/questions';

@Component({
  selector: 'app-question-managment',
  templateUrl: './question-managment.component.html',
  styleUrls: ['./question-managment.component.scss'],
})
export class QuestionManagmentComponent {
  questions$: Observable<IQuestion[]>;

  constructor(private store: Store<IAppState>) {
    this.questions$ = this.store.select(selectQuestionsData).pipe(
      map((questions) => {
        return questions;
      })
    );
  }
}
