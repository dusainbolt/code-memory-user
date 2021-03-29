import { combineReducers } from 'redux';

import _indexState from "./indexReducer";

export const rootReducer = combineReducers({
  _indexState,
});

export type _rootState = ReturnType< typeof rootReducer >;