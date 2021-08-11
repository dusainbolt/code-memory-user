import { AppState } from '@Redux/store';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface MyAccountReducer {
  visibleMyAccount: boolean;
  isFirstAccount: boolean;
  isLoadingMyAccount: boolean;
}

const initialState: MyAccountReducer = {
  visibleMyAccount: false,
  isFirstAccount: false,
  isLoadingMyAccount: false,
};

const hydrate = createAction<AppState>(HYDRATE);

export const myAccountSlice = createSlice({
  name: 'MyAccount',
  initialState,
  reducers: {
    setVisibleModalMyAccount: (state: MyAccountReducer, action: any) => {
      const { isFirstAccount, visibleMyAccount } = action.payload;
      return { ...state, isFirstAccount, visibleMyAccount };
    },
    setLoadingMyAccount: (state: MyAccountReducer, action: any) => {
      return { ...state, isLoadingMyAccount: action.payload };
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload['storeSlice'],
      };
    });
  },
});

export const getMyAccountSlice = (state: any) => state.myAccountSlice;

export const { setVisibleModalMyAccount, setLoadingMyAccount } = myAccountSlice.actions;

export default myAccountSlice.reducer;
