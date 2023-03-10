import {
	put, takeEvery, all, call,
} from 'redux-saga/effects';
import {
	PEOPLE_LIST,
	getPeopleListSuccess,
	getPeopleListError,

} from '../actions';
import $api from '../../utils/api';

function* getAllPeopleInSchool() {
	try {
		const result = yield call((schoolId) => $api.get(`/school/people/${schoolId}`));
		yield put(getPeopleListSuccess(result.data));
	} catch (error) {
		yield put(getPeopleListError(error));
	}
}

export default function* friendSaga() {
	yield all([
		takeEvery(PEOPLE_LIST, getAllPeopleInSchool),
	]);
}
