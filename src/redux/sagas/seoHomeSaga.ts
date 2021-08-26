// import { getSeoHomeRequest } from '@GraphQL/seoHomeRequest';
// import { SeoHome } from 'src/types/SeoHomeModel';
// import { put, takeEvery, all, fork } from 'redux-saga/effects';
// import { getSeoHomeStart, getSeoHomeSuccess } from '@Redux/slices/seoHomeSlice';

// function* onGetSeoHome() {
//   try {
//     const seoHome: SeoHome = yield getSeoHomeRequest();
//     console.log(seoHome);
//     yield put(getSeoHomeSuccess(seoHome));
//   } catch (error: any) {
//     console.log("GET SEO HOME ERROR", error.message);
//     // yield put(setTryCatchServer(error.message));
//   }
// }

// function* watchHandleSeoHome() {
//   yield takeEvery(getSeoHomeStart, onGetSeoHome);
// }

export default function* seoHomeSaga(): any {
  // yield takeEvery(getSeoHomeStart, onGetSeoHome);
}
