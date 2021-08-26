import { put, takeLatest, all, fork, takeEvery } from 'redux-saga/effects';
import { postLoginRequest } from '@GraphQL/userRequest';
import { loginSliceError, loginSliceStart, loginSliceSuccess } from '@Redux/slices/loginSlice';
import { LoginActionInput } from '@Redux/actionsTypes/loginActionTypes';
import { handleMessageErrorSaga } from '@Redux/saga';

function* loginSaga(action: LoginActionInput) {
  try {
    const data = yield postLoginRequest(action.payload.input);
    yield put(loginSliceSuccess(data));
  } catch (error) {
    yield put(loginSliceError(error.message as string));
    yield handleMessageErrorSaga(error);
  }
}

// function* watchHandleLogin() {
//   yield takeLatest(loginSliceStart, loginSaga);
// }

export default function* WatchLoginSaga(): any {
  yield takeEvery(loginSliceStart, loginSaga);
}
