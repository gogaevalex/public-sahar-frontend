import {
	put, takeEvery, all, call,
} from 'redux-saga/effects';
import {
	ALL_CITY,
	getAllCitySuccess,
	getAllCityError,

} from '../actions';
import $api from '../../utils/api';

function* getAllCityRequest() {
	try {
		const result = yield call(() => $api.get('/city/all'));
		yield put(getAllCitySuccess(result.data));
	} catch (error) {
		yield put(getAllCityError(error));
	}
}

export default function* citySaga() {
	yield all([
		takeEvery(ALL_CITY, getAllCityRequest),
	]);
}
