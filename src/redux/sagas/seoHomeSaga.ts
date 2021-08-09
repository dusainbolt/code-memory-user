import { getSeoHomeRequest } from "@GraphQL/seoHomeRequest";
import { SeoHome } from "src/types/SeoHomeModel";
import { setTryCatchServer } from "@Redux/actionCreators/loadingActionCreators";
import { getSeoHomeSuccess } from "@Redux/actionCreators/seoHomeActionCreators";
import { put, takeEvery, all, fork } from "redux-saga/effects";
import * as actionTypes from "../actionsTypes/seoHomeActionTypes";

function* onGetSeoHome() {
  try {
    const seoHome: SeoHome = yield getSeoHomeRequest();
    yield put(getSeoHomeSuccess(seoHome));
  } catch (error: any) {
    yield put(setTryCatchServer(error.message));
  }
}

function* watchHandleSeoHome() {
  yield takeEvery(actionTypes.GET_SEO_HOME, onGetSeoHome);
}

export default function* seoHomeSaga(): any {
  yield all([fork(watchHandleSeoHome)]);
}
