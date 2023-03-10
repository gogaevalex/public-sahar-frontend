import React, { useState } from 'react';
import st from '@emotion/styled'
import { TgIcon } from '../icons/TgIcon';
import { KeyIcon } from '../icons/KeyIcon';
import { WhiteExitIcon } from '../icons/WhiteExitIcon';
import Boy from '../pictures/Boy.png';
import Girl from '../pictures/Girl.png';


const questionData = [
    {

        text: "Мы бы отлично смотрелись вместе ",
        fromWhomGender: "male",/*стоит обратить внимание что в отличии от dataClassStudents в Questions.jsx
        здесь записывается не пол того кому отправляется сахарок, а от кого*/
        fromClass: 11,//также дополнительно мы отправляем класс ответившего юзера
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677621840,
        questionId: 5,
        students: [
            {

                name: "Ахалайа Мохалайа ",
                won: false,
                userId: 53,
            },
            {

                name: "Дояна Коровкина ",
                won: false,
                userId: 54,
            },
            {

                name: "Сарика Хяркина ",
                won: true,
                userId: 55,
            },

            {

                name: "Жижка Вейперова ",
                won: false,
                userId: 58,
            },

        ]
    },
    {

        text: "Самая классная ",
        fromWhomGender: "female",/*стоит обратить внимание что в отличии от dataClassStudents в Questions.jsx
        здесь записывается не пол того кому отправляется сахарок, а от кого*/
        fromClass: 10,//также дополнительно мы отправляем класс ответившего юзера
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677621840,
        questionId: 5,

        students: [
            {

                name: "Ивана Бояркина ",
                won: false,
                userId: 53,
            },
            {

                name: "Дивана Покрывалкина ",
                won: false,
                userId: 54,
            },
            {

                name: "Сарика Хяркина ",
                won: true,
                userId: 55,
            },

            {

                name: "Опять Понеделкина ",
                won: false,
                userId: 58,
            },

        ]
    }
]
const chosenComplimentNumber = 1
const currentQuestionGender = questionData[chosenComplimentNumber].fromWhomGender
console.log(currentQuestionGender)
export const NewComplimentsDetails = () => {


    return (


        <Background currentQuestionGender={currentQuestionGender}>

            <Parent>
                <ExitButton><WhiteExitIcon /></ExitButton>
                <TopText>
                    {currentQuestionGender == 'male' ? <MiniPic src={Boy} /> : <MiniPic src={Girl} />}
                    от  {currentQuestionGender == 'male' ? "мальчика" : "девочки"} из {questionData[chosenComplimentNumber].fromClass} класса
                </TopText>

                <TheQuestionSpace >
                    <TheQuestionImageSpace>
                        <TheQuestionImage src={questionData[chosenComplimentNumber].imageLink} />
                    </TheQuestionImageSpace>
                    <TheQuestionText >
                        {questionData[chosenComplimentNumber].text}
                    </TheQuestionText>
                </TheQuestionSpace>
                <NameChoice>
                    {questionData[chosenComplimentNumber].students.map(({ name, won, userId }) => (
                        <ButtonName key={userId}
                            activeColor={won === true}

                        >

                            <Text>
                                {name}
                            </Text>
                        </ButtonName>
                    ))}
                </NameChoice>
                <AdText>
                    <TgIcon /><Text>@caxapok_bot</Text>
                </AdText>
                <ButtonInvite><KeyIcon /><Text>Узнать от кого этот сахарок</Text></ButtonInvite>
            </Parent>
        </Background >

    )
}

const Parent = st.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px
        background: blue;   
    `;

const TheQuestionSpace = st.div`
    text-align: center;
    line-height: 25px;
    height:250px;
    margin-bottom: 1vw;
    `;

const TheQuestionText = st.text`
    color: #FDFDFF;
    font-family: Roboto;
    font-size: 23px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    line-height: 19px;
    `;

const TheQuestionImageSpace = st.div`
    margin-top:20px;
    
    `;

const TheQuestionImage = st.img`
    width: 50%;
    `;



const NameChoice = st.div`
      
       padding:10px;
        width: 100%;
        overflow: auto;
        margin: 10px auto;
        margin-top: 1vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 14px; 
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

const ExitButton = st.div`
    position:absolute;
    left: 20px;    
    top:20px;
    cursor: pointer;
`;

const Text = st.div`
margin:5px;
    `;
const AdText = st.div`
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #FDFDFF;
text-align: center;
display:flex;
align-items: center;
flex-direction:center;
    `;

const MiniPic = st.img`
    height:40px;
    margin:5px;
    `;
const TopText = st.div`
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    display:flex;
    align-items: center;
    flex-direction:center;
    text-align: center;
    padding:5px;
    color: #FDFDFF;
    `;

const ButtonName = st.div`
        position:relative;
        will-change: transform;
        background: #FDFDFF;
        width: 100%;
        height: 60px;
        cursor: pointer;
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 12px;
        border-radius: 7px;
        opacity: ${({ activeColor }) => activeColor ? "1" : ({ notYetClicked }) => notYetClicked ? "0.8" : "0.6"};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition-duration: 0.5s;
    `;
const Background = st.div`
    position:relative;
    height:100vh;
        background: ${({ currentQuestionGender }) => currentQuestionGender === "female" ? "#F15BB5" : "#05B2DC"};
        padding: 10px;
    
    `;









