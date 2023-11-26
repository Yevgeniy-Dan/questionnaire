import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { IAppState } from 'src/app/state/app.state';
import { IQuestion } from '../shared/questions/interfaces/question.interface';
import { selectQuestionsData } from 'src/app/state/questions';

@Component({
  selector: 'app-question-managment',
  templateUrl: './question-managment-list.component.html',
  styleUrls: ['./question-managment-list.component.scss'],
})
export class QuestionManagmentListComponent {
  questions$: Observable<IQuestion[]> = this.store.select(selectQuestionsData);

  isManagment: boolean = this.route.snapshot.url[0]?.path === 'managment';

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {}
}
