import {
    put, takeEvery, all, call,
} from 'redux-saga/effects';
import {
    ADD_GENDER,
    addGenderSuccess,
    addGenderError,
    ADD_SCHOOL,
    addSchoolSuccess,
    addSchoolError,
    ADD_FIRSTNAME,
    addNameError,
    addNameSuccess,
    ADD_LASTNAME,
    addSurnameSuccess,
    addSurnameError,
    UPDATE_NONCE,
    updateNonceSuccess,
    updateNonceError,
    UPDATE_ORDER,
    updateOrderSuccess,
    updateOrderError,
    UPDATE_QUESTION_NUMBER,
    updateQuestionNumberSuccess,
    updateQuestionNumberError,
    GET_USER,
    getUserSuccess,
    getUserError,

} from '../actions';
import $api from '../../utils/api';

function* addGenderRequest({ params }) {
    try {
        //api call should be here instead
        const result = yield call(({ gender }) => $api.post('/user/gender', { gender }), params);
        yield put(addGenderSuccess(result));

    } catch (error) {
        yield put(addGenderError(error));
    }
}
function* addSchoolRequest({ params }) {
    try {
        console.log("params", params)
        //api call should be here instead
        const result = yield call(({ schoolId }) => $api.post('/user/school', { schoolId }), params);
        yield put(addSchoolSuccess(result));

    } catch (error) {
        yield put(addSchoolError(error));
    }
}
function* addFirstNameRequest({ params }) {
    try {
        //api call should be here instead
        const result = yield call(({ firstName }) => $api.post('/user/name', { firstName }), params);
        yield put(addSchoolSuccess(result));

    } catch (error) {
        yield put(addSchoolError(error));
    }
}
function* addSurnameRequest({ params }) {
    try {
        //api call should be here instead
        const result = yield call(({ lastName }) => $api.post('/user/surname', { lastName }), params);
        yield put(addSchoolSuccess(result));

    } catch (error) {
        yield put(addSchoolError(error));
    }
}
function* updateNonceRequest({ params }) {
    try {
        //api call should be here instead
        const result = yield call(({ nonce }) => $api.post('/user/nonce', { nonce }), params);
        yield put(updateNonceSuccess(result));

    } catch (error) {
        yield put(updateNonceError(error));
    }
}
function* updateOrderRequest({ params }) {
    try {

        //api call should be here instead
        const result = yield call(({ order }) => $api.post('/user/order', { order }), params);
        yield put(updateOrderSuccess(result));


    } catch (error) {
        yield put(updateOrderError(error));
    }
}
function* updateQuestionNumberRequest({ params }) {
    try {
        //api call should be here instead
        const result = yield call(({ questionNumber }) => $api.post('/user/questionNumber', { questionNumber }), params);
        yield put(updateQuestionNumberSuccess(result));

    } catch (error) {
        yield put(updateQuestionNumberError(error));
    }
}
function* getUserRequest() {
    try {
        const result = yield call(() => $api.get('/user/data'));
        yield put(getUserSuccess(result));

    } catch (error) {
        yield put(getUserError(error));
    }
}
export default function* userSaga() {
    yield all([
        takeEvery(ADD_GENDER, addGenderRequest),
        takeEvery(ADD_SCHOOL, addSchoolRequest),
        takeEvery(ADD_FIRSTNAME, addFirstNameRequest),
        takeEvery(ADD_LASTNAME, addSurnameRequest),
        takeEvery(UPDATE_NONCE, updateNonceRequest),
        takeEvery(UPDATE_ORDER, updateOrderRequest),
        takeEvery(UPDATE_QUESTION_NUMBER, updateQuestionNumberRequest),
        takeEvery(GET_USER, getUserRequest),


    ]);
}
