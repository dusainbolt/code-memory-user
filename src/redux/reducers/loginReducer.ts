import { Login } from "@Models/login-dto";
import { loginAction, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR } from "@Redux/actionsTypes/loginActionTypes";

export const loginReducer = (state: Login = {}, action: loginAction): Login => {
    switch (action.type) {
        case POST_LOGIN_SUCCESS:
            return { ...state, token: action.token };
        case POST_LOGIN_ERROR:
            return { ...state, messageError: action.messageError };
        default:
            return state;
    }
};
