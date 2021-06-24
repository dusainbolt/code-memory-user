import { postLoginAction } from './../actionsTypes/loginActionTypes';
import { postLoginRequest } from './../../services/userRequest';
import { put, takeEvery, all, fork } from 'redux-saga/effects';

// import * as actionCreators from '../actionCreators/lyricsActionCreators';
import * as actionTypes from '../actionsTypes/loginActionTypes';
import { actionLogin } from '@Redux/actionCreators/loginActionCreators';

function* onPostLogin(action: postLoginAction) {
    try {
        const { token, user } = yield postLoginRequest(action.loginInput);
        yield put(actionLogin.postLoginSuccess(token as string, user.id));
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
