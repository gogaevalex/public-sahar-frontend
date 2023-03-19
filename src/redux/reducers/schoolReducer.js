import {
    SCHOOL_LIST,
    SCHOOL_LIST_SUCCESS,
    SCHOOL_LIST_ERROR,
} from '../actions';

const initialState = {
    isLoad: false,
    data: null,
    error: null,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SCHOOL_LIST:
            return {
                ...state,
                isLoad: true,
            };
        case SCHOOL_LIST_SUCCESS:
            return {
                ...state,
                data: action.data.schools,
                isLoad: false,
            };
        case SCHOOL_LIST_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        default:
            return state;
    }
};
