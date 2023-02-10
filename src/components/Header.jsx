import React from 'react';
import {Button} from "./Button";
import st from '@emotion/styled';
import {useTelegram} from "../hooks/useTelegram";

export const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <Parent>
            <Button onClick={onClose}>Закрыть</Button>
            <Username>
                {user?.username}
            </Username>
        </Parent>
    );
};

const Parent = st.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

const Username = st.span`
    margin-left: auto;

`;