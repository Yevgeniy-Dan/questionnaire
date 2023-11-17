import { Component, Input } from '@angular/core';
import { IQuestion } from '../shared/questions/interfaces/question.interface';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/state/app.state';
import { removeQuestion } from 'src/app/state/questions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent {
  @Input() question!: IQuestion;

  @Input() width: string = '300px';
  @Input() height: string = '250px';

  @Input() mode: 'list' | 'edit' | 'create' = 'list';

  isManagment: boolean = this.route.snapshot.url[0]?.path === 'managment';

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {}

  removeCard(id: string): void {
    this.store.dispatch(removeQuestion({ id }));
  }
}
