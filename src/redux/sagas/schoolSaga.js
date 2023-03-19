import {
    put, takeEvery, all, call, delay
} from 'redux-saga/effects';
import {
    SCHOOL_LIST,
    getSchoolListSuccess,
    getSchoolListError,

} from '../actions';
import $api from '../../utils/api';

function* getSchoolListRequest() {

    try {
        //   const result = ["c1", "c2", "c3"];
        const result = yield call(() => $api.get('/schools'));
        yield delay(1000)
        yield put(getSchoolListSuccess(result.data));

    } catch (error) {
        yield put(getSchoolListError(error));
    }
}

export default function* schoolSaga() {
    yield all([
        takeEvery(SCHOOL_LIST, getSchoolListRequest),
    ]);
}
