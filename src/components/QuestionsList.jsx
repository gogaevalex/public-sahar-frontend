import React, { useState, useEffect, useRef } from 'react';
import st from '@emotion/styled'
import { ReshuffleIcon } from '../icons/ReshuffleIcon';
import { MenuLayout } from '../components/MenuLayout';
import { SkipIcon } from '../icons/SkipIcon';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionList, updateNonce, updateOrder, updateQuestionNumber, getUser } from '../redux/actions';

import { LoadingScreen } from '../components/LoadingScreen';
import $api from '../utils/api';


const sendAnswer = async (data) => {
    try {
        //api call should be here instead
        const result = await $api.post('/user/answer', { data });
    } catch (error) {
        console.log(error)
    }
}

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
};

// generate object with 12 objects within and inside of each object there is an array with 4 random numbers between 1 and 5
const winsMatrix = [];
for (let i = 1; i <= 12; i++) {
    const row = [];
    for (let j = 1; j <= 4; j++) {
        row.push(generateRandomNumber());
    }
    winsMatrix.push(row);
}

export const QuestionsList = () => {
    const maxQuestions = 12
    const dispatch = useDispatch()

    const [totalQuestions, setTotalQuestions] = useState(maxQuestions);


    useEffect(() => {
        dispatch(getQuestionList());
        dispatch(getUser());

        // dispatch(updateNonce(1));
        // dispatch(updateOrder(11));
        // dispatch(updateQuestionNumber(1))


    }, [])


    const { isLoad: isLoading, data: raw_questions } = useSelector((state) => state.question);
    const { isLoad: isLoadingUser, nonce, order, questionNumber } = useSelector((state) => state.user);
    const [questionsLeft, setQuestionsLeft] = useState(order);//11
    console.log("raw", raw_questions)
    console.log('ages!', questionsLeft)
    // useEffect(() => {
    //     if (startingOrder) {
    //         setQuestionsLeft(startingOrder)
    //         console.log("fire")
    //     }

    //     // dispatch(updateNonce(1));
    //     // dispatch(updateOrder(11));
    //     // dispatch(updateQuestionNumber(1))

    // }, [])
    console.log("firstQL", questionsLeft, order)
    const [questionNumberN, setQuestionNumberN] = useState(questionNumber);
    const widthOfStatLoaderFunc = ({ justAnswered, contactUserId, wins }) => {
        const isAddOne = justAnswered === contactUserId ? 1 : 0;
        return Math.min((1 + wins + isAddOne) * 10, 80)
    }


    useEffect(() => {
        setQuestionsLeft(order);
        // if (order) {
        //     dispatch(updateOrder({ order: questionsLeft }));

        // }



    }, [order])

    const navigate = useNavigate()

    const [widthOfStatLoader, setWidthOfStatLoader] = useState(0)



    const [justAnswered, setJustAnswered] = useState(null);
    const [isReshuffled, setIsReshuffled] = useState(false);
    let content = <LoadingScreen />
    console.log("testy", !isLoadingUser, raw_questions, nonce, order, questionNumber)
    if (!isLoading && raw_questions && !isLoadingUser) {
        if (raw_questions !== "wait") {


            const questionsForStudents = raw_questions.data.result
            console.log("s", questionsForStudents, order)
            const currentQuestionGender = questionsForStudents[questionsLeft].toWhomGender;
            //хранит пол (о ком задается текущий вопрос)
            const dataClasssStudentsRandom = questionsForStudents[questionsLeft].students
            const dataClassStudentsFirst = dataClasssStudentsRandom.slice(0, 4)//берем 4-х студентов 
            const dataClassStudentsSecond = dataClasssStudentsRandom.slice(4, 8)/*берем других 4-х студентов, 
        если предыдущие не понравились юзеру*/
            const dataClassStudentW = isReshuffled === true ? dataClassStudentsSecond : dataClassStudentsFirst
            const widthOfLoader = Math.ceil((totalQuestions - questionsLeft) * (100 / totalQuestions));
            const dataClassStudents = dataClassStudentW.map((st, index) => {
                return {
                    ...st, // copy existing properties
                    wins: winsMatrix[questionsLeft][index]
                }

            })
            const coinsEarned = order === 0 ? Math.round(Math.random() * totalQuestions * 2) + totalQuestions : 0
            console.log("real_data_before", dataClassStudents)
            content = <Background currentQuestionGender={currentQuestionGender}>

                {justAnswered ? (
                    <ContinueOverlay
                        onClick={() => {

                            setQuestionsLeft(questionsLeft - 1)
                            // setQuestionNumberN(questionNumberN + 1);
                            setJustAnswered(null);
                            setIsReshuffled(false);
                            questionsLeft === 0 && navigate('/postgame')
                        }}>
                    </ContinueOverlay>
                ) : <Empty />
                }
                <Parent>

                    <QuestionCounterSpace>
                        <QuestionCounterText>{12 - questionsLeft} из 12</QuestionCounterText>
                        <QuestionCounterBar>
                            <QuestionCounterLoader widthOfLoader={widthOfLoader}></QuestionCounterLoader>
                        </QuestionCounterBar>
                    </QuestionCounterSpace>
                    <TheQuestionSpace >
                        <TheQuestionImageSpace>

                            <TheQuestionImage src={questionsForStudents[questionsLeft].link} />
                        </TheQuestionImageSpace>
                        <TheQuestionText >
                            {questionsForStudents[questionsLeft].question}
                        </TheQuestionText>
                    </TheQuestionSpace>
                    <NameChoice>
                        {dataClassStudents.map(({ firstName, lastName, contactUserId, wins }) => (
                            <ButtonName key={contactUserId}
                                widthOfStatLoader={widthOfStatLoader}
                                questionData={questionsForStudents[questionsLeft]}
                                onClick={() => {
                                    setJustAnswered(contactUserId);
                                    console.log("check", questionsForStudents[questionsLeft])
                                    //   setDataAnswersRecorded([...dataAnswersRecorded, { aboutUserId: _id, _id: questionsForStudents[order]._id }]);
                                    sendAnswer({
                                        questionId: questionsForStudents[questionsLeft]._id,
                                        winUserId: contactUserId,
                                        loseUserIdArray: dataClassStudents.map(obj => obj.contactUserId).filter(obj => obj !== contactUserId),
                                    });
                                    // dispatch(updateNonce(nonce));
                                    dispatch(updateOrder({ order: questionsLeft - 1 }));

                                    // dispatch(updateQuestionNumber({ questionNumber: questionNumberN }))

                                    //   wins = wins + 5;

                                }}
                                activeColor={justAnswered === contactUserId}
                                notYetClicked={!justAnswered}
                            >
                                <StatisticsLoader
                                    wins={dataClassStudents.wins}
                                    widthOfStatLoader={widthOfStatLoaderFunc({ justAnswered, contactUserId, wins })}
                                    notYetClicked={!justAnswered}
                                >
                                </StatisticsLoader>
                                <Text>
                                    {firstName} {lastName}
                                </Text>
                            </ButtonName>
                        ))}
                    </NameChoice>
                    {justAnswered ? (
                        <ContinueButtonSpace>
                            <ContinueButton>
                                тыкни где-то чтобы продолжить</ContinueButton>
                        </ContinueButtonSpace>
                    ) : <QuestionManipulationSpace>
                        <TransparentButton
                            isReshuffled={isReshuffled}
                            style={{
                                opacity: isReshuffled ? "50%" : "100%",
                                pointerEvents: isReshuffled ? "none" : "all"
                            }}
                            onClick={() => setIsReshuffled(true)}>
                            <ReshuffleIcon />сменить имена
                        </TransparentButton>
                        <TransparentButton onClick={() => {
                            setTotalQuestions(totalQuestions - 1);
                            dispatch(updateOrder({ order: questionsLeft - 1 }));
                            setQuestionsLeft(questionsLeft - 1);
                            // yield call(() => $api.get('/user/questionNumber'));
                            setIsReshuffled(false);
                        }}>
                            <SkipIcon />пропустить
                        </TransparentButton>
                    </QuestionManipulationSpace>
                    }
                </Parent>

            </Background >



        }
    } else {
        navigate('/postgame/coins')
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
    padding: 30px
    background: blue;   
`;

const TheQuestionSpace = st.div`
text-align: center;
line-height: 25px;
height:250px;
margin-bottom:10px;

`;

const TheQuestionText = st.text`
color: #FDFDFF;
font-family: Roboto;
font-size: 23px;
font-weight: 400;
letter-spacing: 0em;
text-align: center;
line-height: 0px;


`;

const TheQuestionImageSpace = st.div`
margin-top:20px
`;

const TheQuestionImage = st.img`
width: 50%;
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
    overflow: auto;
`;
const NameChoice = st.div`
  
   padding:10px;
    width: 100%;
    overflow: auto;
    margin: 10px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 14px; 
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
const QuestionCounterSpace = st.div`
display: flex;
justify-content: center;
flex-direction: column;
width:100%;
padding:0 20px 0 20px;
`;

const QuestionCounterText = st.text`
color: #FDFDFF;
font-size: 13px;
font-weight: 900;
letter-spacing: 0em;
text-align: center;
letter-spacing: 0em;
margin-bottom:5px;

`;

const QuestionCounterBar = st.div`
background: rgba(15, 18, 23, 0.35);
border-radius: 2px;
height: 3px;
width:100%;

`;
const QuestionCounterLoader = st.div`

background: #FDFDFF;
width: ${({ widthOfLoader }) => widthOfLoader}%;
height: 3px;
border-radius: 2px;
`;

const ButtonSelect = st.div`
    background: ${({ activeColor }) => activeColor ? "#05B2DC" : "#F15BB5"};
    cursor: pointer;
    padding: 6px 18px;
    border-radius: 4px;
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
    background: ${({ currentQuestionGender }) => currentQuestionGender === "female" ? "#F15BB5" : "#05B2DC"};
    padding: 10px;
    margin:0 10px 0 10px;
    border-radius: 16px;

`;

const QuestionManipulationSpace = st.div`
padding: 10px;
width: 100%;
overflow: auto;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10px;

`;

const TransparentButton = st.div`
background: ${({ activeColor }) => activeColor ? "#05B2DC" : "transparent"};
cursor: pointer;
padding-left: 5px;
border-radius: 4px;
display: flex;
justify-content: left;
align-items: center;
color:#FDFDFF;
font-style: normal;
font-size: 15px;
font-weight: 200;
letter-spacing: 0em;
text-align: center;  

`;
const ContinueButton = st.div`
cursor: pointer;
padding-left: 5px;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
color:#FDFDFF;
font-style: normal;
font-size: 15px;
font-weight: 200;
line-height: 18px;
letter-spacing: 0em;
text-align: center;  
height:29px;
`;

const ContinueButtonSpace = st.div`
padding: 10px;
width: 100%;
`;

const ContinueOverlay = st.div`
position:absolute;
z-index:102;
top:0;
left:0;
height:100%;
width: 100%;
cursor: pointer;
background: transparent;
`;

const Empty = st.div`
height:0px;
`;

const StatisticsLoader = st.div`
position:absolute;
will-change: transform;
transition-duration: ${({ notYetClicked }) => notYetClicked ? "0s" : "0.5s"};
transition-property: width;
width:${({ notYetClicked }) => notYetClicked ? 0 : ({ widthOfStatLoader }) => widthOfStatLoader}%;
background:#001514;
height: 100%;
left:0;
opacity: 20%;
border-bottom-left-radius: 7px;
border-top-left-radius: 7px;


`;

