import { put, takeEvery, all, fork } from 'redux-saga/effects';
import * as actionTypes from '@Redux/actionsTypes/loginActionTypes';
import { actionLogin } from '@Redux/actionCreators/loginActionCreators';
import { actionUser } from '@Redux/actionCreators/userActionCreators';
import { LoginOutput } from '@Models/login-dto';
import { postLoginRequest } from '@GraphQL/userRequest';
import CookieService from '@Services/cookieService';

function* onPostLogin(action: actionTypes.postLoginAction) {
    try {
        const { token, user } = yield postLoginRequest(action.loginInput) as LoginOutput;
        const cookieService = new CookieService();
        yield all([cookieService.setUserCookie(user), cookieService.setLoginCookie(token)]);
        yield put(actionLogin.postLoginSuccess(token));
        yield put(actionUser.setUser(user));
    } catch (error) {
        yield put(actionLogin.postLoginError(error.message as string));
    }
}

function* watchHandleLogin() {
    yield takeEvery(actionTypes.POST_LOGIN_REQUESTING, onPostLogin);
}

export default function* loginSaga(): any {
    yield all([fork(watchHandleLogin)]);
}
