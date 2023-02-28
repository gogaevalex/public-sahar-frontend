

import React, { useState } from 'react';
import st from '@emotion/styled'
import LoveLetter from '../pictures/LoveLetter.png';
import FirstLetter from '../pictures/FirstLetter.png';
import CrystalBallPush from '../pictures/CrystalBallPush.png';
import CoolGlasses from '../pictures/CoolGlasses.png';
import CoinsX2 from '../pictures/CoinsX2.png';


const dataClass = [
    {

        image: LoveLetter,
        text: "раскрывай 2 имени в неделю",
        id: 0,
    },
    {
        image: CoinsX2,
        text: "получай в два раза больше монет",
        id: 1,
    },
    {
        image: CrystalBallPush,
        text: "уведомления о том что ты чей-то краш ",
        id: 2,
    },
    {
        image: FirstLetter,
        text: "бесконечные подсказки",
        id: 3,
    },
    {
        image: CoolGlasses,
        text: "отправляй полностью анонимные сахарки",
        id: 4,
    },

]



// function preloadImage(src) {
//     const image = new Image();
//     image.src = src;
//     return function PreloadedImage(props) {
//         return <img {...props} src={src} />;
//     };
// }


export const PayAdd = () => {
    const [translate, setTranslate] = useState(0)
    const [advertNumber, setAdvertNumber] = useState(0)

    const styles = {
        transform: `translateX(${20 * advertNumber}%`
    }

    return (

        <Parent>

            <TermsSpace>
                <TermsSubSpace>
                    <TermsText>
                        <b>  Подписка на оплату. Отменить можно в любой момент. </b>
                        Процесс оплаты будет выполнен через Тиньков Банк.
                        Ваша подписка будет продлеваться каждую неделю по 149 рублеей.
                        Нажимая “Оплатить вы соглашаетесь”  с правилами автопродления
                    </TermsText>
                </TermsSubSpace>
                <MainSpace>
                    <Heading>Узнай Кому Ты Нравишься</Heading>
                    <Text>CO</Text>
                    <HeadingSecondary>Всевидящим Глазом👁️</HeadingSecondary>
                    <MovableCardSpace>
                        <TransparentButtonLeft onClick={() => {
                            advertNumber == 0 ? setAdvertNumber(-4) : setAdvertNumber(advertNumber + 1);


                        }}></TransparentButtonLeft>
                        <TransparentButtonRight onClick={() => {
                            setAdvertNumber((advertNumber - 1) % dataClass.length);

                        }
                        }></TransparentButtonRight>
                        <MovableCard advertNumber={advertNumber} style={styles}>
                            {dataClass.map(({ image, text, id, advertNumber }) => (

                                <MovableCardEach key={id}>
                                    <CentralImage src={image} />
                                    <CardText>{text}</CardText>
                                </MovableCardEach>


                            ))}
                        </MovableCard>

                    </MovableCardSpace>
                    <FiveDotsSpace>


                        {dataClass.map(({ id }) => (
                            <FiveDotsSpace key={id}>
                                <Dot activeColor={-1 * advertNumber === id}>

                                </Dot>
                            </FiveDotsSpace>
                        ))}
                    </FiveDotsSpace>
                    <ButtonDiscount>
                        скидка 30%
                    </ButtonDiscount>
                    <Text>
                        149р./неделю
                    </Text>
                    <ButtonPay>ОПЛАТИТЬ</ButtonPay>

                    <ButtonNotNow>не сейчас</ButtonNotNow>



                </MainSpace>
            </TermsSpace>
        </Parent >

    )
}

const Parent = st.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: center;
padding: auto;  
`;

const TermsSpace = st.div`

background: #494949;
border-radius: 16px;
padding:15px 5px 15px 5px;
width:100%;
`;
const TransparentButtonLeft = st.div`
position:absolute;
width:50%;
height:100%;
left:0;
top:0;
cursor: pointer;
z-index:100;
`;
const TransparentButtonRight = st.div`
position:absolute;
width:50%;
height:100%;
right:0;
top:0;
cursor: pointer;
z-index:100;
`;

const MainSpace = st.div`

background: #0F1217;
border: 2px solid #EB9C35;
border-radius: 26px;
padding:15px;
display: flex;
flex-direction: column;
overflow: hidden;
`;

const Text = st.div`
color: #FDFDFF;
margin: 5px;
padding: 0 80px;
`;
const TermsSubSpace = st.div`
padding: 0px 40px 15px 40px;
line-height: 70%;

`;
const TermsText = st.text`
color: #FDFDFF;
opacity:50%;
margin: 5px;
font-weight: 300;
font-size: 9px;
line-height: 10px;
`;

const CardText = st.div`
color: #FDFDFF;
margin: 5px;
padding: 0 80px;
margin-top: -20px;
text-shadow: 5px 0px 10px rgba(, 0, 0, 0.25);

`;

const MovableCard = st.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
transition-duration: 1s;
width:500%;
`;

const FiveDotsSpace = st.div`
height:30px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
const Dot = st.div`
height:8px;
width:8px;
margin:5px;
border-radius:8px;
transition-duration: 0.5s;
background-color: #FDFDFF;
opacity:${({ activeColor }) => activeColor ? `100%` : `30%`};
`;

const MovableCardSpace = st.div`
position: relative;
margin-top:-15px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start

`;

const MovableCardEach = st.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:20%;

`;

const ButtonDiscount = st.div`
background: #FFB24E;
border-radius: 14px;
display: flex;
justify-content: center;
padding:4px;
align-items: center;
margin:auto;
margin-top: 10px;
margin-bottom: 10px;
font-weight: 500;
font-size: 20px;
line-height: 23px;
width:40%;
    
`;
const ButtonNotNow = st.div`
cursor: pointer;
color: #FDFDFF;
display: flex;
justify-content: center;
padding: 5px 15px 5px 17px;
align-items: center;
width:100%;
margin:auto;
margin-top: 5px;
margin-bottom: 10px;
font-weight: 500;
font-size: 20px;
line-height: 23px;
width: 50%;
    
`;
const ButtonPay = st.div`
background: linear-gradient(268.78deg, #FF9409 36.01%, #FFB24F 85.22%);
border-radius: 22px;
cursor: pointer;
display: flex;
justify-content: center;
padding: 5px 15px;
align-items: center;
width:100%;
margin:auto;
margin-top: 10px;
font-weight: 500;
font-size: 20px;
line-height: 23px;
overflow:visible;
height:40px;
width:50%;
    
`;
const CentralImage = st.img`
height:20vh;
`;


const Heading = st.text`
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;
color: #FDFDFF;
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


