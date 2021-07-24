import { Login } from '@Models/LoginModel';
// import { loginAction, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR } from "@Redux/actionsTypes/loginActionTypes";
import * as userActionTypes from '@Redux/actionsTypes/userActionTypes';
import * as loginActionTypes from '@Redux/actionsTypes/loginActionTypes';
import CookieService from '@Services/cookieService';

export const loginReducer = (state: Login = {}, action: loginActionTypes.loginAction): Login => {
  switch (action.type) {
    case loginActionTypes.POST_LOGIN_SUCCESS:
      return { ...state, token: action.token, messageError: '' };
    case loginActionTypes.POST_LOGIN_ERROR:
      return { ...state, messageError: action.messageError };
    case userActionTypes.USER_START_APP:
      return { ...state, token: new CookieService().getLoginCookie() };
    default:
      return state;
  }
};
