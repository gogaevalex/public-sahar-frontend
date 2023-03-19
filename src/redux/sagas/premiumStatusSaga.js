import {
    put, takeEvery, all, call,
} from 'redux-saga/effects';
import {
    PREMIUM_STATUS,
    getPremiumStatusSuccess,
    getPremiumStatusError,

} from '../actions';
import $api from '../../utils/api';

function* getPremiumStatusRequest() {
    try {
        const result = {
            isPremium: false,
            paidRevealNamesLeft: 2

        }//api call should be here instead

        yield put(getPremiumStatusSuccess(result));

    } catch (error) {
        yield put(getPremiumStatusError(error));
    }
}

export default function* QuestionSaga() {
    yield all([
        takeEvery(PREMIUM_STATUS, getPremiumStatusRequest),
    ]);
}
