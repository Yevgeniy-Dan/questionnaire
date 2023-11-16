import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions.component';
import { AppQuestionRoute } from '../app-routing.enum';
import { CreateEditComponent } from './create-edit/create-edit.component';

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: AppQuestionRoute.CreateEdit, component: CreateEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
