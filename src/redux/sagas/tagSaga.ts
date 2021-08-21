import { GetListTagAction } from '@Redux/actionsTypes/tagActionTypes';
import { handleMessageErrorSaga } from '@Redux/saga';
import { getListTagSliceStart, getListTagSliceSuccess } from '@Redux/slices/tagSlice';
import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { getListTagRequest } from '../../graphql/tagRequest';

function* getListTagSaga({ payload }: GetListTagAction) {
  try {
    const data = yield getListTagRequest(payload.input, payload.fetchPolicy);
    yield delay(300);
    yield put(getListTagSliceSuccess(data));
  } catch (error) {
    yield put(getListTagSliceSuccess());
    yield handleMessageErrorSaga(error);
  }
}

function* watchHandleTag() {
  yield takeEvery(getListTagSliceStart, getListTagSaga);
}

export default function* watchTagSaga(): any {
  yield all([fork(watchHandleTag)]);
}
