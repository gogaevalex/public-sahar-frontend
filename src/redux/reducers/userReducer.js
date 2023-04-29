import {
    CHANGE_USER_DATA,
    CHANGE_USER_DATA_SUCCESS,
    CHANGE_USER_DATA_ERROR,
    ADD_GENDER,
    ADD_GENDER_SUCCESS,
    ADD_GENDER_ERROR,
    ADD_SCHOOL,
    ADD_SCHOOL_SUCCESS,
    ADD_SCHOOL_ERROR,
    ADD_FIRSTNAME,
    ADD_FIRSTNAME_SUCCESS,
    ADD_FIRSTNAME_ERROR,
    ADD_LASTNAME,
    ADD_LASTNAME_SUCCESS,
    ADD_LASTNAME_ERROR,
    UPDATE_NONCE,
    UPDATE_NONCE_SUCCESS,
    UPDATE_NONCE_ERROR,
    UPDATE_ORDER,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_ERROR,
    UPDATE_QUESTION_NUMBER,
    UPDATE_QUESTION_NUMBER_SUCCESS,
    UPDATE_QUESTION_NUMBER_ERROR,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,

} from '../actions/userAction';

const initialState = {
    username: null,
    firstName: null,
    lastName: null,
    numberClass: null,
    school: null,
    schoolId: null,
    coins: null,
    justEarned: null,
    startTimeGame: null,
    city: null,
    cityId: null,
    gender: "male",
    error: null,
    nonce: 1,
    order: 11,
    questionNumber: 0,
    isLoad: false

};

export default (state = initialState, action) => {

    switch (action.type) {

        case CHANGE_USER_DATA:

            return {
                ...state,
                ...action.params,
            };
        case ADD_GENDER:
            console.log("state", state);
            return {
                ...state, isLoad: true,

            };
        case ADD_GENDER_SUCCESS:
            console.log("action", action);
            return {

                ...state,
                gender: action.data,
                isLoad: false,
                error: null,


            };
        case ADD_GENDER_ERROR:
            return {
                ...state,
                erorr: action.error,
                isLoad: false,

            };
        case ADD_SCHOOL:
            return {
                ...state,
                isLoad: true,

            };
        case ADD_SCHOOL_SUCCESS:
            return {
                ...state,
                schoolId: action.data,
                isLoad: false


            };
        case ADD_SCHOOL_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,


            };
        case ADD_FIRSTNAME:
            return {
                ...state,
                isLoad: true,
            };
        case ADD_FIRSTNAME_SUCCESS:
            return {
                ...state,
                firstName: action.data,
                isLoad: false,
            };
        case ADD_FIRSTNAME_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        case ADD_LASTNAME:
            return {
                ...state,
                isLoad: true,
            };
        case ADD_LASTNAME_SUCCESS:
            return {
                ...state,
                lastName: action.data,
                isLoad: false,
            };
        case ADD_LASTNAME_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        case UPDATE_NONCE:
            return {
                ...state,
                isLoad: true,
            };
        case UPDATE_NONCE_SUCCESS:
            console.log("NONCE", action.data)
            return {
                ...state,
                nonce: action.data.data.nonce,
                isLoad: false,
            };
        case UPDATE_NONCE_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        case UPDATE_ORDER:
            return {
                ...state,
                isLoad: true,
            };
        case UPDATE_ORDER_SUCCESS:
            console.log("QQQQQQQQQ", action.data)
            return {
                ...state,
                // order: action.data.data.order,
                isLoad: false,
            };
        case UPDATE_ORDER_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        case UPDATE_QUESTION_NUMBER:

            return {
                ...state,
                isLoad: true,
            };
        case UPDATE_QUESTION_NUMBER_SUCCESS:
            console.log("QNUM", action.data)
            return {
                ...state,
                questionNumber: action.data.data.questionNumber,
                isLoad: false,
            };
        case UPDATE_QUESTION_NUMBER_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        case GET_USER:
            return {
                ...state,
                isLoad: true,
            };
        case GET_USER_SUCCESS:
            console.log("USER", action.data)
            return {
                ...state,
                ...action.data.data.user,
                isLoad: false,
            };
        case GET_USER_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            };
        default:
            return state;
    }
};
