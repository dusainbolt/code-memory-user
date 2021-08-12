import { put, takeLatest, all, fork } from 'redux-saga/effects';
import { postLoginRequest } from '@GraphQL/userRequest';
import { loginSliceError, loginSliceStart, loginSliceSuccess } from '@Redux/slices/loginSlice';
import { LoginActionInput } from '@Redux/actionsTypes/loginActionTypes';

function* loginSaga(action: LoginActionInput) {
  try {
    const data = yield postLoginRequest(action.payload.input);
    yield put(loginSliceSuccess(data));
  } catch (error) {
    yield put(loginSliceError(error.message as string));
  }
}

function* watchHandleLogin() {
  yield takeLatest(loginSliceStart, loginSaga);
}

export default function* WatchLoginSaga(): any {
  yield all([fork(watchHandleLogin)]);
}
