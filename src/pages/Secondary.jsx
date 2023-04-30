import React from 'react';
import st from '@emotion/styled'
import InfoBotPicture from '../pictures/InfoBotPicture.png';
import { RegistrationVK } from '../components/RegistrationVK';




export const Secondary = () => {
    return (

        <Parent>

            <Header>
                ЭТО САХАР-БОТ!
            </Header>

            <RegistrationVK />
        </Parent>


    )
}

const Parent = st.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px
`;

const Header = st.div`
    text-align: center;
    font-size: 40px;
    padding: 0 0 30px 0;
`;

const BlockImage = st.div`
    margin: 0 0 24px 24px;
    position: relative;
`;

const LeftDesc = st.div`
    position: absolute;
    text-align: center;
    width: 150px;
    left: -8px;
    bottom: -60px;

`;

const RightDesc = st.div`
    position: absolute;
    text-align: center;
    width: 150px;
    right: 15px;
    bottom: -78px;
`;
