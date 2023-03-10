import {fork, all} from 'redux-saga/effects';
import friendSaga from './friendSaga';
import citySaga from './citySaga';

export default function* root() {
	yield all([
		fork(friendSaga),
        fork(citySaga),
	]);
}
