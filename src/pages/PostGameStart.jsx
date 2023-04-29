import React, { useState, useEffect } from 'react';
import st from '@emotion/styled'
import { Timer } from '../components/Timer';
import { PopUp } from '../components/PopUp';
import CoinsStacked from '../pictures/CoinsStacked.png';
import CashTounge from '../pictures/CashTounge.png';
import Padlock from '../pictures/Padlock.png';
import Tickets from '../pictures/Tickets.png';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance } from '../redux/actions';
import { getEarnedCoins } from '../redux/actions';
import { getQuestionList, updateNonce, updateOrder, updateQuestionNumber, getUser } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
const collectCoins = async () => {
    try {
        const result = await $api.get('/user/collect');
    } catch (error) {
        console.log(error)
    }
}


export const PostGameStart = () => {
    const [isCollected, setIsCollected] = useState(false);
    const [isInviteClicked, setIsInviteClicked] = useState(false);
    const [openedPopUp, setOpenedPopUp] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUser());
        dispatch(getEarnedCoins());
        // dispatch(updateNonce(1));
        // dispatch(updateOrder(11));
        // dispatch(updateQuestionNumber(1))
    }, [])
    const { isLoad: isLoadingUser, startTimeGame, coins: earnedBalance, justEarned: earnedCoins } = useSelector((state) => state.user);
    // const earnedCoins = useSelector((state) => state.earnedCoins.data);//сюда надо перекинуть инфу о заработаных монетах из Questions
    // const { balance: earnedBalance, earned: earnedCoins } = useSelector((state) => state.earnedCoins.data);//сюда надо перекинуть инфу об общем балансе юзера
    // const earnedBalance = 14
    // const earnedCoins = 50
    if (!isLoadingUser && startTimeGame) {
        return (
            <Parent>
                <BodyContent>
                    <Header>
                        Ура!
                    </Header>
                    <CentralImage src={CoinsStacked}></CentralImage>
                    <Text>
                        заработано: {earnedCoins} монет
                    </Text>
                    <ButtonGetCoins onClick={() => {
                        navigate('/postgame/coins');
                        collectCoins();
                    }} >
                        <ButtonImage src={CashTounge} />
                        <Text>
                            забрать монеты
                        </Text>
                    </ButtonGetCoins>
                </BodyContent>


            </Parent>

        )
    }
    else { return (<></>) }

}

const Parent = st.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: auto;
    background: #FDFDFF;

  
`;

const Header = st.div`
    text-align: center;
    font-size: 40px;
    padding: 0 0 30px 0;
`;

const BodyContent = st.div`

margin-top:45%;
    text-align: center;
    padding: 10px;
   
`;


const TextSecondary = st.div`
opacity: 40%;
margin: 5px;
`;

const Text = st.div`

margin: 5px;
`;



const ButtonGetCoins = st.div`
    background: #FDFDFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 21px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 5px 15px 5px 17px;
    align-items: center;
    width:100%;
    margin:auto;
    margin-top:20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    
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
    
`;
const CentralImage = st.img`

`;

const ButtonImageTicket = st.img`
overflow:visible;
margin-bottom:15px;

`;

const ButtonImage = st.img`

`;

const BodyContentNewGame = st.div`
text-align: center;
padding: 10px;
margin-top:35%;


`;

const Arrow = st.span`
font-size:35px;

`
const Heading = st.text`

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 36px;
text-align: center;

`;



