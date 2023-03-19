import {
    BALANCE,
    BALANCE_SUCCESS,
    BALANCE_ERROR,
} from '../actions';

const initialState = {
    isLoad: false,
    data: {
        isPremium: false,
        paidRevealNamesLeft: 0
    },
    error: null,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case BALANCE:
            return {
                ...state,
                isLoad: true,
            };
        case BALANCE_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoad: false,
            };
        case BALANCE_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        default:
            return state;
    }
};
