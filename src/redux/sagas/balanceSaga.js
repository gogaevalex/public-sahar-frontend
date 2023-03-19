import {
    put, takeEvery, all, call,
} from 'redux-saga/effects';
import {
    BALANCE,
    getBalanceSuccess,
    getBalanceError,

} from '../actions';
import $api from '../../utils/api';

function* getBalanceRequest() {
    try {
        const result = 54;//api call should be here instead

        yield put(getBalanceSuccess(result));

    } catch (error) {
        yield put(getBalanceError(error));
    }
}

export default function* QuestionSaga() {
    yield all([
        takeEvery(BALANCE, getBalanceRequest),
    ]);
}
