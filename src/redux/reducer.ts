import { combineReducers } from '@reduxjs/toolkit';

import seoHomeSlice from '@Redux/slices/seoHomeSlice';
import loginSlice from '@Redux/slices/loginSlice';

export const listSliceName = ['seoHomeSlice', 'loginSlice'];

export const rootReducer = combineReducers({ seoHomeSlice, loginSlice });

export type IRootState = ReturnType<typeof rootReducer>;

// export const whitelistReducer = ['loginSlice'];
