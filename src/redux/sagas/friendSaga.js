import {
	put, takeEvery, all, call,
} from 'redux-saga/effects';
import {
	PEOPLE_LIST,
	getPeopleSuccess,
	getPeopleError,

} from '../redux/actions';
import $api from '../../utils/api';

function* getAllPeopleInSchool(data) {
	try {
		const result = yield call((schoolId) => $api.get('/school/people/:schoolId'));
		yield put(getPeopleSuccess(result.data));
	} catch (error) {
		yield put(getPeopleError(error));
	}
}

export default function* friendSaga() {
	yield all([
		takeEvery(PEOPLE_LIST, getAllPeopleInSchool),
	]);
}
