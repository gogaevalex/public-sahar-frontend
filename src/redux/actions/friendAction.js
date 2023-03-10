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
