import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import seoHomeSlice from '@Redux/slices/seoHomeSlice';
import loginSlice from '@Redux/slices/loginSlice';
import { persistReducer } from 'redux-persist';

export const getPersistConfig = (key = '', nested = {}): any => {
  return {
    key,
    storage: storage,
    ...nested,
  };
};

export const whitelist = [];

const persistLoginSlice = persistReducer(getPersistConfig('loginSlice', { whitelist: ['token', 'user'] }), loginSlice);

export const rootReducer = combineReducers({ seoHomeSlice, loginSlice: persistLoginSlice });

export type IRootState = ReturnType<typeof rootReducer>;
