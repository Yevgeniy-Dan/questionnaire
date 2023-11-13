import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionManagmentComponent } from './question-managment/question-managment.component';
import { QuestionListComponent } from './question-list/question-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { QuestionComponent } from './question/question.component';
@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionManagmentComponent,
    QuestionListComponent,
    QuestionComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MatCardModule,
    MatGridListModule,
  ],
  exports: [QuestionsComponent],
})
export class QuestionsModule {}
