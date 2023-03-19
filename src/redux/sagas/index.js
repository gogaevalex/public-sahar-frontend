import { fork, all } from 'redux-saga/effects';
import friendSaga from './friendSaga';
import citySaga from './citySaga';
import schoolSaga from './schoolSaga';
import questionSaga from './questionSaga';
import balanceSaga from './balanceSaga';
import earnedCoinsSaga from './earnedCoinsSaga';
import complimentSaga from './complimentSaga';
import premiumStatusSaga from './premiumStatusSaga';





export default function* root() {
	yield all([
		fork(friendSaga),
		fork(citySaga),
		fork(schoolSaga),
		fork(questionSaga),
		fork(balanceSaga),
		fork(earnedCoinsSaga),
		fork(complimentSaga),
		fork(premiumStatusSaga)
	]);
}
