import {
	PEOPLE_LIST,
	PEOPLE_LIST_SUCCESS,
	PEOPLE_LIST_ERROR,
} from '../actions/friendAction';

const initialState = {
	peopleList: {
		list: null,
		isLoad: false,
		error: null,
	},
	friendList: {
		list: null,
		isLoad: false,
		error: null,
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
	case PEOPLE_LIST:
		return {
			...state,
			people: {
				...state.people,
				isLoad: true,
			}
		};
	case PEOPLE_LIST_SUCCESS:
		return {
			...state,
			peopleList: {
				list: action.data,
				isLoad: false,
				error: null,
			}
		};
	case PEOPLE_LIST_ERROR:
		return {
			...state,
			peopleList: {
				...state.people,
				error: action.error,
				isLoad: false,
			}
		};
    default:
        return state;
    }
};
