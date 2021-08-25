import { TagSlice } from '@Models/TagModel';
import { GetListTagAction, GetListTagSuccessAction } from '@Redux/actionsTypes/tagActionTypes';
import { RootState } from '@Redux/reducer';
import { AppState } from '@Redux/store';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: TagSlice = {
  dataNew: [],
};

const hydrate = createAction<AppState>(HYDRATE);

export const tagSlice = createSlice({
  name: 'tagSlice',
  initialState,
  reducers: {
    getListTagSliceStart: (state: TagSlice, action: GetListTagAction) => state,
    getListTagSliceSuccess: (state: TagSlice, { payload }: GetListTagSuccessAction) => {
      state.dataNew = payload?.dataTags ?? [];
    },
    getListTagSliceError: (state: TagSlice, action: any) => state,
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

export const { getListTagSliceSuccess, getListTagSliceStart, getListTagSliceError } = tagSlice.actions;

export default tagSlice.reducer;
