import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionManagmentComponent } from './question-managment/question-managment.component';
import { QuestionListComponent } from './question-list/question-list.component';
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

import { QuestionComponent } from './question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionManagmentComponent,
    QuestionListComponent,
    QuestionComponent,
    CreateEditComponent,
  ],
  exports: [QuestionsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
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
    SharedModule,
  ],
})
export class QuestionsModule {}
