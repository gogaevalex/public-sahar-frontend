import {
	put, takeEvery, all, call,
} from 'redux-saga/effects';
import {
	PEOPLE_LIST,
	getPeopleListSuccess,
	getPeopleListError,
	ADD_FRIEND,
	addFriendSuccess,
	addFriendError

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


function* postAddFriend(data) {
	try {
		const result = yield call(({ userId }) => $api.post('/contact/add', { userId }), data.params);
		yield put(addFriendSuccess(result.data));
	} catch (error) {
		yield put(addFriendError(error));
	}
}

export default function* friendSaga() {
	yield all([
		takeEvery(PEOPLE_LIST, getAllPeopleInSchool),
		takeEvery(ADD_FRIEND, postAddFriend),
	]);
}
