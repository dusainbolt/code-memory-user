import {
  postLoginActionSuccess,
  POST_LOGIN_ERROR,
  POST_LOGIN_SUCCESS,
} from "@Redux/actionsTypes/loginActionTypes";
import {
  POST_LOGIN_REQUESTING,
  postLoginAction,
  postLoginActionError,
} from "@Redux/actionsTypes/loginActionTypes";
import { LoginInput } from "src/types/LoginModel";

export const actionLogin = {
  postLogin: (loginInput: LoginInput): postLoginAction => ({
    type: POST_LOGIN_REQUESTING,
    loginInput,
  }),
  postLoginSuccess: (token: string): postLoginActionSuccess => ({
    type: POST_LOGIN_SUCCESS,
    token,
  }),
  postLoginError: (messageError: string): postLoginActionError => ({
    type: POST_LOGIN_ERROR,
    messageError,
  }),
};
