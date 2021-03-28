import { all } from 'redux-saga/effects'

import { watchIndex } from './indexSaga'

function* rootSaga() {
    yield all([watchIndex()]);
}

export default rootSaga;;
