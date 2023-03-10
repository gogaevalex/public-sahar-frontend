import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import st from '@emotion/styled'
import { MainLayout } from '../components/MainLayout';
import SchoolPicture from '../pictures/SchoolPicture.png';

const dataClass = [
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 5,
    },
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 6,
    },
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 7,
    },
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 8,
    },
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 9,
    },
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 10,
    },
]

const shortText = (text) => {
    if (text.length > 25) {
        return `${text.slice(0, 25)}...`;
    } else return text;
}

export const ChoiceSchool = () => {
    const [activeSchool, setActiveSchool] = useState(null);
	const user = useSelector((state) => state.user);
    console.log('user', user);
    return (
        <MainLayout nextPage={"/choiceName"} prevPage={"/choiceCity"}>
            <Parent>
                <Header>
                    Выбери свою школу
                </Header>
                <BodyContent>
                    {dataClass.map(({title, city, countStudent, id}) => (
                        <OneClass key={id} onClick={() => setActiveSchool(id)} activeColor={activeSchool === id}>
                            <LeftBlock>
                                <Image src={SchoolPicture} alt="schoolPicture"/>
                                <Description>
                                    <Title>{shortText(title)}</Title>
                                    <City>{shortText(city)}</City>
                                </Description>
                            </LeftBlock>
                            <CountBlock>
                                <CountNumber>
                                    {countStudent} 
                                </CountNumber>
                                ЧЕЛ.
                            </CountBlock>
                        </OneClass>
                    ))}
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
    padding: 20px 0;
`;

const Header = st.div`
    text-align: center;
    font-size: 40px;
    padding: 0 0 30px 0;
    max-width: 250px;
`;

const BodyContent = st.div`
    text-align: center;
    padding: 0 0 50px 0;
    width: 100%;
    overflow: auto;
`;

const OneClass = st.div`
    background: ${({activeColor}) => activeColor ? "#9B5DE559" : "none"};
    display: flex;
    justify-content: space-between;
    padding: 8px 24px;
    align-items: center;
    cursor: pointer;
`;

const LeftBlock = st.div`
    display: flex;
`;

const Image = st.img`
    margin: -4px 24px 4px 0;
`;

const Description = st.div`
    text-align: start;
    max-width: 200px
`;

const Title = st.div`
    font-size: 17px;
`;

const City = st.div`
    font-size: 15px;
    color: #8D8E90;
`;

const CountBlock = st.div`
    color: #8D8E90;
`;

const CountNumber = st.div`
    color: #F15BB5;
`;

