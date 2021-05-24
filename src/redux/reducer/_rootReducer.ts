import { combineReducers } from 'redux';

import indexReducer, { _indexReducer } from './indexReducer';
import layoutReducer, { _LayoutReducer } from './layoutReducer';

export type _RootState = {
    indexReducer: _indexReducer;
    layoutReducer: _LayoutReducer;
};

export const rootReducer = combineReducers({
    indexReducer,
    layoutReducer,
});
