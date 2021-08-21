import { ErrorSaga, NotifySystem, TypeNotify } from '@Models/LayoutModel';
import { all, fork, put } from 'redux-saga/effects';
import WatchLoginSaga from './sagas/loginSaga';
import seoHomeSaga from './sagas/seoHomeSaga';
import { setNotifySlice } from './slices/layoutSlice';

export default function* rootSaga(): any {
  yield all([fork(seoHomeSaga), fork(WatchLoginSaga)]);
}

export function* handleMessageErrorSaga(error: ErrorSaga): any {
  yield console.log('Catch Error: ', error);
  yield put(setNotifySlice({ messageNotify: error.message, typeNotify: TypeNotify.ERROR, createTime: new Date().getTime() } as NotifySystem));
}
export function* handleMessageSuccessSaga(messageNotify: string): any {
  yield put(setNotifySlice({ messageNotify, typeNotify: TypeNotify.SUCCESS, createTime: new Date().getTime() } as NotifySystem));
}
