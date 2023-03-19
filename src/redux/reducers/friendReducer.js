import {
	PEOPLE_LIST,
	PEOPLE_LIST_SUCCESS,
	PEOPLE_LIST_ERROR,
	ADD_FRIEND,
	ADD_FRIEND_SUCCESS,
	ADD_FRIEND_ERROR
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
	},
	friend: {
		data: null,
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
		case ADD_FRIEND:
			return {
				...state,
				friend: {
					...state.friend,
					isLoad: true,
				}
			};
		case ADD_FRIEND_SUCCESS:
			return {
				...state,
				friend: {
					data: action.data,
					isLoad: false,
					error: null,
				},
				friendList: {
					...state.friendList,
					list: state.friendList.list ? [action.data, ...state.friendList.list] : [action.data]
				}
			};
		case ADD_FRIEND_ERROR:
			return {
				...state,
				friend: {
					...state.friend,
					error: action.error,
					isLoad: false,
				}
			};
		default:
			return state;
	}
};
