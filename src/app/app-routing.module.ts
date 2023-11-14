import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppQuestionRoute } from './app-routing.enum';

const routes: Routes = [
  {
    path: AppQuestionRoute.All,
    loadChildren: () =>
      import('./questions/questions.module').then((m) => m.QuestionsModule),
  },
  {
    path: '**',
    redirectTo: AppQuestionRoute.All,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
