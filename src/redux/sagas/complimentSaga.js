import {
    put, takeEvery, all, call,
} from 'redux-saga/effects';
import {
    COMPLIMENT_LIST,
    getComplimentListSuccess,
    getComplimentListError,

} from '../actions';
import $api from '../../utils/api';

function* getComplimentListRequest() {
    console.log("comp aa")
    try {
        const result = yield call(() => $api.get('/complements'));
        // const result = [
        //     {

        //         text: "Мы бы отлично смотрелись вместе ",
        //         fromWhomGender: "male",
        //         id: 1,
        //         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        //         date: 1677621840,
        //         questionId: 5,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 won: false,
        //                 userId: 53,
        //             },
        //             {

        //                 name: "Диван Покрывалкин ",
        //                 won: false,
        //                 userId: 54,
        //             },
        //             {

        //                 name: "Сарик Хяркин ",
        //                 won: true,
        //                 userId: 55,
        //             },

        //             {

        //                 name: "Опять Понеделкина ",
        //                 won: false,
        //                 userId: 58,
        //             },

        //         ]
        //     },

        //     {
        //         text: "Будущий знаменитый дизайнер",
        //         fromWhomGender: "female",
        //         id: 6,
        //         imageLink: "https://i.ibb.co/B4vcRp8/image-84.png",
        //         date: 1677624840,
        //         questionId: 8,
        //         students: [
        //             {

        //                 name: "Сарика Хяркина ",
        //                 won: false,
        //                 userId: 61,
        //             },
        //             {

        //                 name: "Магася Медова ",
        //                 won: true,
        //                 userId: 62,
        //             },

        //             {

        //                 name: "Сизимка Открывашкина ",
        //                 won: false,
        //                 userId: 65,
        //             },
        //             {

        //                 name: "Иванка Бояркина ",
        //                 won: false,
        //                 userId: 66,
        //             }

        //         ]
        //     },
        //     {
        //         text: "Всегда держит свое слово",
        //         fromWhomGender: "male",
        //         id: 7,
        //         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        //         date: 1677624840,
        //         questionId: 14,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 won: true,
        //                 userId: 53,
        //             },

        //             {

        //                 name: "Сарик Хяркин ",
        //                 won: false,
        //                 userId: 55,
        //             },

        //             {

        //                 name: "Сим Саловим ",
        //                 won: false,
        //                 userId: 57,
        //             },

        //             {

        //                 name: "Иваныч Иванов ",
        //                 won: false,
        //                 userId: 60,
        //             }
        //         ]
        //     },
        //     {
        //         text: "Лучший друг из всех",
        //         fromWhomGender: "male",
        //         id: 9,
        //         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        //         date: 1677626840,
        //         questionId: 15,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 won: false,
        //                 userId: 53,
        //             },
        //             {

        //                 name: "Диван Покрывалкин ",
        //                 won: true,
        //                 userId: 54,
        //             },

        //             {

        //                 name: "Мага Медов ",
        //                 won: false,
        //                 userId: 56,
        //             },

        //             {

        //                 name: "Опять Понеделкина ",
        //                 won: false,
        //                 userId: 58,
        //             },

        //         ]
        //     },
        //     {
        //         text: "Пожалуйста, брось своего парня  ",
        //         fromWhomGender: "female",
        //         id: 10,
        //         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        //         date: 1677623840,
        //         questionId: 9,
        //         students: [
        //             {

        //                 name: "Сарика Хяркина ",
        //                 won: false,
        //                 userId: 61,
        //             },

        //             {

        //                 name: "Опятька Понеделкина ",
        //                 won: true,
        //                 userId: 64,
        //             },

        //             {

        //                 name: "Иванка Бояркина ",
        //                 won: false,
        //                 userId: 66,
        //             },

        //             {

        //                 name: "Аля Ляля ",
        //                 won: false,
        //                 userId: 68,
        //             }]
        //     },
        //     {
        //         text: "Не догадывается, насколько она потрясающая",
        //         fromWhomGender: "female",
        //         id: 11,
        //         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        //         date: 1677632840,
        //         questionId: 10,
        //         students: [
        //             {

        //                 name: "Сарика Хяркина ",
        //                 won: false,
        //                 userId: 61,
        //             },

        //             {

        //                 name: "Симася Саловимич ",
        //                 won: true,
        //                 userId: 622,
        //             },

        //             {

        //                 name: "Сизимка Открывашкина ",
        //                 won: false,
        //                 userId: 65,
        //             },
        //             {

        //                 name: "Иванка Бояркина ",
        //                 won: false,
        //                 userId: 66,
        //             },
        //         ]
        //     },
        //     {

        //         text: "Всегда прикроет меня в любой ситуации",
        //         fromWhomGender: "male",
        //         id: 12,
        //         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        //         date: 1677627840,
        //         questionId: 11,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 won: false,
        //                 userId: 53,
        //             },

        //             {

        //                 name: "Сарик Хяркин ",
        //                 won: true,
        //                 userId: 55,
        //             },
        //             {

        //                 name: "Мага Медов ",
        //                 won: false,
        //                 userId: 56,
        //             },

        //             {

        //                 name: "Иваныч Иванов ",
        //                 won: false,
        //                 userId: 60,
        //             }
        //         ]
        //     },
        //     {
        //         text: "Всегда в курсе всех событий ",
        //         fromWhomGender: "male",
        //         id: 14,
        //         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        //         date: 1677622000,
        //         questionId: 12,
        //         students: [

        //             {

        //                 name: "Диван Покрывалкин ",
        //                 won: true,
        //                 userId: 54,
        //             },
        //             {

        //                 name: "Сарик Хяркин ",
        //                 won: false,
        //                 userId: 55,
        //             },
        //             {

        //                 name: "Мага Медов ",
        //                 won: false,
        //                 userId: 56,
        //             },
        //             {

        //                 name: "Сим Саловим ",
        //                 won: false,
        //                 userId: 57,
        //             },

        //         ]
        //     },
        //     {
        //         text: "Будущий Илон Маск ",
        //         fromWhomGender: "male",
        //         id: 15,
        //         imageLink: "https://i.ibb.co/B4vcRp8/image-84.png",
        //         date: 1677621840,
        //         questionId: 13,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 won: false,
        //                 userId: 53,
        //             },
        //             {

        //                 name: "Диван Покрывалкин ",
        //                 won: true,
        //                 userId: 54,
        //             },

        //             {

        //                 name: "Сим Саловим ",
        //                 won: false,
        //                 userId: 57,
        //             },
        //             {

        //                 name: "Опять Понеделкина ",
        //                 won: false,
        //                 userId: 58,
        //             },

        //         ]
        //     },
        //     {
        //         text: "Мисс популярность",
        //         fromWhomGender: "female",
        //         id: 16,
        //         imageLink: "https://i.ibb.co/KrvWTcD/image-79-1.png",
        //         date: 1677626840,
        //         questionId: 6,
        //         students: [
        //             {

        //                 name: "Сарика Хяркина ",
        //                 won: false,
        //                 userId: 61,
        //             },
        //             {

        //                 name: "Магася Медова ",
        //                 won: true,
        //                 userId: 62,
        //             },
        //             {

        //                 name: "Симася Саловимич ",
        //                 won: false,
        //                 userId: 622,
        //             },
        //             {

        //                 name: "Опятька Понеделкина ",
        //                 won: false,
        //                 userId: 64,
        //             }
        //         ]
        //     },
        //     {
        //         text: "Ты даже не догадываешься, как тобой восхищаются ",
        //         fromWhomGender: "female",
        //         id: 17,
        //         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        //         date: 1677628840,
        //         questionId: 7,
        //         students: [

        //             {
        //                 name: "Опятька Понеделкина ",
        //                 won: false,
        //                 userId: 64,
        //             },

        //             {

        //                 name: "Иванка Бояркина ",
        //                 won: false,
        //                 userId: 66,
        //             },
        //             {

        //                 name: "Дина Заврина ",
        //                 won: true,
        //                 userId: 67,
        //             },
        //             {

        //                 name: "Аля Ляля ",
        //                 won: false,
        //                 userId: 68,
        //             }]
        //     },
        //     {
        //         text: "Лучший второй пилот ",
        //         fromWhomGender: "male",
        //         id: 18,
        //         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        //         date: 1677625840,
        //         questionId: 16,
        //         students: [
        //             {

        //                 name: "Иван Бояркин ",
        //                 won: true,
        //                 userId: 53,
        //             },
        //             {

        //                 name: "Диван Покрывалкин ",
        //                 won: false,
        //                 userId: 54,
        //             },

        //             {

        //                 name: "Сим Саловим ",
        //                 won: false,
        //                 userId: 57,
        //             },
        //             {

        //                 name: "Опять Понеделкина ",
        //                 won: false,
        //                 userId: 58,
        //             },

        //         ]
        //     }
        // ];
        console.log("comp res", result)
        yield put(getComplimentListSuccess(result));

    } catch (error) {
        yield put(getComplimentListError(error));
    }
}

export default function* ComplimentSaga() {
    yield all([
        takeEvery(COMPLIMENT_LIST, getComplimentListRequest),
    ]);
}
