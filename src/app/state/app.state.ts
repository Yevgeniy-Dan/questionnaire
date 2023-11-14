import { ActionReducerMap } from '@ngrx/store';

import * as questionStore from './questions';

const questionStateKey = 'questions';

export interface IAppState {
  [questionStateKey]: questionStore.IQuestionState;
}

export const initialState: IAppState = {
  [questionStateKey]: questionStore.initialState,
};

export const appReducers: ActionReducerMap<IAppState> = {
  [questionStateKey]: questionStore.reducer,
};
