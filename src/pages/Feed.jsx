import React, { useState } from 'react';
import st from '@emotion/styled'
import { BlueCrystalSmall } from '../icons/BlueCrystalSmall';
import { PinkCrystalSmall } from '../icons/PinkCrystalSmall';
import { KeyIcon } from '../icons/KeyIcon';

const questionsForStudents = [
    {

        text: "Мы бы отлично смотрелись вместе ",
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677621840,
        questionId: 5,
        winner:
        {

            fromWhomGender: "male",
            name: "Сарик Хяркин ",
            classNumber: 11,
            userId: 55,
        }
    },

    {
        text: "Будущий знаменитый дизайнер",

        imageLink: "https://i.ibb.co/B4vcRp8/image-84.png",
        date: 1677624840,
        questionId: 8,
        winner:
        {
            fromWhomGender: "female",
            name: "Магася Медова ",
            classNumber: 11,
            userId: 62,
        }
    },
    {
        text: "Всегда держит свое слово",
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677624840,
        questionId: 14,
        winner:
        {
            fromWhomGender: "male",
            name: "Иван Бояркин ",
            classNumber: 11,
            userId: 53,
        }
    },
    {
        text: "Лучший друг из всех",
        imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        date: 1677626840,
        questionId: 15,
        winner:
        {

            fromWhomGender: "male",
            name: "Диван Покрывалкин ",
            classNumber: 11,
            userId: 54,
        }
    },
    {
        text: "Пожалуйста, брось своего парня  ",
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677623840,
        questionId: 9,
        winner:

        {
            fromWhomGender: "female",
            name: "Опятька Понеделкина ",
            classNumber: 11,
            userId: 64,
        }


    },
    {
        text: "Не догадывается, насколько она потрясающая",
        imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        date: 1677632840,
        questionId: 10,
        winner:

        {
            fromWhomGender: "female",
            name: "Симася Саловимич ",
            classNumber: 11,
            userId: 622,
        }
    },
    {

        text: "Всегда прикроет меня в любой ситуации",
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677627840,
        questionId: 11,
        winner:
        {
            fromWhomGender: "male",
            name: "Сарик Хяркин ",
            classNumber: 11,
            userId: 55,
        }
    },
    {
        text: "Всегда в курсе всех событий ",
        imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        date: 1677622000,
        questionId: 12,
        winner:
        {
            fromWhomGender: "male",
            name: "Диван Покрывалкин ",
            classNumber: 11,
            userId: 54,
        }
    },
    {
        text: "Будущий Илон Маск ",
        imageLink: "https://i.ibb.co/B4vcRp8/image-84.png",
        date: 1677621840,
        questionId: 13,
        winner:
        {
            fromWhomGender: "male",
            name: "Диван Покрывалкин ",
            classNumber: 11,
            userId: 54,
        }
    },
    {
        text: "Мисс популярность",
        imageLink: "https://i.ibb.co/KrvWTcD/image-79-1.png",
        date: 1677626840,
        questionId: 6,
        winner:
        {
            fromWhomGender: "female",
            name: "Магася Медова ",
            classNumber: 11,
            userId: 62,
        }

    },
    {
        text: "Ты даже не догадываешься, как тобой восхищаются ",
        imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
        date: 1677628840,
        questionId: 7,
        winner:
        {
            fromWhomGender: "female",
            name: "Дина Заврина ",
            classNumber: 11,
            userId: 67,
        }
    },
    {
        text: "Лучший второй пилот ",
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677625840,
        questionId: 16,
        winner:
        {

            fromWhomGender: "male",
            name: "Иван Бояркин ",
            classNumber: 11,
            userId: 53,
        }



    }
]
const dateNow = 1677622840;
export const Feed = () => {

    return (

        <Parent>


            <BodyContent>
                {questionsForStudents.map(({ imageLink, text, winner, date, id }) => (
                    <OneClass key={id}>
                        <Blocks>
                            <FlexWrapper>
                                <Text>{winner.name}</Text> {
                                    winner.fromWhomGender === 'male' ? <TinyText>получил</TinyText> : <TinyText>получила</TinyText>
                                }
                            </FlexWrapper>
                            <FlexWrapper>
                                <ButtonText>{Math.floor((date - dateNow) / 60)}мин</ButtonText>
                            </FlexWrapper>
                        </Blocks>
                        <QuestionText>{text}</QuestionText>
                        <SugarSpace>{
                            winner.fromWhomGender === 'male' ? <BlueCrystalSmall></BlueCrystalSmall> : <PinkCrystalSmall></PinkCrystalSmall>
                        }
                            <ButtonText>{winner.fromWhomGender === 'male' ? "от мальчика" : "от девочки"} из {winner.classNumber} класса</ButtonText> </SugarSpace>

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
const FlexWrapper = st.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

const QuestionText = st.div`
font-weight: 300;
font-size: 17px;
text-align: left;
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
const TinyText = st.div`
font-weight: 400;
font-size: 11px;
line-height: 13px;
margin-left: 5px;
`;

const BodyContent = st.div`
    text-align: center;
    padding:0 20px;
    width: 100%;
   

`;

const OneClass = st.div`
   margin:10px;
   display:flex;
   flex-direction: column;
   align-items: flex-start;
    justify-content: space-between;
    padding: 5px 0;

    background: #FDFDFF;
 
    padding:10px;
    cursor:pointer;
    border-bottom: 1px solid rgba(15, 18, 23, 0.25);
`;
const Blocks = st.div`
display:flex;
flex-direction: row;
align-items: baseline;
width:100%;
`;
const SugarSpace = st.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    align-content: center;
    padding:10px 0 0 0;
`;
const TopText = st.div`
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #FDFDFF;
`;
const Text = st.div`

`;
const ButtonText = st.div`
opacity:40%;
font-weight: 400;
font-size: 11px;
line-height: 13px;
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

