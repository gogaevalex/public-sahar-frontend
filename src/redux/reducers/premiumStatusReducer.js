import {
    PREMIUM_STATUS,
    PREMIUM_STATUS_SUCCESS,
    PREMIUM_STATUS_ERROR,
} from '../actions';

const initialState = {
    isLoad: false,
    data: false,
    error: null,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case PREMIUM_STATUS:
            return {
                ...state,
                isLoad: true,
            };
        case PREMIUM_STATUS_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoad: false,
            };
        case PREMIUM_STATUS_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        default:
            return state;
    }
};
