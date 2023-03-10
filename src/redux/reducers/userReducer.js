import {
	CHANGE_USER_DATA,
	CHANGE_USER_DATA_SUCCESS,
	CHANGE_USER_DATA_ERROR,
} from '../actions/userAction';

const initialState = {
    username: null,
    firstName: null,
    lastName: null,

    numberClass: null,
    school: null, 
    schoolId: null,
    city: null,
    cityId: null,
    sex: "male",
    error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case CHANGE_USER_DATA:
		return {
			...state,
            ...action.params,
		};
    default:
        return state;
    }
};
