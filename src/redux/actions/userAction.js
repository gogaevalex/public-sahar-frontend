export const CHANGE_USER_DATA =  'CHANGE_USER_DATA';
// export const CHANGE_USER_DATA_SUCCESS =  'CHANGE_USER_DATA_SUCCESS';
// export const CHANGE_USER_DATA_ERROR =  'CHANGE_USER_DATA_ERROR';

export const changeUserData = (params) => ({
	type: CHANGE_USER_DATA,
	params,
});

// export const changeUserDataSuccess = (data) => ({
// 	type: CHANGE_USER_DATA_SUCCESS,
// 	data,
// });

// export const changeUserDataError = (error) => ({
// 	type: CHANGE_USER_DATA_ERROR,
// 	error,
// });
