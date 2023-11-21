import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMasonryModule } from 'ngx-masonry';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionManagmentListComponent } from './question-managment/question-managment-list.component';
import { QuestionCardsComponent } from './question-list/question-cards.component';
import { CreateEditComponent } from './create-edit/create-edit.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { QuestionCardComponent } from './question/question-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionManagmentListComponent,
    QuestionCardsComponent,
    QuestionCardComponent,
    CreateEditComponent,
  ],
  exports: [QuestionsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxMasonryModule,
    QuestionsRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatChipsModule,
    MatDividerModule,
    ScrollingModule,
    MatCheckboxModule,
    SharedModule,
  ],
})
export class QuestionsModule {}
