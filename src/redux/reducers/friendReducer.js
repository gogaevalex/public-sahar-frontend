import {
	PEOPLE_LIST,
	PEOPLE_LIST_SUCCESS,
	PEOPLE_LIST_ERROR,
} from '../actions/friendAction';

const initialState = {
    list: null,
    isLoad: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case PEOPLE_LIST:
		return {
			...state,
			isLoad: true,
		};
	case PEOPLE_LIST_SUCCESS:
		return {
			...state,
			list: action.data,
			isLoad: false,
			error: null,
		};
	case PEOPLE_LIST_ERROR:
		return {
			...state,
			isLoad: false,
			error: action.error,
			isAuth: false,
		};
    default:
        return state;
    }
};
