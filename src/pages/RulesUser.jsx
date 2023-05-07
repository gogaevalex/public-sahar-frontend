import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import st from '@emotion/styled'
import RulesSmilePicture from '../pictures/RulesSmilePicture.png';
import { useTelegram } from "../hooks/useTelegram";
import { useNavigate } from 'react-router-dom';
import $api from '../utils/api';

export const RulesUser = () => {
    const [isRegistered, setIsRegistered] = useState(false)
    const { tg } = useTelegram();
    const navigate = useNavigate();
    const initialize = async (data) => {
        try {
            //api call should be here instead
            const result = await $api.post('/user/initialize', { data });
            localStorage.setItem('jwt', result.data.refreshToken);
            console.log('jwt', result.data.refreshToken)
            return result.data.isRegistered
        } catch (error) {
            console.log(error)
        }
    }

    //  const initialize = async (data) => {
    //     axios.post('https://sahar.ngrok.io/api/user/initialize', { data })
    //     .then(response => {
    //         // Store JWT token in local storage
    //         localStorage.setItem('jwt', response.data.token);
    //     })
    //     .catch(error => console.error(error));
    // }

    useEffect(() => {
        console.log("running")
        tg.ready();
        tg.MainButton.setParams({
            text: 'Продолжить'
        });
        tg.onEvent('mainButtonClicked', () => {
            navigate("/choiceClass");
        });
        tg.MainButton.show();
        const res = initialize(window.Telegram.WebApp.initData);
        setIsRegistered(res);
        console.log("isRegistered1", isRegistered)
    }, [])
    console.log("isRegistered", isRegistered)
    isRegistered ? navigate("/questions") : null
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
    );


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

