import React, { useState } from 'react';
import st from '@emotion/styled'
import BoyPicture from '../pictures/BoyPicture.png';
import GirlPicture from '../pictures/GirlPicture.png';
import { addGender } from '../redux/actions';
import { useDispatch } from 'react-redux';

import { MainLayout } from '../components/MainLayout';

export const ChoiceGender = () => {
    const [gender, setGender] = useState(null);
    const dispatch = useDispatch();
    console.log(gender)
    return (
        //   userId={"63f4e8d0c50da0a58bc33718"}
        <MainLayout nextPage={"/choicePromo"} clickMainButton={() => dispatch(addGender({ gender }))} prevPage={"/choiceFriend"} >
            <Parent>
                <Header>
                    Укажи свой пол
                </Header>
                <BodyContent>
                    <BlockImageBoy active={gender === "male"}
                        onClick={() => {
                            setGender("male");

                        }}>
                        <img src={BoyPicture} alt="boyPicture" />
                    </BlockImageBoy>
                    <BlockImageGirl active={gender === "female"} onClick={() => setGender("female")}>
                        <img src={GirlPicture} alt="girlPicture" />
                    </BlockImageGirl>
                </BodyContent>
            </Parent>
        </MainLayout>
    )
}

const Parent = st.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
`;

const Header = st.div`
    text-align: center;
    font-size: 40px;
    margin: 0 0 70px 0;
`;

const BodyContent = st.div`
    display: flex;
`;

const BlockImageBoy = st.div`
    background: #05B2DC;
    margin: 0 14px 0 0;
    border-radius: 10px;
    height: 134px;
    width: 134px;
    padding: 2px;
    border: ${({ active }) => active && "2px solid var(--tg-theme-text-color)"};
    align-items: center;
    display: flex;
    justify-content: center;
    cursor:pointer;
`;

const BlockImageGirl = st.div`
    background: #F15BB5;
    height: 134px;
    width: 134px;
    border-radius: 10px;
    padding: 2px;
    border: ${({ active }) => active && "2px solid var(--tg-theme-text-color)"};
    align-items: center;
    display: flex;
    justify-content: center;
    cursor:pointer;
`;

