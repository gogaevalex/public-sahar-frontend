import React, { useState } from 'react';
import st from '@emotion/styled'
import { MainLayout } from '../components/MainLayout';
import { CrossIcon } from '../icons/CrossIcon';
import { TickIcon } from '../icons/TickIcon';

const dataClass = [
    {
        text: "Я еще даже не в 6-ом классе",
        id: 5,
    },
    {
        text: "6-ой класс",
        id: 6,
    },
    {
        text: "7-ой класс ",
        id: 7,
    },
    {
        text: "8-ой класс ",
        id: 8,
    },
    {
        text: "9-ой класс ",
        id: 9,
    },
    {
        text: "10-ой класс ",
        id: 10,
    },
    {
        text: "11-ой класс ",
        id: 11,
    },
    {
        text: "Я уже закончил(а) школу",
        id: 12,
    },
]

export const ChoiceClass = () => {
    const [activeClass, setActiveClass] = useState(null);
    function randomChooseMaleFemale() {
        // возвращает рандомное число от min до max
        const randomNum = Math.round(Math.random());
        return randomNum == 1 ? "female" : "male"
    }
    const randomGender = randomChooseMaleFemale()
    return (
        <MainLayout nextPage={"/choiceCity"} prevPage={"/"}>
            <Parent>
                <Header>
                    {randomGender}
                </Header>
                <BodyContent>
                    Поиск
                </BodyContent>
                <BodyContent>
                    {dataClass.map(({ text, id }) => (
                        <OneClass key={id}>
                            <Text>
                                {text}
                            </Text>
                            <ButtonSelect onClick={() => setActiveClass(id)} activeColor={activeClass === id}>
                                {activeClass === id ? <TickIcon /> : <CrossIcon />}
                            </ButtonSelect>
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
    padding: 30px
`;

const Header = st.div`
    text-align: center;
    font-size: 40px;
    padding: 0 0 30px 0;
`;

const BodyContent = st.div`
    text-align: center;
    padding: 0 0 50px 0;
    width: 100%;
    max-height: 300px;
    overflow: auto;
`;

const OneClass = st.div`
    border-bottom: 1px solid var(--tg-theme-text-color);
    display: flex;
    justify-content: space-between;
    padding: 14px 0;
    align-items: center;
`;

const Text = st.div`

`;

const ButtonSelect = st.div`
    background: ${({ activeColor }) => activeColor ? "#05B2DC" : "#F15BB5"};
    cursor: pointer;
    padding: 6px 18px;
    border-radius: 4px;
`;

