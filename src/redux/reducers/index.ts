import { combineReducers } from '@reduxjs/toolkit';

import seoHomeSlice from '@Redux/slices/seoHomeSlice';

export const listSliceName = ['seoHomeSlice'];

export const rootReducer = combineReducers({ seoHomeSlice });

export type IRootState = ReturnType<typeof rootReducer>;
