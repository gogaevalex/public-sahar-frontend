

import React, { useState, useEffect } from 'react';
import st from '@emotion/styled'
import { useNavigate } from 'react-router-dom';
import { ExitIcon } from '../icons/ExitIcon';
import { CoinIcon } from '../icons/CoinIcon';
import ShhhEmoji from '../pictures/ShhhEmoji.png';
import NewspaperGlasses from '../pictures/NewspaperGlasses.png';
import ThreeCoins from '../pictures/ThreeCoins.png';
import { SysPush } from '../components/SysPush';
import { PopUp } from '../components/PopUp';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/actions';
import $api from '../utils/api';
import { LoadingScreen } from '../components/LoadingScreen';

const CurrentBalance = 59

export const Shop = () => {

    const buyRandom = async (data) => {
        try {
            console.log("tryingDelete", data)
            //api call should be here instead
            await $api.get('/buy/random');

        } catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [openedSystemPush, setOpenedSystemPush] = useState(true)
    const delay = 4000
    const transitionTimePush = 500
    const { isLoad: isLoadingUser, coins: earnedBalance } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(getUser());
    }, [])
    const [openedPopUp, setOpenedPopUp] = useState(false) //стейт подтверждения об оплате
    if (!isLoadingUser && earnedBalance) {
        return (

            <Parent>
                <SysPush
                    setOpenedSystemPush={setOpenedSystemPush}
                    openedSystemPush={openedSystemPush}
                    delay={delay}
                    transitionTimePush={transitionTimePush}
                >

                    <p>
                        твое имя было успешно✅ добавлено в 3 опроса!
                    </p>


                </SysPush>
                {/* <text>
                у вас недостаточно монет на балансе
            </text> */}
                <PopUp
                    setOpenedPopUp={setOpenedPopUp}
                    openedPopUp={openedPopUp}>
                    <Text>
                        Оплатить 100 монет за продвижение твоего имени в 3 рандомных опроса?

                    </Text>
                    <br></br>
                    <ButtonInvite>Да</ButtonInvite>
                    <ButtonInvite>Отмена</ButtonInvite>
                </PopUp>




                <WhiteSpace>
                    <ExitButton onClick={() => navigate('/profile')}>
                        <ExitIcon></ExitIcon>
                    </ExitButton>
                    <MainSpace>
                        <YourBalance>
                            <Text>твой баланс</Text>

                            <Heading><CentralImage src={ThreeCoins} /> {earnedBalance}</Heading>

                        </YourBalance>

                        <Text>Забусти свое имя в Опросах</Text>
                        <SecondaryText>используй монеты чтобы чаще появляться в опросах</SecondaryText>

                        <ButtonSpace>
                            <ButtonImage src={NewspaperGlasses} />
                            <ButtonText>Отправь свое имя в 3 рандомных опроса</ButtonText>
                            <ButtonPay onClick={() => {

                                buyRandom();
                                console.log("start", openedSystemPush);
                                setOpenedSystemPush(true);
                                console.log("set", openedSystemPush)
                                setTimeout(() => {
                                    setOpenedSystemPush(false);
                                    console.log(openedSystemPush)
                                }, delay);
                            }}>
                                <PayButtonText>
                                    100
                                </PayButtonText>
                                <Icon><CoinIcon /></Icon>

                            </ButtonPay>
                        </ButtonSpace>

                        <ButtonSpace>
                            <ButtonImage src={ShhhEmoji} />
                            <ButtonText>Добавь свое имя в опрос своего краша</ButtonText>
                            <ButtonPay onClick={() => {
                                // setOpenedSystemPush(true);
                                // setOpenedPopUp(true)
                                navigate('/shopcrushoption')
                            }}>
                                <PayButtonText>
                                    300
                                </PayButtonText>
                                <Icon><CoinIcon /></Icon>
                            </ButtonPay >
                        </ButtonSpace>

                        <BottomSpace>
                            <Text>Как заработать еще монеток?</Text>
                            <SecondaryText>отвечай на опросы про друзей и получай монеты</SecondaryText>
                        </BottomSpace>
                    </MainSpace>
                </WhiteSpace>
            </Parent >

        )
    } else {
        return (
            <LoadingScreen></LoadingScreen>
        )
    }
}

const Parent = st.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: center;
padding: auto;  
`;
const ExitButton = st.div`
position:absolute;
right: 10px;    
top:10px;
padding: 6px;
cursor: pointer;
`;
const Icon = st.div`
padding:4px;
`;
const ButtonInvite = st.div`
    background: #FDFDFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 21px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 5px 15px;
    align-items: center;
    width:100%;
    margin:auto;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    overflow:visible;
    height:40px;
    margin-bottom:10px;
    
`;
const YourBalance = st.div`
margin:30px;
`;
const WhiteSpace = st.div`
background: #FDFDFF;
border-radius: 16px;
padding:15px 5px 15px 5px;
width:100%;
`;
const MainSpace = st.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:15px;
`;
const Text = st.div`
color: #0C0E12;
margin: auto;
font-size: 18px;

`;
const ButtonText = st.div`
color: #FDFDFF;
margin: 10px;
font-weight: 300;
font-size: 14px;
line-height: 14px;
text-align: left;
`;
const SecondaryText = st.div`
color: #0C0E12;
margin: auto;
margin-top:5px;
margin-bottom:10px;
width:70%;
opacity:40%;
font-size: 14px;
`;
const PayButtonText = st.div`
font-weight: 700;
font-size: 15px;
line-height: 14px;
color: #FDFDFF;

`;
const BottomSpace = st.div`
height:30%;
padding-top: 100px;
`;
const ButtonSpace = st.div`
background: #0F1217;
border-radius: 14px;
display: flex;
justify-content: center;
padding:8px 15px 8px 15px;
align-items: center;
margin:7px;
font-weight: 500;
font-size: 20px;
line-height: 23px;
height:80px;
width:100%;
    
`;
const ButtonPay = st.div`

background: #FBB701;
border-radius: 15.5px;
display: flex;
justify-content: center;
padding: 5px 17px;
align-items: center;
width:100%;
margin:10px;
font-weight: 500;
font-size: 20px;
line-height: 23px;
overflow:visible;
height:50%;
width:22%;
cursor: pointer;
    
`;
const CentralImage = st.img`
height:50px;
margin:10px;
`;
const ButtonImage = st.img`
height:90%;
`;
const Heading = st.text`
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
font-weight: 900;
font-size: 40px;
line-height: 33px;
color: #FBB701;
margin:auto;
`;
const HeadingSecondary = st.text`
font-family: 'Roboto';
font-style: italic;
font-weight: 700;
font-size: 15px;
line-height: 23px;
text-align: center;
text-transform: uppercase;
color: #EB9C35;
`;