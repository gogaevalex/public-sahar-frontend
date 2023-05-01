import React, { useEffect } from 'react';
import st from '@emotion/styled'
import RulesSmilePicture from '../pictures/RulesSmilePicture.png';
import { useTelegram } from "../hooks/useTelegram";
import { useNavigate } from 'react-router-dom';
import $api from '../utils/api';

export const RulesUser = () => {

    const { tg } = useTelegram();
    const navigate = useNavigate();
    const initialize = async (data) => {
        try {
            //api call should be here instead
            const result = await $api.post('/user/initialize', { data });
            return result
        } catch (error) {
            console.log(error)
        }
    }
    const initializeData = async (data) => {
        try {
            //api call should be here instead
            const result = await $api.post('/user/initializeData', { data });
            return result
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
        const initData = Object.fromEntries(new URLSearchParams(window.Telegram.WebApp.initData));
        console.log("data", initData)
        initializeData(initData);
        initialize(window.Telegram.WebApp.initData);


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

