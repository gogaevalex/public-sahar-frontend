import {
    put, takeEvery, all, call,
} from 'redux-saga/effects';
import {
    EARNED_COINS,
    getEarnedCoinsSuccess,
    getEarnedCoinsError,

} from '../actions';
import $api from '../../utils/api';

function* getEarnedCoinsRequest() {
    try {
        const result = 17;//api call should be here instead

        yield put(getEarnedCoinsSuccess(result));

    } catch (error) {
        yield put(getEarnedCoinsError(error));
    }
}

export default function* EarnedCoinsSaga() {
    yield all([
        takeEvery(EARNED_COINS, getEarnedCoinsRequest),
    ]);
}
