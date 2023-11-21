import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { IQuestion } from '../shared/questions/interfaces/question.interface';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/state/app.state';
import { selectQuestionsData } from 'src/app/state/questions';

@Component({
  selector: 'app-question-cards',
  templateUrl: './question-cards.component.html',
  styleUrls: ['./question-cards.component.scss'],
})
export class QuestionCardsComponent {
  @Input() questions$: Observable<IQuestion[]> =
    this.store.select(selectQuestionsData);

  @Input() isAnsweredQuestionList: boolean = false;

  isManagment: boolean = this.route.snapshot.url[0]?.path === 'managment';
  constructor(private route: ActivatedRoute, private store: Store<IAppState>) {}
}
