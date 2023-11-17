import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions.component';
import { AppQuestionRoute } from '../app-routing.enum';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { AnswerEditComponent } from './answer-edit/answer-edit.component';

const routes: Routes = [
  { path: '', redirectTo: AppQuestionRoute.ManagmentPage, pathMatch: 'full' },
  { path: AppQuestionRoute.CreateEditPage, component: CreateEditComponent },
  {
    path: AppQuestionRoute.ListsOfQuestionsPage,
    component: QuestionsComponent,
  },
  {
    path: AppQuestionRoute.ManagmentPage,
    component: QuestionsComponent,
  },
  {
    path: AppQuestionRoute.AnswerEditPage,
    component: AnswerEditComponent,
  },
  { path: '**', redirectTo: AppQuestionRoute.ManagmentPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
