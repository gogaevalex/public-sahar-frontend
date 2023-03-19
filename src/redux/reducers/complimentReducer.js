import {
    COMPLIMENT_LIST,
    COMPLIMENT_LIST_SUCCESS,
    COMPLIMENT_LIST_ERROR,
} from '../actions';

const initialState = {
    isLoad: false,
    data: null,
    error: null,
};

export default (state = initialState, action) => {
    console.log("comp action type", action.type)
    switch (action.type) {
        case COMPLIMENT_LIST:
            return {
                ...state,
                isLoad: true,
            };
        case COMPLIMENT_LIST_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoad: false,
            };
        case COMPLIMENT_LIST_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        default:
            return state;
    }
};
