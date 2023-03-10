import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas';
import rootReducer from '../redux/reducers';

export const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		combineReducers(rootReducer),
		composeWithDevTools(
			applyMiddleware(sagaMiddleware),
		),
	);

	sagaMiddleware.run(rootSaga);

	return store;
};
