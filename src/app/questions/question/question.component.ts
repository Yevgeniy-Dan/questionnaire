import { Component, Input } from '@angular/core';
import { IQuestion } from '../shared/questions/interfaces/question.interface';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/state/app.state';
import { removeQuestion } from 'src/app/state/questions';

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

  constructor(private store: Store<IAppState>) {}

  removeCard(id: string): void {
    this.store.dispatch(removeQuestion({ id }));
  }
}
