import {
    put, takeEvery, all, call,
} from 'redux-saga/effects';
import {
    QUESTION_LIST,
    getQuestionListSuccess,
    getQuestionListError,

} from '../actions';
import $api from '../../utils/api';

function* getQuestionListRequest() {

    try {
        // const result = [
        //     {

        //         text: "Мы бы отлично смотрелись вместе ",
        //         toWhomGender: "male",
        //         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        //         questionId: 5,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 wins: 3,
        //                 userId: 53,
        //             },
        //             {

        //                 name: "Диван Покрывалкин ",
        //                 wins: 0,
        //                 userId: 54,
        //             },
        //             {

        //                 name: "Сарик Хяркин ",
        //                 wins: 0,
        //                 userId: 55,
        //             },
        //             {

        //                 name: "Мага Медов ",
        //                 wins: 3,
        //                 userId: 56,
        //             },
        //             {

        //                 name: "Сим Саловим ",
        //                 wins: 4,
        //                 userId: 57,
        //             },
        //             {

        //                 name: "Опять Понеделкина ",
        //                 wins: 7,
        //                 userId: 58,
        //             },
        //             {

        //                 name: "Сизим Открывашкина ",
        //                 wins: 1,
        //                 userId: 59,
        //             },
        //             {

        //                 name: "Иваныч Иванов ",
        //                 wins: 0,
        //                 userId: 60,
        //             }
        //         ]
        //     },

        //     {
        //         text: "Будущий знаменитый дизайнер",
        //         toWhomGender: "female",
        //         imageLink: "https://i.ibb.co/B4vcRp8/image-84.png",
        //         questionId: 8,
        //         students: [
        //             {

        //                 name: "Сарика Хяркина ",
        //                 wins: 6,
        //                 userId: 61,
        //             },
        //             {

        //                 name: "Магася Медова ",
        //                 wins: 2,
        //                 userId: 62,
        //             },
        //             {

        //                 name: "Симася Саловимич ",
        //                 wins: 0,
        //                 userId: 622,
        //             },
        //             {

        //                 name: "Опятька Понеделкина ",
        //                 wins: 3,
        //                 userId: 64,
        //             },
        //             {

        //                 name: "Сизимка Открывашкина ",
        //                 wins: 2,
        //                 userId: 65,
        //             },
        //             {

        //                 name: "Иванка Бояркина ",
        //                 wins: 0,
        //                 userId: 66,
        //             },
        //             {

        //                 name: "Дина Заврина ",
        //                 wins: 5,
        //                 userId: 67,
        //             },
        //             {

        //                 name: "Аля Ляля ",
        //                 wins: 0,
        //                 userId: 68,
        //             }
        //         ]
        //     },
        //     {
        //         text: "Всегда держит свое слово",
        //         toWhomGender: "male",
        //         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        //         questionId: 14,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 wins: 3,
        //                 userId: 53,
        //             },
        //             {

        //                 name: "Диван Покрывалкин ",
        //                 wins: 0,
        //                 userId: 54,
        //             },
        //             {

        //                 name: "Сарик Хяркин ",
        //                 wins: 0,
        //                 userId: 55,
        //             },
        //             {

        //                 name: "Мага Медов ",
        //                 wins: 3,
        //                 userId: 56,
        //             },
        //             {

        //                 name: "Сим Саловим ",
        //                 wins: 4,
        //                 userId: 57,
        //             },
        //             {

        //                 name: "Опять Понеделкина ",
        //                 wins: 7,
        //                 userId: 58,
        //             },
        //             {

        //                 name: "Сизим Открывашкин ",
        //                 wins: 1,
        //                 userId: 59,
        //             },
        //             {

        //                 name: "Иваныч Иванов ",
        //                 wins: 0,
        //                 userId: 60,
        //             }
        //         ]
        //     },
        //     {
        //         text: "Лучший друг из всех",
        //         toWhomGender: "male",
        //         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        //         questionId: 15,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 wins: 3,
        //                 userId: 53,
        //             },
        //             {

        //                 name: "Диван Покрывалкин ",
        //                 wins: 0,
        //                 userId: 54,
        //             },
        //             {

        //                 name: "Сарик Хяркин ",
        //                 wins: 0,
        //                 userId: 55,
        //             },
        //             {

        //                 name: "Мага Медов ",
        //                 wins: 3,
        //                 userId: 56,
        //             },
        //             {

        //                 name: "Сим Саловим ",
        //                 wins: 4,
        //                 userId: 57,
        //             },
        //             {

        //                 name: "Опять Понеделкина ",
        //                 wins: 7,
        //                 userId: 58,
        //             },
        //             {

        //                 name: "Сизим Открывашкин ",
        //                 wins: 1,
        //                 userId: 59,
        //             },
        //             {

        //                 name: "Иваныч Иванов ",
        //                 wins: 0,
        //                 userId: 60,
        //             }
        //         ]
        //     },
        //     {
        //         text: "Пожалуйста, брось своего парня  ",
        //         toWhomGender: "female",
        //         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        //         questionId: 9,
        //         students: [
        //             {

        //                 name: "Сарика Хяркина ",
        //                 wins: 6,
        //                 userId: 61,
        //             },
        //             {

        //                 name: "Магася Медова ",
        //                 wins: 2,
        //                 userId: 62,
        //             },
        //             {

        //                 name: "Симася Саловимич ",
        //                 wins: 0,
        //                 userId: 622,
        //             },
        //             {

        //                 name: "Опятька Понеделкина ",
        //                 wins: 3,
        //                 userId: 64,
        //             },
        //             {

        //                 name: "Сизимка Открывашкина ",
        //                 wins: 2,
        //                 userId: 65,
        //             },
        //             {

        //                 name: "Иванка Бояркина ",
        //                 wins: 0,
        //                 userId: 66,
        //             },
        //             {

        //                 name: "Дина Заврина ",
        //                 wins: 5,
        //                 userId: 67,
        //             },
        //             {

        //                 name: "Аля Ляля ",
        //                 wins: 0,
        //                 userId: 68,
        //             }]
        //     },
        //     {
        //         text: "Не догадывается, насколько она потрясающая",
        //         toWhomGender: "female",
        //         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        //         questionId: 10,
        //         students: [
        //             {

        //                 name: "Сарика Хяркина ",
        //                 wins: 6,
        //                 userId: 61,
        //             },
        //             {

        //                 name: "Магася Медова ",
        //                 wins: 2,
        //                 userId: 62,
        //             },
        //             {

        //                 name: "Симася Саловимич ",
        //                 wins: 0,
        //                 userId: 622,
        //             },
        //             {

        //                 name: "Опятька Понеделкина ",
        //                 wins: 3,
        //                 userId: 64,
        //             },
        //             {

        //                 name: "Сизимка Открывашкина ",
        //                 wins: 2,
        //                 userId: 65,
        //             },
        //             {

        //                 name: "Иванка Бояркина ",
        //                 wins: 0,
        //                 userId: 66,
        //             },
        //             {

        //                 name: "Дина Заврина ",
        //                 wins: 5,
        //                 userId: 67,
        //             },
        //             {

        //                 name: "Аля Ляля ",
        //                 wins: 0,
        //                 userId: 68,
        //             }]
        //     },
        //     {

        //         text: "Всегда прикроет меня в любой ситуации",
        //         toWhomGender: "male",
        //         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        //         questionId: 11,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 wins: 3,
        //                 userId: 53,
        //             },
        //             {

        //                 name: "Диван Покрывалкин ",
        //                 wins: 0,
        //                 userId: 54,
        //             },
        //             {

        //                 name: "Сарик Хяркин ",
        //                 wins: 0,
        //                 userId: 55,
        //             },
        //             {

        //                 name: "Мага Медов ",
        //                 wins: 3,
        //                 userId: 56,
        //             },
        //             {

        //                 name: "Сим Саловим ",
        //                 wins: 4,
        //                 userId: 57,
        //             },
        //             {

        //                 name: "Опять Понеделкина ",
        //                 wins: 7,
        //                 userId: 58,
        //             },
        //             {

        //                 name: "Сизим Открывашкин ",
        //                 wins: 1,
        //                 userId: 59,
        //             },
        //             {

        //                 name: "Иваныч Иванов ",
        //                 wins: 0,
        //                 userId: 60,
        //             }
        //         ]
        //     },
        //     {
        //         text: "Всегда в курсе всех событий ",
        //         toWhomGender: "male",
        //         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        //         questionId: 12,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 wins: 3,
        //                 userId: 53,
        //             },
        //             {

        //                 name: "Диван Покрывалкин ",
        //                 wins: 0,
        //                 userId: 54,
        //             },
        //             {

        //                 name: "Сарик Хяркин ",
        //                 wins: 0,
        //                 userId: 55,
        //             },
        //             {

        //                 name: "Мага Медов ",
        //                 wins: 3,
        //                 userId: 56,
        //             },
        //             {

        //                 name: "Сим Саловим ",
        //                 wins: 4,
        //                 userId: 57,
        //             },
        //             {

        //                 name: "Опять Понеделкина ",
        //                 wins: 7,
        //                 userId: 58,
        //             },
        //             {

        //                 name: "Сизим Открывашкин ",
        //                 wins: 1,
        //                 userId: 59,
        //             },
        //             {

        //                 name: "Иваныч Иванов ",
        //                 wins: 0,
        //                 userId: 60,
        //             }
        //         ]
        //     },
        //     {
        //         text: "Будущий Илон Маск ",
        //         toWhomGender: "male",
        //         imageLink: "https://i.ibb.co/B4vcRp8/image-84.png",
        //         questionId: 13,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 wins: 3,
        //                 userId: 53,
        //             },
        //             {

        //                 name: "Диван Покрывалкин ",
        //                 wins: 0,
        //                 userId: 54,
        //             },
        //             {

        //                 name: "Сарик Хяркин ",
        //                 wins: 0,
        //                 userId: 55,
        //             },
        //             {

        //                 name: "Мага Медов ",
        //                 wins: 3,
        //                 userId: 56,
        //             },
        //             {

        //                 name: "Сим Саловим ",
        //                 wins: 4,
        //                 userId: 57,
        //             },
        //             {

        //                 name: "Опять Понеделкина ",
        //                 wins: 7,
        //                 userId: 58,
        //             },
        //             {

        //                 name: "Сизим Открывашкин ",
        //                 wins: 1,
        //                 userId: 59,
        //             },
        //             {

        //                 name: "Иваныч Иванов ",
        //                 wins: 0,
        //                 userId: 60,
        //             }
        //         ]
        //     },
        //     {
        //         text: "Мисс популярность",
        //         toWhomGender: "female",
        //         imageLink: "https://i.ibb.co/KrvWTcD/image-79-1.png",
        //         questionId: 6,
        //         students: [
        //             {

        //                 name: "Сарика Хяркина ",
        //                 wins: 6,
        //                 userId: 61,
        //             },
        //             {

        //                 name: "Магася Медова ",
        //                 wins: 2,
        //                 userId: 62,
        //             },
        //             {

        //                 name: "Симася Саловимич ",
        //                 wins: 0,
        //                 userId: 622,
        //             },
        //             {

        //                 name: "Опятька Понеделкина ",
        //                 wins: 3,
        //                 userId: 64,
        //             },
        //             {

        //                 name: "Сизимка Открывашкина ",
        //                 wins: 2,
        //                 userId: 65,
        //             },
        //             {

        //                 name: "Иванка Бояркина ",
        //                 wins: 0,
        //                 userId: 66,
        //             },
        //             {

        //                 name: "Дина Заврина ",
        //                 wins: 5,
        //                 userId: 67,
        //             },
        //             {

        //                 name: "Аля Ляля ",
        //                 wins: 0,
        //                 userId: 68,
        //             }]
        //     },
        //     {
        //         text: "Ты даже не догадываешься, как тобой восхищаются ",
        //         toWhomGender: "female",
        //         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        //         questionId: 7,
        //         students: [
        //             {

        //                 name: "Сарика Хяркина ",
        //                 wins: 6,
        //                 userId: 61,
        //             },
        //             {

        //                 name: "Магася Медова ",
        //                 wins: 2,
        //                 userId: 62,
        //             },
        //             {

        //                 name: "Симася Саловимич ",
        //                 wins: 0,
        //                 userId: 622,
        //             },
        //             {

        //                 name: "Опятька Понеделкина ",
        //                 wins: 3,
        //                 userId: 64,
        //             },
        //             {

        //                 name: "Сизимка Открывашкина ",
        //                 wins: 2,
        //                 userId: 65,
        //             },
        //             {

        //                 name: "Иванка Бояркина ",
        //                 wins: 0,
        //                 userId: 66,
        //             },
        //             {

        //                 name: "Дина Заврина ",
        //                 wins: 5,
        //                 userId: 67,
        //             },
        //             {

        //                 name: "Аля Ляля ",
        //                 wins: 0,
        //                 userId: 68,
        //             }]
        //     },
        //     {
        //         text: "Лучший второй пилот ",
        //         toWhomGender: "male",
        //         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        //         questionId: 16,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 wins: 3,
        //                 userId: 53,
        //             },
        //             {

        //                 name: "Диван Покрывалкин ",
        //                 wins: 0,
        //                 userId: 54,
        //             },
        //             {

        //                 name: "Сарик Хяркин ",
        //                 wins: 0,
        //                 userId: 55,
        //             },
        //             {

        //                 name: "Мага Медов ",
        //                 wins: 3,
        //                 userId: 56,
        //             },
        //             {

        //                 name: "Сим Саловим ",
        //                 wins: 4,
        //                 userId: 57,
        //             },
        //             {

        //                 name: "Опять Понеделкина ",
        //                 wins: 7,
        //                 userId: 58,
        //             },
        //             {

        //                 name: "Сизим Открывашкин ",
        //                 wins: 1,
        //                 userId: 59,
        //             },
        //             {

        //                 name: "Иваныч Иванов ",
        //                 wins: 0,
        //                 userId: 60,
        //             }
        //         ]
        //     }
        // ]
        const result = yield call(() => $api.get('/questions'));
        //api call should be here instead

        yield put(getQuestionListSuccess(result));

    } catch (error) {
        yield put(getQuestionListError(error));
    }
}

export default function* QuestionSaga() {
    yield all([
        takeEvery(QUESTION_LIST, getQuestionListRequest),
    ]);
}
