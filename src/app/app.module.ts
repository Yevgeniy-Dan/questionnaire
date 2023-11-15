import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsModule } from './questions/questions.module';
import { appReducers } from './state/app.state';
import { QuestionEffects } from './state/questions/questions.effects';
import * as fromLocalStorage from './state/local-storage';
import { UnsubscriberService } from './services/unsubscriber.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers, {
      metaReducers: [fromLocalStorage.localStorageSyncReducer],
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([QuestionEffects]),
  ],
  providers: [UnsubscriberService],
  bootstrap: [AppComponent],
})
export class AppModule {}
