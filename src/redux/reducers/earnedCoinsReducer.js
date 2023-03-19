import {
    EARNED_COINS,
    EARNED_COINS_SUCCESS,
    EARNED_COINS_ERROR,
} from '../actions';

const initialState = {
    isLoad: false,
    data: null,
    error: null,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case EARNED_COINS:
            return {
                ...state,
                isLoad: true,
            };
        case EARNED_COINS_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoad: false,
            };
        case EARNED_COINS_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        default:
            return state;
    }
};
