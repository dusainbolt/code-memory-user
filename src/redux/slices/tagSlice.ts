import { TagSlice } from '@Models/TagModel';
import { GetListTagSuccessAction, getTagDetailSuccessAction } from '@Redux/actionsTypes/tagActionTypes';
import { RootState } from '@Redux/reducer';
import { AppState } from '@Redux/store';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: TagSlice = {
  dataNew: [],
  tagDetail: {}
};

const hydrate = createAction<AppState>(HYDRATE);

export const tagSlice = createSlice({
  name: 'tagSlice',
  initialState,
  reducers: {
    getListTagSliceSuccess: (state: TagSlice, { payload }: GetListTagSuccessAction) => {
      state.dataNew = payload?.dataTags ?? [];
    },
    getTagDetailSuccess: (state: TagSlice, action: getTagDetailSuccessAction) => {
      state.tagDetail = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload['tagSlice'],
      };
    });
  },
});

export const getTagSlice = (state: RootState): TagSlice => state.tagSlice;

export const { getListTagSliceSuccess, getTagDetailSuccess } = tagSlice.actions;

export default tagSlice.reducer;
