import React, { useEffect } from 'react';
import st from '@emotion/styled';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';
import { useNavigate } from 'react-router-dom';
import { useTelegram } from "../hooks/useTelegram";


export const MainLayout = ({
    children,
    clickBackPage = null,
    showMainButton = true,
    clickMainButton,
    nextPage,
    prevPage = "/",
}) => {
    const { tg } = useTelegram();
    const navigate = useNavigate();

    useEffect(() => {
        tg.ready();
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
            clickBackPage ? clickBackPage() : navigate(prevPage);

        }}>
            <ArrowLeftIcon />
        </BackPage>
        {children}
        <TestButton onClick={() => {
            clickMainButton ? clickMainButton() : null;
            nextPage ? navigate(nextPage) : null;
        }}>
            Продолжить
        </TestButton>
    </Parent>
}

const Parent = st.div`
    height: 100vh;
    margin: 20px 0 0 0;
`;

const BackPage = st.div`
    position: absolute;
    left: 10px;
    top: 24px;
    padding: 6px;
    cursor: pointer;
`;

const TestButton = st.div`
    text-align: center;
    height: 40px;
    width: 120px;
    background: black;
    color: white;
    position: absolute;
    bottom: 30px;
    left: 10px;
    align-items: center;
    display: flex;
    padding: 10px;
    justify-content: center;
    border-radius: 10px;
    font-weight: 600;
`;



