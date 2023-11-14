import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionManagmentComponent } from './question-managment/question-managment.component';
import { QuestionListComponent } from './question-list/question-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { QuestionComponent } from './question/question.component';
import { SortedQuestionsPipe } from './shared/sorted-questions.pipe';
import { CreationComponent } from './creation/creation.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionManagmentComponent,
    QuestionListComponent,
    QuestionComponent,
    SortedQuestionsPipe,
    CreationComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    QuestionsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [QuestionsComponent],
})
export class QuestionsModule {}
