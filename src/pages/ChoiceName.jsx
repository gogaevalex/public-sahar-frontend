import React, { useState } from 'react';
import st from '@emotion/styled'
import NamePicture from '../pictures/NamePicture.png';
import { MainLayout } from '../components/MainLayout';
import { Input } from '../components/Input';
import { useDispatch } from 'react-redux';
import { addName } from '../redux/actions';


export const ChoiceName = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch()
    const chageInput = (value) => {
        setValue(value.replace(/[^а-яё\s]/gi, ''));
    }
    return (
        <MainLayout nextPage={"/choiceFamily"} prevPage={"/choiceSchool"} clickMainButton={() => dispatch(addName({ firstName: value }))}>
            <Parent>
                <Header>
                    Твое имя
                </Header>
                <BlockImage>
                    <img src={NamePicture} alt="namePicture" />
                </BlockImage>
                <Input value={value} onChange={chageInput} placeholder="Например: Женя" />
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

