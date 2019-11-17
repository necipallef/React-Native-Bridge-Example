import {Action} from 'deox';
import {select, takeEvery, call} from 'redux-saga/effects';
import {incrementCountAction, setCountAction} from './action';
import {GlobalState} from '../state';
import {Alert} from 'react-native';

const maxCount = 10;

function* setCountSaga(action: Action<string, { newCount: number }>) {
    if (action.payload.newCount >= maxCount) {
        yield call(Alert.alert, '', 'Max count is reached!');
    }
}

function* incrementSaga() {
    const currentCount: number = yield select((state: GlobalState) => state.counter.currentCount);
    if (currentCount >= maxCount) {
        yield call(Alert.alert, '', 'Max count is reached!');
    }
}

export function* counterSaga() {
    yield takeEvery(setCountAction, setCountSaga);
    yield takeEvery(incrementCountAction, incrementSaga);
}
