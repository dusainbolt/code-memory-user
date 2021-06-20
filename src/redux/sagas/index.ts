import { all, fork } from 'redux-saga/effects';
import seoHomeSaga from './seoHomeSaga';

export default function* rootSaga(): any {
    yield all([fork(seoHomeSaga)]);
}
