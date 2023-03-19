export const SCHOOL_LIST = 'SCHOOL_LIST';
export const SCHOOL_LIST_SUCCESS = 'SCHOOL_LIST_SUCCESS';
export const SCHOOL_LIST_ERROR = 'SCHOOL_LIST_ERROR';

export const getSchoolList = (params) => ({
    type: SCHOOL_LIST,
    params,
});

export const getSchoolListSuccess = (data) => ({
    type: SCHOOL_LIST_SUCCESS,
    data,
});

export const getSchoolListError = (error) => ({
    type: SCHOOL_LIST_ERROR,
    error,
});
