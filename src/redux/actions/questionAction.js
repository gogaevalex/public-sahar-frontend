export const QUESTION_LIST = 'QUESTION_LIST';
export const QUESTION_LIST_SUCCESS = 'QUESTION_LIST_SUCCESS';
export const QUESTION_LIST_ERROR = 'QUESTION_LIST_ERROR';

export const getQuestionList = (params) => ({
    type: QUESTION_LIST,
    params,
});

export const getQuestionListSuccess = (data) => ({
    type: QUESTION_LIST_SUCCESS,
    data,
});

export const getQuestionListError = (error) => ({
    type: QUESTION_LIST_ERROR,
    error,
});
