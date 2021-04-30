import { combineReducers } from 'redux';

import _indexReducer from "./indexReducer";
// import _configReducer from "./configReducer";

export const rootReducer = combineReducers({
  _indexReducer,
  // _configReducer,
});

export type _rootState = ReturnType< typeof rootReducer >;