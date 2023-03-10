import React, { useState } from 'react';
import st from '@emotion/styled'
import { BlueCrystal } from '../icons/BlueCrystal';
import { PinkCrystal } from '../icons/PinkCrystal';
import { KeyIcon } from '../icons/KeyIcon';

const questionsForStudents = [
    {

        text: "Мы бы отлично смотрелись вместе ",
        fromWhomGender: "male",
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677621840,
        questionId: 5,
        students: [
            {

                name: "Иван Бояркин ",
                won: false,
                userId: 53,
            },
            {

                name: "Диван Покрывалкин ",
                won: false,
                userId: 54,
            },
            {

                name: "Сарик Хяркин ",
                won: true,
                userId: 55,
            },

            {

                name: "Опять Понеделкина ",
                won: false,
                userId: 58,
            },

        ]
    },

    {
        text: "Будущий знаменитый дизайнер",
        fromWhomGender: "female",
        imageLink: "https://i.ibb.co/B4vcRp8/image-84.png",
        date: 1677624840,
        questionId: 8,
        students: [
            {

                name: "Сарика Хяркина ",
                won: false,
                userId: 61,
            },
            {

                name: "Магася Медова ",
                won: true,
                userId: 62,
            },

            {

                name: "Сизимка Открывашкина ",
                won: false,
                userId: 65,
            },
            {

                name: "Иванка Бояркина ",
                won: false,
                userId: 66,
            }

        ]
    },
    {
        text: "Всегда держит свое слово",
        fromWhomGender: "male",
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677624840,
        questionId: 14,
        students: [
            {

                name: "Иван Бояркин ",
                won: true,
                userId: 53,
            },

            {

                name: "Сарик Хяркин ",
                won: false,
                userId: 55,
            },

            {

                name: "Сим Саловим ",
                won: false,
                userId: 57,
            },

            {

                name: "Иваныч Иванов ",
                won: false,
                userId: 60,
            }
        ]
    },
    {
        text: "Лучший друг из всех",
        fromWhomGender: "male",
        imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        date: 1677626840,
        questionId: 15,
        students: [
            {

                name: "Иван Бояркин ",
                won: false,
                userId: 53,
            },
            {

                name: "Диван Покрывалкин ",
                won: true,
                userId: 54,
            },

            {

                name: "Мага Медов ",
                won: false,
                userId: 56,
            },

            {

                name: "Опять Понеделкина ",
                won: false,
                userId: 58,
            },

        ]
    },
    {
        text: "Пожалуйста, брось своего парня  ",
        fromWhomGender: "female",
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677623840,
        questionId: 9,
        students: [
            {

                name: "Сарика Хяркина ",
                won: false,
                userId: 61,
            },

            {

                name: "Опятька Понеделкина ",
                won: true,
                userId: 64,
            },

            {

                name: "Иванка Бояркина ",
                won: false,
                userId: 66,
            },

            {

                name: "Аля Ляля ",
                won: false,
                userId: 68,
            }]
    },
    {
        text: "Не догадывается, насколько она потрясающая",
        fromWhomGender: "female",
        imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        date: 1677632840,
        questionId: 10,
        students: [
            {

                name: "Сарика Хяркина ",
                won: false,
                userId: 61,
            },

            {

                name: "Симася Саловимич ",
                won: true,
                userId: 622,
            },

            {

                name: "Сизимка Открывашкина ",
                won: false,
                userId: 65,
            },
            {

                name: "Иванка Бояркина ",
                won: false,
                userId: 66,
            },
        ]
    },
    {

        text: "Всегда прикроет меня в любой ситуации",
        fromWhomGender: "male",
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677627840,
        questionId: 11,
        students: [
            {

                name: "Иван Бояркин ",
                won: false,
                userId: 53,
            },

            {

                name: "Сарик Хяркин ",
                won: true,
                userId: 55,
            },
            {

                name: "Мага Медов ",
                won: false,
                userId: 56,
            },

            {

                name: "Иваныч Иванов ",
                won: false,
                userId: 60,
            }
        ]
    },
    {
        text: "Всегда в курсе всех событий ",
        fromWhomGender: "male",
        imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        date: 1677622000,
        questionId: 12,
        students: [

            {

                name: "Диван Покрывалкин ",
                won: true,
                userId: 54,
            },
            {

                name: "Сарик Хяркин ",
                won: false,
                userId: 55,
            },
            {

                name: "Мага Медов ",
                won: false,
                userId: 56,
            },
            {

                name: "Сим Саловим ",
                won: false,
                userId: 57,
            },

        ]
    },
    {
        text: "Будущий Илон Маск ",
        fromWhomGender: "male",
        imageLink: "https://i.ibb.co/B4vcRp8/image-84.png",
        date: 1677621840,
        questionId: 13,
        students: [
            {

                name: "Иван Бояркин ",
                won: false,
                userId: 53,
            },
            {

                name: "Диван Покрывалкин ",
                won: true,
                userId: 54,
            },

            {

                name: "Сим Саловим ",
                won: false,
                userId: 57,
            },
            {

                name: "Опять Понеделкина ",
                won: false,
                userId: 58,
            },

        ]
    },
    {
        text: "Мисс популярность",
        fromWhomGender: "female",
        imageLink: "https://i.ibb.co/KrvWTcD/image-79-1.png",
        date: 1677626840,
        questionId: 6,
        students: [
            {

                name: "Сарика Хяркина ",
                won: false,
                userId: 61,
            },
            {

                name: "Магася Медова ",
                won: true,
                userId: 62,
            },
            {

                name: "Симася Саловимич ",
                won: false,
                userId: 622,
            },
            {

                name: "Опятька Понеделкина ",
                won: false,
                userId: 64,
            }
        ]
    },
    {
        text: "Ты даже не догадываешься, как тобой восхищаются ",
        fromWhomGender: "female",
        imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        date: 1677628840,
        questionId: 7,
        students: [

            {
                name: "Опятька Понеделкина ",
                won: false,
                userId: 64,
            },

            {

                name: "Иванка Бояркина ",
                won: false,
                userId: 66,
            },
            {

                name: "Дина Заврина ",
                won: true,
                userId: 67,
            },
            {

                name: "Аля Ляля ",
                won: false,
                userId: 68,
            }]
    },
    {
        text: "Лучший второй пилот ",
        fromWhomGender: "male",
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677625840,
        questionId: 16,
        students: [
            {

                name: "Иван Бояркин ",
                won: true,
                userId: 53,
            },
            {

                name: "Диван Покрывалкин ",
                won: false,
                userId: 54,
            },

            {

                name: "Сим Саловим ",
                won: false,
                userId: 57,
            },
            {

                name: "Опять Понеделкина ",
                won: false,
                userId: 58,
            },

        ]
    }
]
const dateNow = 1677622840;
export const NewCompliments = () => {

    return (

        <Parent>


            <BodyContent>
                {questionsForStudents.map(({ fromWhomGender, date, id }) => (
                    <OneClass key={id}>
                        <SugarSpace>{
                            fromWhomGender === 'male' ? <BlueCrystal></BlueCrystal> : <PinkCrystal></PinkCrystal>
                        }
                            <Text>{fromWhomGender === 'male' ? "от мальчика" : "от девочки"}</Text></SugarSpace>

                        <ButtonText>{Math.floor((date - dateNow) / 3600)}ч</ButtonText>
                    </OneClass>
                ))}
            </BodyContent>
            <> <ButtonInvite><KeyIcon /><Text>Узнать от кого этот сахарок</Text></ButtonInvite></>

        </Parent>

    )
}

const Parent = st.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Rounder = st.div`
    border-radius:16px;
`;

const ButtonInvite = st.div`
position:fixed;
bottom:30px;
    background: #0F1217;
    margin-top: 15px;
    border-radius: 55px;
    cursor: pointer;
    color:#FDFDFF;
    display: flex;
    justify-content: center;
    padding: 5px 15px;
    align-items: center;
    width:80%;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    overflow:visible;
    height:40px;
    
`;
const Header = st.div`
    position:relative;
    text-align: center;
    padding: 0 0 30px 0;
    background: #FF670E;
    padding:70px 20px 20px 20px;
    border-top-left-radius:16px;
    border-top-right-radius:16px;

`;

const BodyContent = st.div`
    text-align: center;
    padding:0 20px;
    width: 100%;
    overflow: auto;
`;

const OneClass = st.div`
   margin:10px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    padding: 5px 0;
    align-items: center;
    background: #FDFDFF;
    height:70px;
    padding:10px;
    cursor:pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
`;

const SugarSpace = st.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    align-content: center;
    padding:10px;
`;
const TopText = st.div`
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #FDFDFF;
`;
const Text = st.div`
margin:5px;
`;
const ButtonText = st.div`

`;
const ButtonSelect = st.div`
    cursor: pointer;
    padding: 6px 18px;
 
`;

const ExitButton = st.div`
    position:absolute;
    left: 20px;    
    top:20px;
    cursor: pointer;
`;

