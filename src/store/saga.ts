import {fork, all} from 'redux-saga/effects';
import {counterSaga} from './count/saga';

export function* rootSaga() {
    yield all([
        counterSaga,
    ].map(saga => fork(saga)));
}
