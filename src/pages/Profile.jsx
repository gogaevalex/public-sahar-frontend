import React, { useState, useEffect } from 'react';
import st from '@emotion/styled'

import { TwoBigCoins } from '../icons/TwoBigCoins';
import { useNavigate } from 'react-router-dom';
import CrystalBallSmall from '../pictures/CrystalBallSmall.png';
import GradHat from '../pictures/GradHat.png';
import SchoolGrey from '../pictures/SchoolGrey.png';
import GreySugar from '../pictures/GreySugar.png';
import { MenuLayout } from '../components/MenuLayout';
import { InputtedText } from '../components/InputtedText';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendList, getUser } from '../redux/actions';
import { LoadingScreen } from '../components/LoadingScreen';
import $api from '../utils/api';
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



export const Profile = () => {

    const deleteContact = async (data) => {
        try {
            console.log("tryingDelete", data)
            //api call should be here instead
            await $api.delete('/contact/delete', { data });

        } catch (error) {
            console.log(error)
        }
    }


    const navigate = useNavigate()
    const [activeClass, setActiveClass] = useState([]);
    const baseListSize = 10
    const listIncreaseStep = 10


    const dispatch = useDispatch()
    const { isLoad: isLoadingUser, coins: earnedBalance } = useSelector((state) => state.user);

    const { list: friendList, isLoad: isLoadingFriends } = useSelector((state) => state.friend).friendList;
    console.log('people', friendList)

    useEffect(() => {
        dispatch(getFriendList());
        dispatch(getUser());
    }, [])
    const [showRowsFriends, setShowRowsFriends] = useState(baseListSize)
    const [showRowsBlocked, setShowRowsBlocked] = useState(baseListSize)
    var content = <LoadingScreen />
    if (!isLoadingFriends && friendList) {

        const dataClassFriends = friendList.contactList

        content = <Wrap>

            <Parent>
                <Rounder>

                    <BioSpace>
                        <ExtraMargin>
                            <BioLines>
                                {dataClassProfile.name + " " + dataClassProfile.surname}
                                {dataClassProfile.premium && <SmallPics src={CrystalBallSmall} />}
                            </BioLines>
                        </ExtraMargin>
                        <BioLines>
                            <div>
                                <SmallerPics src={SchoolGrey} />
                                <GreyText>{dataClassProfile.schoolName}</GreyText>
                            </div>
                        </BioLines>
                        <BioLines>
                            <div>

                                <GreyText><SmallerPicsMar src={GradHat} />{dataClassProfile.classNumber} класс</GreyText>
                            </div>
                        </BioLines>
                        <BioLines>
                            <div>
                                <GreyText><SmallerPicsSug src={GreySugar} />сахарки <BlackText>{dataClassProfile.SugarNumber}</BlackText></GreyText>

                            </div>
                        </BioLines>
                    </BioSpace>
                    <BodyContent>
                        <TopText>
                            баланс
                        </TopText>
                    </BodyContent>
                    <BioLinesBody>
                        <BigText><TwoBigCoins /> {earnedBalance}</BigText>
                        <ButtonShop onClick={() => navigate('/shop')}>магазин</ButtonShop>
                    </BioLinesBody>

                    <BodyContent>
                        <TopText>друзья <BlackText>{dataClassFriends.length}</BlackText></TopText>

                        {dataClassFriends.length ? (dataClassFriends.map(({ firstName, lastName, _id }, index) => (
                            index < showRowsFriends && (<OneClass key={_id}>
                                <Text>
                                    {firstName} {lastName}
                                </Text>
                                <ButtonSelect onClick={() => {
                                    setActiveClass([...activeClass, _id]);
                                    deleteContact({ _id: _id });
                                }} >
                                    {activeClass.find((item) => item === _id) ? <RequestSent>друг удален</RequestSent> : <ButtonFriendship>удалить</ButtonFriendship>}
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
                    {/* <BodyContent>

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
                    </BodyContent> */}
                </Rounder>
            </Parent>

        </Wrap>
    }
    return (<Wrap>
        <MenuLayout>{content}</MenuLayout>
    </Wrap>)
}
const Wrap = st.div`
background: #001514;
height: 100vh;
`;
const Parent = st.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #FDFDFF;
    border-radius: 16px;
    margin: 0 10px;
    
`;
const ExtraMargin = st.div`

    margin: 0 0 5px 2px;
    
`;
const Rounder = st.div`
    padding: 5px 20px;
    border-radius:16px;
    width:100%;
`;

const BodyContent = st.div`
    text-align: center;
    margin-top: 17px;
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
height: 20px;
`;
const BioLinesBody = st.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-around;
height: 45px;
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
margin:0 2px 4px 0;
`;

const SmallerPicsSug = st.img`
height: 18px;
transform: translatey(6px);
margin:9px 4px 0 2px;
opacity:0.8;
`;

const BlackText = st.text`
color: #0C0E12;
font-weight: 700;
`;

const BigText = st.div`

font-weight: 900;
font-size: 35px;
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
background: #E3271B;
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
border-radius: 20px;
font-weight: 500;
font-size: 18px;
line-height: 16px;
height:2em;
display:flex;
align-items: center;
justify-content: center;
padding:0 7px;
width: 40%;
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