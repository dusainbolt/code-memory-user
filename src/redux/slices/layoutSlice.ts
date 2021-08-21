import { LayoutSlice } from '@Models/LayoutModel';
import { SetNotifyAction } from '@Redux/actionsTypes/layoutActionTypes';
import { RootState } from '@Redux/reducer';
import { createSlice } from '@reduxjs/toolkit';

const initialState: LayoutSlice = {};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setNotifySlice: (state: LayoutSlice, action: SetNotifyAction) => {
      state.notify = action.payload;
    },
  },
});

export const getLayoutSlice = (state: RootState) => state.layoutSlice as LayoutSlice;

export const { setNotifySlice } = layoutSlice.actions;

export default layoutSlice.reducer;
