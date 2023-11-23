import {
  Component,
  Input,
  ChangeDetectorRef,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs';

import { IQuestion } from '../shared/questions/interfaces/question.interface';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-question-cards',
  templateUrl: './question-cards.component.html',
  styleUrls: ['./question-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardsComponent implements OnInit {
  @Input() questions$!: Observable<IQuestion[]>;
  questions: IQuestion[] = [] as IQuestion[];

  @Input() isAnsweredQuestionList: boolean = false;

  isManagment: boolean = this.route.snapshot.url[0]?.path === 'managment';
  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.questions$.subscribe((questions) => {
      this.questions = [...questions];
      this.cd.markForCheck();
    });
  }
}
