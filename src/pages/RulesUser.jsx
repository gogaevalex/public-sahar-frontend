import React, {useEffect} from 'react';
import st from '@emotion/styled'
import RulesSmilePicture from '../pictures/RulesSmilePicture.png';
import {useTelegram} from "../hooks/useTelegram";

export const RulesUser = () => {

    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.MainButton.setParams({
            text: 'Продолжить'
        });
        tg.onEvent('mainButtonClicked', () => {
            navigate("/choiceClass");
        });
        tg.MainButton.show();
    }, [])

    return (
        <Parent>
            <Header>
                Правила пользования
            </Header>
            <BodyContent>
                Нажимая кнопку “Продолжить” я соглашаюсь с правилами пользования и с правилами кофиденцальности и подтверждаю что мой возраст больше 14 лет.
            </BodyContent>
            <img src={RulesSmilePicture} alt="rulesSmilePicture"/>
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

