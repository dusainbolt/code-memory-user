import { LoginSlice } from '@Models/LoginModel';
import { LoginActionInput, LoginActionOutput } from '@Redux/actionsTypes/loginActionTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState: LoginSlice = {
  messageError: '',
  token: '',
  user: {},
  loadingLogin: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSliceStart: (state: LoginSlice, action: LoginActionInput) => {
      state.loadingLogin = true;
    },
    loginSliceSuccess: (state: LoginSlice, action: LoginActionOutput) => {
      state.loadingLogin = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginSliceError: (state: LoginSlice, action: any) => {
      state.loadingLogin = false;
    },
  },
});

export const getloginSlice = (state: any) => state.loginSlice;

export const { loginSliceStart, loginSliceSuccess, loginSliceError } = loginSlice.actions;

export default loginSlice.reducer;
