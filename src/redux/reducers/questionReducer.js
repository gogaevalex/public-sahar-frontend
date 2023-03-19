import {
    QUESTION_LIST,
    QUESTION_LIST_SUCCESS,
    QUESTION_LIST_ERROR,
} from '../actions';

const initialState = {
    isLoad: false,
    data: null,
    error: null,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case QUESTION_LIST:
            return {
                ...state,
                isLoad: true,
            };
        case QUESTION_LIST_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoad: false,
            };
        case QUESTION_LIST_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        default:
            return state;
    }
};
