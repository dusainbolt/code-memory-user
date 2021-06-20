import { getSeoHomeRequest } from '@Services/seoHomeRequest';
import { put, call, takeEvery, all, fork } from 'redux-saga/effects';

// import * as actionCreators from '../actionCreators/lyricsActionCreators';
import * as actionTypes from '../actionsTypes/seoHomeActionTypes';

function* onGetSeoHome() {
    try {
        // yield put(getSeoHomeRequest());
        // const { data } = yield call(fetchLyrics, artist, song);
        // yield put(actionCreators.getLyricsSuccess(data.lyrics));
    } catch (error) {
        // yield put(actionCreators.getLyricsFailure(error.response.data.error));
    }
}

function* watchHandleSeoHome() {
    yield takeEvery(actionTypes.GET_SEO_HOME, onGetSeoHome);
}

export default function* seoHomeSaga(): any {
    yield all([fork(watchHandleSeoHome)]);
}
