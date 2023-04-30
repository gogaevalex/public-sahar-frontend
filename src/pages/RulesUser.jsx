import React, { useEffect } from 'react';
import st from '@emotion/styled'
import RulesSmilePicture from '../pictures/RulesSmilePicture.png';
import { useTelegram } from "../hooks/useTelegram";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const RulesUser = () => {

    const { tg } = useTelegram();
    const navigate = useNavigate();
    const sendTest = async () => {
        try {
            //api call should be here instead
            const res = await axios({
                method: 'get',
                url: "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m",
                params: {

                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        tg.ready();
        tg.MainButton.setParams({
            text: 'Продолжить'
        });
        tg.onEvent('mainButtonClicked', () => {
            navigate("/choiceClass");
        });
        tg.MainButton.show();
        sendTest();
    }, [])

    return (
        <Parent>
            <Header>
                Правила пользования
            </Header>
            <BodyContent>
                Нажимая кнопку “Продолжить” я соглашаюсь с правилами пользования и с правилами кофиденцальности и подтверждаю что мой возраст больше 14 лет.
            </BodyContent>
            <img src={RulesSmilePicture} alt="rulesSmilePicture" />
        </Parent>
    )
}

const Parent = st.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px
    height: 100vh;
    margin: 20px 0 0 0;
`;

const Header = st.div`
    text-align: center;
    font-size: 40px;
    padding: 0 0 30px 0;
`;

const BodyContent = st.div`
    text-align: center;
    padding: 0 0 50px 0;
`;

