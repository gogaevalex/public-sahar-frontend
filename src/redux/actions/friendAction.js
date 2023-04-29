export const PEOPLE_LIST = 'PEOPLE_LIST';
export const PEOPLE_LIST_SUCCESS = 'PEOPLE_LIST_SUCCESS';
export const PEOPLE_LIST_ERROR = 'PEOPLE_LIST_ERROR';

export const getPeopleList = (params) => ({
	type: PEOPLE_LIST,
	params,
});

export const getPeopleListSuccess = (data) => ({
	type: PEOPLE_LIST_SUCCESS,
	data,
});

export const getPeopleListError = (error) => ({
	type: PEOPLE_LIST_ERROR,
	error,
});

export const ADD_FRIEND = 'ADD_FRIEND';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR';

export const addFriend = (params) => ({
	type: ADD_FRIEND,
	params,
});

export const addFriendSuccess = (data) => ({
	type: ADD_FRIEND_SUCCESS,
	data,
});

export const addFriendError = (error) => ({
	type: ADD_FRIEND_ERROR,
	error,
});


export const FRIEND_LIST = 'FRIEND_LIST';
export const FRIEND_LIST_SUCCESS = 'FRIEND_LIST_SUCCESS';
export const FRIEND_LIST_ERROR = 'FRIEND_LIST_ERROR';

export const getFriendList = (params) => ({
	type: FRIEND_LIST,
	params,
});

export const getFriendListSuccess = (data) => ({
	type: FRIEND_LIST_SUCCESS,
	data,
});

export const getFriendListError = (error) => ({
	type: FRIEND_LIST_ERROR,
	error,
});
