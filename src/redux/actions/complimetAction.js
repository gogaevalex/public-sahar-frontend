export const COMPLIMENT_LIST = 'COMPLIMENT_LIST';
export const COMPLIMENT_LIST_SUCCESS = 'COMPLIMENT_LIST_SUCCESS';
export const COMPLIMENT_LIST_ERROR = 'COMPLIMENT_LIST_ERROR';

export const getComplimentList = (params) => ({
    type: COMPLIMENT_LIST,
    params,
});

export const getComplimentListSuccess = (data) => ({
    type: COMPLIMENT_LIST_SUCCESS,
    data,
});

export const getComplimentListError = (error) => ({
    type: COMPLIMENT_LIST_ERROR,
    error,
});
