import { Action, ActionReducer } from '@ngrx/store';

import { questionStateKey } from '../app.state';
import { localStorageSync } from 'ngrx-store-localstorage';

const localStorageSyncConfig = {
  keys: [questionStateKey],
  rehydrate: true,
  storage: localStorage,
  removeOnUndefined: true,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any, Action>
): ActionReducer<any, Action> {
  return localStorageSync(localStorageSyncConfig)(reducer);
}
