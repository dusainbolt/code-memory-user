import { postLoginAction } from './../actionsTypes/loginActionTypes';
import { postLoginRequest } from './../../services/userRequest';
import { put, takeEvery, all, fork } from 'redux-saga/effects';

// import * as actionCreators from '../actionCreators/lyricsActionCreators';
import * as actionTypes from '../actionsTypes/loginActionTypes';

function* onPostLogin(action: postLoginAction) {
    try {
        const loginOutput = yield postLoginRequest(action.loginInput);
        yield console.log(loginOutput);
        // yield put(getSeoHomeSuccess(seoHome));
        // const { data } = yield call(fetchLyrics, artist, song);
        // yield put(actionCreators.getLyricsSuccess(data.lyrics));
    } catch (error) {
        // yield put(actionCreators.getLyricsFailure(error.response.data.error));
    }
}

function* watchHandleLogin() {
    yield takeEvery(actionTypes.POST_LOGIN_REQUESTING, onPostLogin);
}

export default function* loginSaga(): any {
    yield all([fork(watchHandleLogin)]);
}
