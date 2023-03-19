import React, { useState, useEffect } from 'react';
import st from '@emotion/styled'
import { TgIcon } from '../icons/TgIcon';
import { KeyIcon } from '../icons/KeyIcon';
import { WhiteExitIcon } from '../icons/WhiteExitIcon';
import Boy from '../pictures/Boy.png';
import Girl from '../pictures/Girl.png';
import GuyInTheHole from '../pictures/GuyInTheHole.png';
import { useLocation } from 'react-router';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getPremiumStatus } from '../redux/actions';
import { useNavigate } from 'react-router-dom';


const questionData = [
    {

        text: "Мы бы отлично смотрелись вместе ",
        fromWhomGender: "male",/*стоит обратить внимание что в отличии от dataClassStudents в Questions.jsx
        здесь записывается не пол того кому отправляется сахарок, а от кого*/
        fromClass: 11,//также дополнительно мы отправляем класс ответившего юзера
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677621840,
        questionId: 5,
        students: [
            {

                name: "Ахалайа Мохалайа ",
                won: false,
                userId: 53,
            },
            {

                name: "Дояна Коровкина ",
                won: false,
                userId: 54,
            },
            {

                name: "Сарика Хяркина ",
                won: true,
                userId: 55,
            },

            {

                name: "Жижка Вейперова ",
                won: false,
                userId: 58,
            },

        ]
    },
    {

        text: "Самая классная ",
        fromWhomGender: "female",/*стоит обратить внимание что в отличии от dataClassStudents в Questions.jsx
        здесь записывается не пол того кому отправляется сахарок, а от кого*/
        fromClass: 10,//также дополнительно мы отправляем класс ответившего юзера
        imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
        date: 1677621840,
        questionId: 5,

        students: [
            {

                name: "Ивана Бояркина ",
                won: false,
                userId: 53,
            },
            {

                name: "Дивана Покрывалкина ",
                won: false,
                userId: 54,
            },
            {

                name: "Сарика Хяркина ",
                won: true,
                userId: 55,
            },

            {

                name: "Опять Понеделкина ",
                won: false,
                userId: 58,
            },

        ]
    }
]

// const isPremium = false
// const paidRevealNamesLeft = 2
const chosenComplimentNumber = 1
const firstLetter = "В"
const currentQuestionGender = questionData[chosenComplimentNumber].fromWhomGender

export const NewComplimentsDetails = () => {
    const dispatch = useDispatch()
    const isPremium = true //useSelector((state) => state.premiumStatus.data.isPremium);//сюда надо перекинуть инфу о заработаных монетах из Questions
    const paidRevealNamesLeft = 2 //useSelector((state) => state.premiumStatus.data.paidRevealNamesLeft);
    const userBehindPremium = true
    const isRevealed = false
    useEffect(() => {
        dispatch(getPremiumStatus())
    }, [])

    const location = useLocation()
    const params = useParams()
    const navigate = useNavigate()
    console.log("status", isPremium)
    console.log(location)

    const [paidPopVisible, setPaidPopVisible] = useState(false)
    console.log("paid: " + paidPopVisible)
    console.log("isPremium: " + isPremium)
    return (
        <Background currentQuestionGender={currentQuestionGender}>
            <Parent>
                {paidPopVisible && (<><BlurOverlay onClick={() => setPaidPopVisible(false)} />
                    <WhiteOverflow>
                        <WhiteWrapper>
                            <CentralImage src={GuyInTheHole} />
                            <TextPaidTop>первая буква имени</TextPaidTop>
                            <TextBigLetter>{firstLetter}</TextBigLetter>
                            <ButtonPaid onClick={() => {
                                if (paidRevealNamesLeft < 0) {
                                    console.log('animate red')
                                } else {
                                    if (userBehindPremium) {
                                        console.log('show block')
                                    } else {
                                        console.log('reveal the name')
                                    }



                                }
                            }
                            } ><KeyIcon />&nbsp; раскрыть полное имя</ButtonPaid>
                            <TextPaidDescription>осталось раскрытий имени: {paidRevealNamesLeft}</TextPaidDescription>

                        </WhiteWrapper>
                    </WhiteOverflow></>)
                }
                <ExitButton onClick={() => navigate('/newcompliments')}><WhiteExitIcon /></ExitButton>
                <TopText>
                    {currentQuestionGender == 'male' ? <MiniPic src={Boy} /> : <MiniPic src={Girl} />}
                    от  {currentQuestionGender == 'male' ? "мальчика" : "девочки"} из {questionData[chosenComplimentNumber].fromClass} класса
                </TopText>

                <TheQuestionSpace >
                    <TheQuestionImageSpace>
                        <TheQuestionImage src={questionData[chosenComplimentNumber].imageLink} />
                    </TheQuestionImageSpace>
                    <TheQuestionText >
                        {questionData[chosenComplimentNumber].text}
                    </TheQuestionText>
                </TheQuestionSpace>
                <NameChoice>
                    {questionData[chosenComplimentNumber].students.map(({ name, won, userId }) => (
                        <ButtonName key={userId}
                            activeColor={won === true}

                        >

                            <Text>
                                {name}
                            </Text>
                        </ButtonName>
                    ))}
                </NameChoice>
                <AdText>
                    <TgIcon /><Text>@caxapok_bot</Text>
                </AdText>
                <ButtonInvite onClick={() =>
                    isPremium ? setPaidPopVisible(true) : navigate('/payadd')//переход на рекламу (надо чтобы можно было вернуться назад)
                }><KeyIcon /><Text>Узнать от кого этот сахарок</Text></ButtonInvite>
            </Parent>
        </Background >

    )
}

const Parent = st.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px
        background: blue;   
    `;
const BlurOverlay = st.div`

width:100%;
top:0;
bottom:0;
right:0;
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(15px);
position: fixed;
z-index:9;
cursor: pointer;
`;

const WhiteWrapper = st.div`
    transform: translateY(-15%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height:115%;
    padding-bottom:13px;
    `;
const WhiteOverflow = st.div`
    
    width:100%;
    position:fixed;
    bottom: 0;
    border-top-left-radius:16px;
    border-top-right-radius:16px;
    background: #FDFDFF;
    z-index:10;
    padding:10px;
    `;
const TextPaidTop = st.text`
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    align-items: center;
    text-align: center;
    color: #0F1217;
    `;

const TextBigLetter = st.text`
    font-weight: 700;
    font-size: 50px;
    line-height: 50px;
    align-items: center;
    text-align: center;
    color: #FF670E;
    margin:5px;
    `;
const TextPaidDescription = st.text`
    font-weight: 700;
    font-size: 10px;
    line-height: 23px;
    text-align: center;
    color: #7A787A;
    margin-top: 5px;
    `;

const ButtonPaid = st.div`
        cursor: pointer;
        padding: 6px 18px;
        border-radius:30px;
        background: #FF670E;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FDFDFF;
        width: 90%;
        justify-content: center;
       
    `;
const CentralImage = st.img`
    width: 100px;
    `;


const TheQuestionSpace = st.div`
    text-align: center;
    line-height: 25px;
    height:250px;
    margin-bottom: 1vw;
    `;

const TheQuestionText = st.text`
    color: #FDFDFF;
    font-family: Roboto;
    font-size: 23px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    line-height: 19px;
    `;

const TheQuestionImageSpace = st.div`
    margin-top:20px;
    
    `;

const TheQuestionImage = st.img`
    width: 50%;
    `;



const NameChoice = st.div`
      
       padding:10px;
        width: 100%;
        overflow: auto;
        margin: 10px auto;
        margin-top: 1vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 14px; 
    `;

const ButtonInvite = st.div`
    position:fixed;
    bottom:30px;
        background: #0F1217;
        margin-top: 15px;
        border-radius: 55px;
        cursor: pointer;
        color:#FDFDFF;
        display: flex;
        justify-content: center;
        padding: 5px 15px;
        align-items: center;
        width:80%;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        overflow:visible;
        height:40px;
        
    `;

const ExitButton = st.div`
    position:absolute;
    left: 20px;    
    top:20px;
    cursor: pointer;
`;

const Text = st.div`
margin:5px;
    `;
const AdText = st.div`
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #FDFDFF;
text-align: center;
display:flex;
align-items: center;
flex-direction:center;
    `;

const MiniPic = st.img`
    height:40px;
    margin:5px;
    `;
const TopText = st.div`
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    display:flex;
    align-items: center;
    flex-direction:center;
    text-align: center;
    padding:5px;
    color: #FDFDFF;
    `;

const ButtonName = st.div`
        position:relative;
        will-change: transform;
        background: #FDFDFF;
        width: 100%;
        height: 60px;
        cursor: pointer;
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 12px;
        border-radius: 7px;
        opacity: ${({ activeColor }) => activeColor ? "1" : ({ notYetClicked }) => notYetClicked ? "0.8" : "0.6"};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition-duration: 0.5s;
    `;
const Background = st.div`
    position:relative;
    height:100vh;
        background: ${({ currentQuestionGender }) => currentQuestionGender === "female" ? "#F15BB5" : "#05B2DC"};
        padding: 10px;
    
    `;









