import React, { useEffect } from 'react';
import st from '@emotion/styled';
import {ArrowLeftIcon} from '../icons/ArrowLeftIcon';
import { useNavigate } from 'react-router-dom';
import {useTelegram} from "../hooks/useTelegram";

export const MainLayout = ({children, clickBackPage = null, showMainButton = true, clickMainButton, nextPage}) => {
    const {tg} = useTelegram();
    const navigate = useNavigate();
    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Продолжить'
        });
        tg.onEvent('mainButtonClicked', () => {
            clickMainButton ? clickMainButton() : null;
            nextPage ? navigate(nextPage) : null;
        });
    }, [])

    useEffect(() => {
        if (showMainButton) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    }, [showMainButton])

    return <Parent>
        <BackPage onClick={() => {
            clickBackPage ? clickBackPage() : navigate(-1)
        }}>
            <ArrowLeftIcon />
        </BackPage>
        {children}
    </Parent>
}

const Parent = st.div`
    padding: 10px;
`;

const BackPage = st.div`
    position: absolute;
    left: 10px;
    top: 15px;
    padding: 5px;
    cursor: pointer;
`;



