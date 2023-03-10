import React, { useState } from 'react';
import st from '@emotion/styled'
import { Input } from '../components/Input';

const dataClassCommon = [

    {
        name: "Дасист",
        surname: "Фантастиш",
        id: 26,
        common: 5
    },
    {
        name: "Гем",
        surname: "Отоген",
        id: 27,
        common: 3
    },
    {
        name: "Димка",
        surname: "Дымоходов",
        id: 28,
        common: 2
    },
    {
        name: "Сисим",
        surname: "Салавимкин",
        id: 29,
        common: 1
    },
    {
        name: "Изя",
        surname: "Гемкина",
        id: 20,
        common: 1
    },
    {
        name: "Уляля",
        surname: "Вививи",
        id: 12,
    }

]

const dataClassSchool = [
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
    }

]

export const People = () => {
    const [activeClass, setActiveClass] = useState([]);
    const [value, setValue] = useState("");

    console.log(activeClass)




    const filteredDataCommon = dataClassCommon.filter((el) => {
        if (value === '') {
            return el;
        }
        else {
            const str = el.name + " " + el.surname;
            return str.toLowerCase().includes(value)
        }
    })
    const filteredDataSchool = dataClassSchool.filter((el) => {
        if (value === '') {
            return el;
        }
        else {
            const str = el.name + " " + el.surname;
            return str.toLowerCase().includes(value)
        }
    })
    const baseListSize = 5
    const listIncreaseStep = 10


    const [showRowsCommon, setShowRowsCommon] = useState(baseListSize)
    const [showRowsSchool, setShowRowsSchool] = useState(baseListSize)



    return (


        <Parent>
            <Rounder>
                <SearchBar>
                    <Input value={value} onChange={setValue} placeholder="поиск..." fontSize={18} />
                </SearchBar>
                <BodyContent>
                    <TopText>друзья друзей</TopText>
                    {filteredDataSchool.length ? (filteredDataCommon.map(({ name, surname, id }, index) => (
                        index < showRowsCommon && (<OneClass key={id}>
                            <Text>
                                {name} {surname}
                            </Text>
                            <ButtonSelect onClick={() => setActiveClass([...activeClass, id])} >
                                {activeClass.find((item) => item === id) ? <RequestSent>друг добавлен</RequestSent> : <ButtonFriendship>дружить</ButtonFriendship>}
                            </ButtonSelect>
                        </OneClass>)
                    ))
                    ) : <TextEmpty>-тут ничего нет-</TextEmpty>}
                    {filteredDataCommon.length >= baseListSize && (
                        <BottomButtonSpace>
                            <ButtonMore onClick={() => setShowRowsCommon(Math.min(showRowsCommon + listIncreaseStep, filteredDataCommon.length))} activeColor={showRowsCommon === filteredDataCommon.length}>еще</ButtonMore>
                            <ButtonHide onClick={() => setShowRowsCommon(Math.max(showRowsCommon - listIncreaseStep, baseListSize))} activeColor={showRowsCommon === baseListSize}>скрыть</ButtonHide>
                        </BottomButtonSpace>
                    )}
                </BodyContent>
                <BodyContent>
                    <TopText>из школы</TopText>
                    {filteredDataSchool.length ? (filteredDataSchool.map(({ name, surname, id }, index) => (
                        index < showRowsSchool && <OneClass key={id}>
                            <Text>
                                {name} {surname}
                            </Text>

                            <ButtonSelect onClick={() => setActiveClass([...activeClass, id])} >
                                {activeClass.find((item) => item === id) ? <RequestSent>друг добавлен</RequestSent> : <ButtonFriendship>дружить</ButtonFriendship>}
                            </ButtonSelect>
                        </OneClass>
                    ))
                    ) : <TextEmpty>-тут ничего нет-</TextEmpty>}
                    <BottomButtonSpace>
                        <ButtonMore onClick={() => setShowRowsSchool(Math.min(showRowsSchool + listIncreaseStep, filteredDataSchool.length))} activeColor={showRowsSchool === filteredDataSchool.length}>еще</ButtonMore>
                        <ButtonHide onClick={() => setShowRowsSchool(Math.max(showRowsSchool - listIncreaseStep, baseListSize))} activeColor={showRowsSchool === baseListSize}>скрыть</ButtonHide>
                    </BottomButtonSpace>
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
    padding:0 20px;
    width:100%;
  
`;

const BodyContent = st.div`
    text-align: center;
 
`;

const SearchBar = st.div`
    height:40px;
    display: flex;
    justify-content: left;
    text-size:12px;
    padding:0px 10px;
`;
const TextEmpty = st.div`
height: 2em;
opacity:0.3;
font-size: 13px;
`;
const OneClass = st.div`
    border-bottom: 1px solid rgba(15, 18, 23, 0.25);
    display: flex;
    justify-content: space-between;
    padding:20px 5px;
    align-items: center;
    height:30px;

`;

const TopText = st.div`
border-bottom: 1px solid rgba(15, 18, 23, 0.25);
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    text-align: left;
    color: rgba(15, 18, 23, 0.35);
    padding: 0 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    padding-bottom: 5px;
`;
const Text = st.div`
`;
const ButtonSelect = st.div`
    cursor: pointer;
`;

const ButtonFriendship = st.div`
background: #FC7753;
color: #FDFDFF;
border-radius: 14px;
font-weight: 300;
font-size: 11px;
line-height: 16px;
height:2em;
display:flex;
align-items: center;
padding:0 7px;
`;

const RequestSent = st.div`
color: rgba(15, 18, 23, 0.25); 
font-weight: 400;
font-size: 11px;
line-height: 16px;
padding:
`;
const ButtonHide = st.div`
cursor: pointer;
text-decoration: underline;
color: rgba(15, 18, 23);
opacity: ${({ activeColor }) => activeColor ? "18%" : "40%"};

`;

const ButtonMore = st.div`
cursor: pointer;
padding-right:10px;
text-decoration: underline;
color: rgba(15, 18, 23);
opacity: ${({ activeColor }) => activeColor ? "18%" : "40%"};
`;

const BottomButtonSpace = st.div`
display: flex;
flex-direction: row;
justify-content:center;
margin-bottom:15px;
font-weight: 400;
font-size: 13px;
line-height: 16px;
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