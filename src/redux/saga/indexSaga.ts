import { getDataUsers } from '@Services/userRequest';
import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { ActionTypes } from "@Redux/actions/index";
import { increment } from "@Redux/reducer/indexReducer";

export const SAGA_ACTION = 'SAGA_ACTION';
export const SAGA_ACTION_SUCCESS = `${SAGA_ACTION}_SUCCESS`;

function* IndexSagaAction(action) {
    // yield delay(10000);
    const response = yield getDataUsers();
    yield console.log(response);
    yield put(increment(1));
}

export function* watchIndex() {
    yield takeLatest(ActionTypes.FETCH_DATA_HOME_START, IndexSagaAction);
}