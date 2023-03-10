import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import st from '@emotion/styled'
import CityPicture from '../pictures/CityPicture.png';
import { MainLayout } from '../components/MainLayout';
import { Input } from '../components/Input';
import {getAllCity, changeUserData} from '../redux/actions';

export const ChoiceCity = () => {
    const [value, setValue] = useState("");
    const chageInput = (value) => {
        setValue(value.replace(/[^а-яё\s]/gi, ''));
    }
    const dispatch = useDispatch();
	const {isLoad, data} = useSelector((state) => state.city);
    useEffect(() => {
        dispatch(getAllCity())
    }, []);
    console.log(isLoad, data);

    return (
        <MainLayout
            nextPage={"/choiceSchool"}
            prevPage={"/choiceClass"}
            clickMainButton={() => {
                dispatch(changeUserData({cityId: 1, city: "Москва"}))
            }}
        >
            <Parent>
                <Header>
                    Твой город
                </Header>
                <BlockImage>
                    <img src={CityPicture} alt="cityPicture" />
                </BlockImage>
                <Input value={value} onChange={chageInput} placeholder="Например: Великий Новгород" />
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

