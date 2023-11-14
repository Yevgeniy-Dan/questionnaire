import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions.component';
import { CreationComponent } from './creation/creation.component';
import { AppQuestionRoute } from '../app-routing.enum';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: AppQuestionRoute.Create, component: CreationComponent },
  { path: AppQuestionRoute.Edit, component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
