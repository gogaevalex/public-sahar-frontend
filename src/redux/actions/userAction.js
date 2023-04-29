export const CHANGE_USER_DATA = 'CHANGE_USER_DATA';
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


export const ADD_GENDER = 'ADD_GENDER';
export const ADD_GENDER_SUCCESS = 'ADD_GENDER_SUCCESS';
export const ADD_GENDER_ERROR = 'ADD_GENDER_ERROR';

export const addGender = (params) => ({
	type: ADD_GENDER,
	params,
});

export const addGenderSuccess = (data) => ({
	type: ADD_GENDER_SUCCESS,
	data,
});

export const addGenderError = (error) => ({
	type: ADD_GENDER_ERROR,
	error,
});

export const ADD_SCHOOL = 'ADD_SCHOOL';
export const ADD_SCHOOL_SUCCESS = 'ADD_SCHOOL_SUCCESS';
export const ADD_SCHOOL_ERROR = 'ADD_SCHOOL_ERROR';

export const addSchool = (params) => ({
	type: ADD_SCHOOL,
	params,
});

export const addSchoolSuccess = (data) => ({
	type: ADD_SCHOOL_SUCCESS,
	data,
});

export const addSchoolError = (error) => ({
	type: ADD_SCHOOL_ERROR,
	error,
});

export const ADD_FIRSTNAME = 'ADD_FIRSTNAME';
export const ADD_FIRSTNAME_SUCCESS = 'ADD_FIRSTNAME_SUCCESS';
export const ADD_FIRSTNAME_ERROR = 'ADD_FIRSTNAME_ERROR';

export const addName = (params) => ({
	type: ADD_FIRSTNAME,
	params,
});

export const addNameSuccess = (data) => ({
	type: ADD_FIRSTNAME_SUCCESS,
	data,
});

export const addNameError = (error) => ({
	type: ADD_FIRSTNAME_ERROR,
	error,
});
export const ADD_LASTNAME = 'ADD_LASTNAME';
export const ADD_LASTNAME_SUCCESS = 'ADD_LASTNAME_SUCCESS';
export const ADD_LASTNAME_ERROR = 'ADD_LASTNAME_ERROR';

export const addSurname = (params) => ({
	type: ADD_LASTNAME,
	params,
});

export const addSurnameSuccess = (data) => ({
	type: ADD_LASTNAME_SUCCESS,
	data,
});

export const addSurnameError = (error) => ({
	type: ADD_LASTNAME_ERROR,
	error,
});
export const UPDATE_NONCE = 'UPDATE_NONCE';
export const UPDATE_NONCE_SUCCESS = 'UPDATE_NONCE_SUCCESS';
export const UPDATE_NONCE_ERROR = 'UPDATE_NONCE_ERROR';

export const updateNonce = (params) => ({
	type: UPDATE_NONCE,
	params,
});

export const updateNonceSuccess = (data) => ({
	type: UPDATE_NONCE_SUCCESS,
	data,
});

export const updateNonceError = (error) => ({
	type: UPDATE_NONCE_ERROR,
	error,
});
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
export const UPDATE_ORDER_ERROR = 'UPDATE_ORDER_ERROR';

export const updateOrder = (params) => ({
	type: UPDATE_ORDER,
	params,
});

export const updateOrderSuccess = (data) => ({
	type: UPDATE_ORDER_SUCCESS,
	data,
});

export const updateOrderError = (error) => ({
	type: UPDATE_ORDER_ERROR,
	error,
});
export const UPDATE_QUESTION_NUMBER = 'UPDATE_QUESTION_NUMBER';
export const UPDATE_QUESTION_NUMBER_SUCCESS = 'UPDATE_QUESTION_NUMBER_SUCCESS';
export const UPDATE_QUESTION_NUMBER_ERROR = 'UPDATE_QUESTION_NUMBER_ERROR';

export const updateQuestionNumber = (params) => ({
	type: UPDATE_QUESTION_NUMBER,
	params,
});

export const updateQuestionNumberSuccess = (data) => ({
	type: UPDATE_QUESTION_NUMBER_SUCCESS,
	data,
});

export const updateQuestionNumberError = (error) => ({
	type: UPDATE_QUESTION_NUMBER_ERROR,
	error,
});
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUser = (params) => ({
	type: GET_USER,
	params,
});

export const getUserSuccess = (data) => ({
	type: GET_USER_SUCCESS,
	data,
});

export const getUserError = (error) => ({
	type: GET_USER_ERROR,
	error,
});



