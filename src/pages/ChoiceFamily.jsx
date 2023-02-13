import React, {useState} from 'react';
import st from '@emotion/styled'
import FamilyPicture from '../pictures/FamilyPicture.png';
import { MainLayout } from '../components/MainLayout';
import {Input} from '../components/Input';

export const ChoiceFamily = () => {
    const [value, setValue] = useState("");

    return (
        <MainLayout nextPage={"/choiceFriend"}>
            <Parent>
                <Header>
                    Твоя фамилия
                </Header>
                <BlockImage>
                    <img src={FamilyPicture} alt="FamilyPicture"/>
                </BlockImage>
                <Input value={value} onChange={setValue} placeholder="Например: Степанов" />
            </Parent>
        </MainLayout>
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
    margin: 0 0 24px 0;
`;

