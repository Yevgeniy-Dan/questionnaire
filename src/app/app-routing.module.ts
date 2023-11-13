import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoute } from './app-routing.enum';

const routes: Routes = [
  {
    path: AppRoute.Questions,
    loadChildren: () =>
      import('./questions/questions.module').then((m) => m.QuestionsModule),
  },
  {
    path: '**',
    redirectTo: AppRoute.Questions,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
