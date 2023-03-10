import {
	ALL_CITY,
	ALL_CITY_SUCCESS,
	ALL_CITY_ERROR,
} from '../actions/cityAction';

const initialState = {
    isLoad: false,
    data: null,
    error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case ALL_CITY:
		return {
			...state,
            isLoad: true,
		};
	case ALL_CITY_SUCCESS:
		return {
			...state,
			data: action.data,
            isLoad: false,
		};
	case ALL_CITY_ERROR:
		return {
			...state,
            error: action.error,
            isLoad: false,
		};
    default:
        return state;
    }
};
