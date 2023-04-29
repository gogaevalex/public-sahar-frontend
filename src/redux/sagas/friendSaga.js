import {
	put, takeEvery, all, call,
} from 'redux-saga/effects';
import {
	PEOPLE_LIST,
	getPeopleListSuccess,
	getPeopleListError,
	FRIEND_LIST,
	getFriendListSuccess,
	getFriendListError,
	ADD_FRIEND,
	addFriendSuccess,
	addFriendError

} from '../actions';
import $api from '../../utils/api';

function* getAllPeopleInSchool() {
	try {
		const result = yield call((schoolId) => $api.get('/contact/relevant'));
		yield put(getPeopleListSuccess(result.data));
	} catch (error) {
		yield put(getPeopleListError(error));
	}
}

function* getFrinendListRequest() {
	try {
		const result = yield call(() => $api.get('/contact/user'));
		yield put(getFriendListSuccess(result.data));
	} catch (error) {
		yield put(getFriendListError(error));
	}
}

function* postAddFriend(data) {
	try {
		const result = yield call(({ contactUserId, source }) => $api.post('/contact/add', { contactUserId, source }), data.params);
		yield put(addFriendSuccess(result.data));
	} catch (error) {
		yield put(addFriendError(error));
	}
}

export default function* friendSaga() {
	yield all([
		takeEvery(PEOPLE_LIST, getAllPeopleInSchool),
		takeEvery(FRIEND_LIST, getFrinendListRequest),
		takeEvery(ADD_FRIEND, postAddFriend),
	]);
}
