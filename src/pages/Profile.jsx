import React, { useState } from 'react';
import st from '@emotion/styled'

import { TwoBigCoins } from '../icons/TwoBigCoins';

import CrystalBallSmall from '../pictures/CrystalBallSmall.png';
import GradHat from '../pictures/GradHat.png';
import SchoolGrey from '../pictures/SchoolGrey.png';
import GreySugar from '../pictures/GreySugar.png';


const friendsNumber = 154
const SugarNumber = 340
const classNumber = 11
const coinsEarned = 59

const dataClassProfile = {
    name: "Даша",
    surname: "Малаша",
    id: 26,
    schoolName: "СОШ №33 им.Инстасамки Тиктоковны",
    SugarNumber: 340,
    classNumber: 11,
    coinsEarned: 59,
    premium: true
}

const dataClassFriends = [

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
        name: "Уляля",
        surname: "Вививи",
        id: 12,

    },
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


]

const dataClassBlocked = [
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
console.log(dataClassProfile)
export const Profile = () => {
    const [activeClass, setActiveClass] = useState([]);
    const baseListSize = 5
    const listIncreaseStep = 10
    const [showRowsFriends, setShowRowsFriends] = useState(baseListSize)
    const [showRowsBlocked, setShowRowsBlocked] = useState(baseListSize)



    return (


        <Parent>
            <Rounder>

                <BioSpace>
                    <BioLines>
                        {dataClassProfile.name + " " + dataClassProfile.surname}
                        {dataClassProfile.premium && <SmallPics src={CrystalBallSmall} />}
                    </BioLines>
                    <BioLines>
                        <div>
                            <SmallerPics src={SchoolGrey} />
                            <GreyText>{dataClassProfile.schoolName}</GreyText>
                        </div>
                        <>&nbsp;</>
                        <div>
                            <SmallerPicsMar src={GradHat} />
                            <GreyText>{dataClassProfile.classNumber} класс</GreyText>
                        </div>

                    </BioLines>
                    <BioLines>
                        <GreyText><SmallerPicsSug src={GreySugar} />сахарки <BlackText>{dataClassProfile.SugarNumber}</BlackText></GreyText>
                    </BioLines>

                </BioSpace>
                <BodyContent>


                    <TopText>
                        монеты
                    </TopText>


                </BodyContent>
                <BioLines>
                    <BigText><TwoBigCoins /> {dataClassProfile.coinsEarned}</BigText>
                    <ButtonShop>магазин</ButtonShop>
                </BioLines>

                <BodyContent>
                    <TopText>друзья <BlackText>{dataClassFriends.length}</BlackText></TopText>

                    {dataClassFriends.length ? (dataClassFriends.map(({ name, surname, id }, index) => (
                        index < showRowsFriends && (<OneClass key={id}>
                            <Text>
                                {name} {surname}
                            </Text>
                            <ButtonSelect onClick={() => setActiveClass([...activeClass, id])} >
                                {activeClass.find((item) => item === id) ? <RequestSent>друг добавлен</RequestSent> : <ButtonFriendship>дружить</ButtonFriendship>}
                            </ButtonSelect>
                        </OneClass>)
                    ))
                    ) : <TextEmpty>-тут ничего нет-</TextEmpty>
                    }
                    {dataClassFriends.length >= baseListSize && (
                        <BottomButtonSpace>
                            <ButtonMore onClick={() => setShowRowsFriends(Math.min(showRowsFriends + listIncreaseStep, dataClassFriends.length))} activeColor={showRowsFriends === dataClassFriends.length}>еще</ButtonMore>
                            <ButtonHide onClick={() => setShowRowsFriends(Math.max(showRowsFriends - listIncreaseStep, baseListSize))} activeColor={showRowsFriends === baseListSize}>скрыть</ButtonHide>
                        </BottomButtonSpace>
                    )}
                </BodyContent>
                <BodyContent>
                    <TopText>заблокированые <BlackText>{dataClassBlocked.length}</BlackText></TopText>
                    {dataClassBlocked.length ? (dataClassBlocked.map(({ name, surname, id }, index) => (
                        index < showRowsBlocked && <OneClass key={id}>
                            <Text>
                                {name} {surname}
                            </Text>

                            <ButtonSelect onClick={() => setActiveClass([...activeClass, id])} >
                                {activeClass.find((item) => item === id) ? <RequestSent>друг добавлен</RequestSent> : <ButtonFriendship>дружить</ButtonFriendship>}
                            </ButtonSelect>
                        </OneClass>
                    ))
                    ) : <TextEmpty>-тут ничего нет-</TextEmpty>}
                    {dataClassBlocked.length >= baseListSize && (
                        <BottomButtonSpace>
                            <ButtonMore onClick={() => setShowRowsBlocked(Math.min(showRowsBlocked + listIncreaseStep, dataClassBlocked.length))} activeColor={showRowsBlocked === dataClassBlocked.length}>еще</ButtonMore>
                            <ButtonHide onClick={() => setShowRowsBlocked(Math.max(showRowsBlocked - listIncreaseStep, baseListSize))} activeColor={showRowsBlocked === baseListSize}>скрыть</ButtonHide>
                        </BottomButtonSpace>
                    )}
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
    padding: 5px 20px;
    border-radius:16px;
    width:100%;
`;

const BodyContent = st.div`
    text-align: center;
`;

const BioSpace = st.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin:20px 5px;
`;

const BioLines = st.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
const GreyText = st.text`
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: rgba(15, 18, 23, 0.25);
`;

const SmallPics = st.img`
height: 30px;
margin: 0 5px;
`;
const SmallerPics = st.img`
height: 20px;
margin: 0 2px 0 0;
`;

const SmallerPicsMar = st.img`
height: 20px;
transform: translatey(8px);
margin:2px;
`;

const SmallerPicsSug = st.img`
height: 18px;
transform: translatey(6px);
margin:0 2px;
opacity:0.8;
`;

const BlackText = st.text`
color: #0C0E12;
font-weight: 700;
`;

const BigText = st.div`
font-weight: 900;
font-size: 30px;
line-height: 33px;
color: #FBB701;
margin-left:3px;

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

const TextEmpty = st.div`
height: 2em;
opacity:0.3;
font-size: 13px;
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

const ButtonShop = st.div`
background: #FC7753;
color: #FDFDFF;
border-radius: 16px;
font-weight: 500;
font-size: 18px;
line-height: 16px;
height:2em;
display:flex;
align-items: center;
justify-content: center;
padding:0 7px;
width: 50%;
margin:5px;
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