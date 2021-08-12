import { all, fork } from 'redux-saga/effects';
import WatchLoginSaga from './sagas/loginSaga';
import seoHomeSaga from './sagas/seoHomeSaga';

export default function* rootSaga(): any {
  yield all([fork(seoHomeSaga), fork(WatchLoginSaga)]);
}
