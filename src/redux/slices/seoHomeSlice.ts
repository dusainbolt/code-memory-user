import { SeoHome } from '@Models/SeoHomeModel';
import { IRootState, listSliceName } from '@Redux/reducers';
import { AppState } from '@Redux/store';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: SeoHome = {};

const hydrate = createAction<AppState>(HYDRATE);

export const seoHomeSlice = createSlice({
  name: 'seoHome',
  initialState,
  reducers: {
    getSeoHomeStart: (state: SeoHome) => ({ ...state }),
    getSeoHomeSuccess: (state: SeoHome, action: any) => ({ ...state, ...action.payload }),
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      let hydrateState = {};
      listSliceName.forEach(item => {
        hydrateState = { ...hydrateState, ...action.payload[item] };
      });
      return {
        ...state,
        ...hydrateState,
      };
    });
  },
});

export const getseoHomeSlice = (state: IRootState): SeoHome => state.seoHomeSlice;

export const { getSeoHomeStart, getSeoHomeSuccess } = seoHomeSlice.actions;

export default seoHomeSlice.reducer;
