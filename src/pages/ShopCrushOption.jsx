import React, { useState } from 'react';
import st from '@emotion/styled'

import { WhiteExitIcon } from '../icons/WhiteExitIcon';
import { SelectActiveIcon } from '../icons/SelectActiveIcon';
import { SelectInactiveIcon } from '../icons/SelectInactiveIcon';
import { Input } from '../components/Input';

const dataClass = [
    {
        name: "Вася",
        surname: "Пупкин",
        id: 5,
    },
    {
        name: "Ася",
        surname: "Пупкина",
        id: 6,
    },
    {
        name: "Ганс",
        surname: "Андерсон",
        id: 7,
    },
    {
        name: "Марк",
        surname: "Хоровиц",
        id: 8,
    },
    {
        name: "Чеге",
        surname: "Вара",
        id: 9,
    },
    {
        name: "Ой",
        surname: "Морозов",
        id: 10,
    },
    {
        name: "Жанна",
        surname: "Дарк",
        id: 11,
    },
    {
        name: "Упсала",
        surname: "Вивишня",
        id: 12,
    },
    {
        name: "Валя",
        surname: "Шлупкина",
        id: 25,
    },
    {
        name: "Дасист",
        surname: "Фантастиш",
        id: 26,
    },
    {
        name: "Гем",
        surname: "Отоген",
        id: 27,
    },
    {
        name: "Димка",
        surname: "Дымоходов",
        id: 28,
    },
    {
        name: "Сисим",
        surname: "Салавимкина",
        id: 29,
    },
    {
        name: "Изя",
        surname: "Гемкина",
        id: 20,
    },
    {
        name: "Жуль",
        surname: "Верн",
        id: 21,
    },
    {
        name: "Ус",
        surname: "Накручивашко",
        id: 22,
    },
]


export const ShopCrushOption = () => {
    const [activeClass, setActiveClass] = useState(null);
    const [value, setValue] = useState("");

    return (


        <Parent>
            <Rounder>
                <Header>
                    <ConfirmButton activeClass={activeClass}>Подтвердить</ConfirmButton>
                    <ExitButton>
                        <WhiteExitIcon></WhiteExitIcon>
                    </ExitButton>
                    <TopText>Выбери друга у которого хочешь появиться в опросе</TopText>

                </Header>
                <SearchBar>
                    <Input value={value} onChange={setValue} placeholder="поиск..." />
                </SearchBar>
                <BodyContent>
                    {dataClass.map(({ name, surname, id }) => (
                        <OneClass key={id}>
                            <Text>
                                {name} {surname}
                            </Text>
                            <ButtonSelect onClick={() => setActiveClass(id)} activeColor={activeClass === id}>
                                {activeClass === id ? <SelectActiveIcon /> : <SelectInactiveIcon />}
                            </ButtonSelect>
                        </OneClass>
                    ))}
                </BodyContent>
            </Rounder>
        </Parent>

    )
}

const Parent = st.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Rounder = st.div`
border-radius:16px;
`;
const Header = st.div`
    text-align: center;
    padding: 0 0 30px 0;
    background: #FF670E;
    padding:70px 20px 20px 20px;

`;

const BodyContent = st.div`
    text-align: center;
    padding:0 20px;
    width: 100%;
    overflow: auto;
`;
const SearchBar = st.div`
height:40px;
display: flex;
justify-content: left;
text-size:12px;
padding:5px 20px;
`;
const OneClass = st.div`
    border-top: 1px solid;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    align-items: center;
`;

const TopText = st.div`
font-weight: 500;
font-size: 17px;
line-height: 20px;
/* or 118% */

text-align: center;

color: #FDFDFF;
`;
const Text = st.div`
`;
const ButtonSelect = st.div`
    cursor: pointer;
    padding: 6px 18px;
 
`;

const ExitButton = st.div`
position:absolute;
left: 20px;    
top:20px;
cursor: pointer;
`;

const ConfirmButton = st.div`
position:absolute;
right: 20px;    
top:20px;
opacity: ${({ activeClass }) => activeClass ? "100%" : "40%"};
cursor: pointer;
font-weight: 400;
font-size: 14px;
line-height: 14px;
color: #FDFDFF;
`;