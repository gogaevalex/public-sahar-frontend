import React, { useState, useEffect } from 'react';
import st from '@emotion/styled'
import { ReshuffleIcon } from '../icons/ReshuffleIcon';
import { SkipIcon } from '../icons/SkipIcon';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionList } from '../redux/actions';
import { LoadingScreen } from '../components/LoadingScreen';

const currentUserId = 345252
const userGender = "male" // пол юзера
const noncePackage = 2 /* nonce - это уникальное число (как counter), 
показывает сколько раз юзер играл, следовательно мы подбираем ему нужный Package с 
вопросами в зависимости от этого числа*/


const isSchoolQuestion = "true"
/*в бд есть вопросы для школьников и 
вопросы для взрослых (университетские)*/

// const questionsForStudents = [
//     {

//         text: "Мы бы отлично смотрелись вместе ",
//         toWhomGender: "male",
//         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
//         questionId: 5,
//         students: [
//             {

//                 name: "Иван Бояркин ",
//                 wins: 3,
//                 userId: 53,
//             },
//             {

//                 name: "Диван Покрывалкин ",
//                 wins: 0,
//                 userId: 54,
//             },
//             {

//                 name: "Сарик Хяркин ",
//                 wins: 0,
//                 userId: 55,
//             },
//             {

//                 name: "Мага Медов ",
//                 wins: 3,
//                 userId: 56,
//             },
//             {

//                 name: "Сим Саловим ",
//                 wins: 4,
//                 userId: 57,
//             },
//             {

//                 name: "Опять Понеделкина ",
//                 wins: 7,
//                 userId: 58,
//             },
//             {

//                 name: "Сизим Открывашкина ",
//                 wins: 1,
//                 userId: 59,
//             },
//             {

//                 name: "Иваныч Иванов ",
//                 wins: 0,
//                 userId: 60,
//             }
//         ]
//     },

//     {
//         text: "Будущий знаменитый дизайнер",
//         toWhomGender: "female",
//         imageLink: "https://i.ibb.co/B4vcRp8/image-84.png",
//         questionId: 8,
//         students: [
//             {

//                 name: "Сарика Хяркина ",
//                 wins: 6,
//                 userId: 61,
//             },
//             {

//                 name: "Магася Медова ",
//                 wins: 2,
//                 userId: 62,
//             },
//             {

//                 name: "Симася Саловимич ",
//                 wins: 0,
//                 userId: 622,
//             },
//             {

//                 name: "Опятька Понеделкина ",
//                 wins: 3,
//                 userId: 64,
//             },
//             {

//                 name: "Сизимка Открывашкина ",
//                 wins: 2,
//                 userId: 65,
//             },
//             {

//                 name: "Иванка Бояркина ",
//                 wins: 0,
//                 userId: 66,
//             },
//             {

//                 name: "Дина Заврина ",
//                 wins: 5,
//                 userId: 67,
//             },
//             {

//                 name: "Аля Ляля ",
//                 wins: 0,
//                 userId: 68,
//             }
//         ]
//     },
//     {
//         text: "Всегда держит свое слово",
//         toWhomGender: "male",
//         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
//         questionId: 14,
//         students: [
//             {

//                 name: "Иван Бояркин ",
//                 wins: 3,
//                 userId: 53,
//             },
//             {

//                 name: "Диван Покрывалкин ",
//                 wins: 0,
//                 userId: 54,
//             },
//             {

//                 name: "Сарик Хяркин ",
//                 wins: 0,
//                 userId: 55,
//             },
//             {

//                 name: "Мага Медов ",
//                 wins: 3,
//                 userId: 56,
//             },
//             {

//                 name: "Сим Саловим ",
//                 wins: 4,
//                 userId: 57,
//             },
//             {

//                 name: "Опять Понеделкина ",
//                 wins: 7,
//                 userId: 58,
//             },
//             {

//                 name: "Сизим Открывашкин ",
//                 wins: 1,
//                 userId: 59,
//             },
//             {

//                 name: "Иваныч Иванов ",
//                 wins: 0,
//                 userId: 60,
//             }
//         ]
//     },
//     {
//         text: "Лучший друг из всех",
//         toWhomGender: "male",
//         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
//         questionId: 15,
//         students: [
//             {

//                 name: "Иван Бояркин ",
//                 wins: 3,
//                 userId: 53,
//             },
//             {

//                 name: "Диван Покрывалкин ",
//                 wins: 0,
//                 userId: 54,
//             },
//             {

//                 name: "Сарик Хяркин ",
//                 wins: 0,
//                 userId: 55,
//             },
//             {

//                 name: "Мага Медов ",
//                 wins: 3,
//                 userId: 56,
//             },
//             {

//                 name: "Сим Саловим ",
//                 wins: 4,
//                 userId: 57,
//             },
//             {

//                 name: "Опять Понеделкина ",
//                 wins: 7,
//                 userId: 58,
//             },
//             {

//                 name: "Сизим Открывашкин ",
//                 wins: 1,
//                 userId: 59,
//             },
//             {

//                 name: "Иваныч Иванов ",
//                 wins: 0,
//                 userId: 60,
//             }
//         ]
//     },
//     {
//         text: "Пожалуйста, брось своего парня  ",
//         toWhomGender: "female",
//         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
//         questionId: 9,
//         students: [
//             {

//                 name: "Сарика Хяркина ",
//                 wins: 6,
//                 userId: 61,
//             },
//             {

//                 name: "Магася Медова ",
//                 wins: 2,
//                 userId: 62,
//             },
//             {

//                 name: "Симася Саловимич ",
//                 wins: 0,
//                 userId: 622,
//             },
//             {

//                 name: "Опятька Понеделкина ",
//                 wins: 3,
//                 userId: 64,
//             },
//             {

//                 name: "Сизимка Открывашкина ",
//                 wins: 2,
//                 userId: 65,
//             },
//             {

//                 name: "Иванка Бояркина ",
//                 wins: 0,
//                 userId: 66,
//             },
//             {

//                 name: "Дина Заврина ",
//                 wins: 5,
//                 userId: 67,
//             },
//             {

//                 name: "Аля Ляля ",
//                 wins: 0,
//                 userId: 68,
//             }]
//     },
//     {
//         text: "Не догадывается, насколько она потрясающая",
//         toWhomGender: "female",
//         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
//         questionId: 10,
//         students: [
//             {

//                 name: "Сарика Хяркина ",
//                 wins: 6,
//                 userId: 61,
//             },
//             {

//                 name: "Магася Медова ",
//                 wins: 2,
//                 userId: 62,
//             },
//             {

//                 name: "Симася Саловимич ",
//                 wins: 0,
//                 userId: 622,
//             },
//             {

//                 name: "Опятька Понеделкина ",
//                 wins: 3,
//                 userId: 64,
//             },
//             {

//                 name: "Сизимка Открывашкина ",
//                 wins: 2,
//                 userId: 65,
//             },
//             {

//                 name: "Иванка Бояркина ",
//                 wins: 0,
//                 userId: 66,
//             },
//             {

//                 name: "Дина Заврина ",
//                 wins: 5,
//                 userId: 67,
//             },
//             {

//                 name: "Аля Ляля ",
//                 wins: 0,
//                 userId: 68,
//             }]
//     },
//     {

//         text: "Всегда прикроет меня в любой ситуации",
//         toWhomGender: "male",
//         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
//         questionId: 11,
//         students: [
//             {

//                 name: "Иван Бояркин ",
//                 wins: 3,
//                 userId: 53,
//             },
//             {

//                 name: "Диван Покрывалкин ",
//                 wins: 0,
//                 userId: 54,
//             },
//             {

//                 name: "Сарик Хяркин ",
//                 wins: 0,
//                 userId: 55,
//             },
//             {

//                 name: "Мага Медов ",
//                 wins: 3,
//                 userId: 56,
//             },
//             {

//                 name: "Сим Саловим ",
//                 wins: 4,
//                 userId: 57,
//             },
//             {

//                 name: "Опять Понеделкина ",
//                 wins: 7,
//                 userId: 58,
//             },
//             {

//                 name: "Сизим Открывашкин ",
//                 wins: 1,
//                 userId: 59,
//             },
//             {

//                 name: "Иваныч Иванов ",
//                 wins: 0,
//                 userId: 60,
//             }
//         ]
//     },
//     {
//         text: "Всегда в курсе всех событий ",
//         toWhomGender: "male",
//         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
//         questionId: 12,
//         students: [
//             {

//                 name: "Иван Бояркин ",
//                 wins: 3,
//                 userId: 53,
//             },
//             {

//                 name: "Диван Покрывалкин ",
//                 wins: 0,
//                 userId: 54,
//             },
//             {

//                 name: "Сарик Хяркин ",
//                 wins: 0,
//                 userId: 55,
//             },
//             {

//                 name: "Мага Медов ",
//                 wins: 3,
//                 userId: 56,
//             },
//             {

//                 name: "Сим Саловим ",
//                 wins: 4,
//                 userId: 57,
//             },
//             {

//                 name: "Опять Понеделкина ",
//                 wins: 7,
//                 userId: 58,
//             },
//             {

//                 name: "Сизим Открывашкин ",
//                 wins: 1,
//                 userId: 59,
//             },
//             {

//                 name: "Иваныч Иванов ",
//                 wins: 0,
//                 userId: 60,
//             }
//         ]
//     },
//     {
//         text: "Будущий Илон Маск ",
//         toWhomGender: "male",
//         imageLink: "https://i.ibb.co/B4vcRp8/image-84.png",
//         questionId: 13,
//         students: [
//             {

//                 name: "Иван Бояркин ",
//                 wins: 3,
//                 userId: 53,
//             },
//             {

//                 name: "Диван Покрывалкин ",
//                 wins: 0,
//                 userId: 54,
//             },
//             {

//                 name: "Сарик Хяркин ",
//                 wins: 0,
//                 userId: 55,
//             },
//             {

//                 name: "Мага Медов ",
//                 wins: 3,
//                 userId: 56,
//             },
//             {

//                 name: "Сим Саловим ",
//                 wins: 4,
//                 userId: 57,
//             },
//             {

//                 name: "Опять Понеделкина ",
//                 wins: 7,
//                 userId: 58,
//             },
//             {

//                 name: "Сизим Открывашкин ",
//                 wins: 1,
//                 userId: 59,
//             },
//             {

//                 name: "Иваныч Иванов ",
//                 wins: 0,
//                 userId: 60,
//             }
//         ]
//     },
//     {
//         text: "Мисс популярность",
//         toWhomGender: "female",
//         imageLink: "https://i.ibb.co/KrvWTcD/image-79-1.png",
//         questionId: 6,
//         students: [
//             {

//                 name: "Сарика Хяркина ",
//                 wins: 6,
//                 userId: 61,
//             },
//             {

//                 name: "Магася Медова ",
//                 wins: 2,
//                 userId: 62,
//             },
//             {

//                 name: "Симася Саловимич ",
//                 wins: 0,
//                 userId: 622,
//             },
//             {

//                 name: "Опятька Понеделкина ",
//                 wins: 3,
//                 userId: 64,
//             },
//             {

//                 name: "Сизимка Открывашкина ",
//                 wins: 2,
//                 userId: 65,
//             },
//             {

//                 name: "Иванка Бояркина ",
//                 wins: 0,
//                 userId: 66,
//             },
//             {

//                 name: "Дина Заврина ",
//                 wins: 5,
//                 userId: 67,
//             },
//             {

//                 name: "Аля Ляля ",
//                 wins: 0,
//                 userId: 68,
//             }]
//     },
//     {
//         text: "Ты даже не догадываешься, как тобой восхищаются ",
//         toWhomGender: "female",
//         imageLink: "https://i.ibb.co/BBtPpyC/image-85.png",
//         questionId: 7,
//         students: [
//             {

//                 name: "Сарика Хяркина ",
//                 wins: 6,
//                 userId: 61,
//             },
//             {

//                 name: "Магася Медова ",
//                 wins: 2,
//                 userId: 62,
//             },
//             {

//                 name: "Симася Саловимич ",
//                 wins: 0,
//                 userId: 622,
//             },
//             {

//                 name: "Опятька Понеделкина ",
//                 wins: 3,
//                 userId: 64,
//             },
//             {

//                 name: "Сизимка Открывашкина ",
//                 wins: 2,
//                 userId: 65,
//             },
//             {

//                 name: "Иванка Бояркина ",
//                 wins: 0,
//                 userId: 66,
//             },
//             {

//                 name: "Дина Заврина ",
//                 wins: 5,
//                 userId: 67,
//             },
//             {

//                 name: "Аля Ляля ",
//                 wins: 0,
//                 userId: 68,
//             }]
//     },
//     {
//         text: "Лучший второй пилот ",
//         toWhomGender: "male",
//         imageLink: "https://i.ibb.co/Bn9p1Gv/image-78-1.png",
//         questionId: 16,
//         students: [
//             {

//                 name: "Иван Бояркин ",
//                 wins: 3,
//                 userId: 53,
//             },
//             {

//                 name: "Диван Покрывалкин ",
//                 wins: 0,
//                 userId: 54,
//             },
//             {

//                 name: "Сарик Хяркин ",
//                 wins: 0,
//                 userId: 55,
//             },
//             {

//                 name: "Мага Медов ",
//                 wins: 3,
//                 userId: 56,
//             },
//             {

//                 name: "Сим Саловим ",
//                 wins: 4,
//                 userId: 57,
//             },
//             {

//                 name: "Опять Понеделкина ",
//                 wins: 7,
//                 userId: 58,
//             },
//             {

//                 name: "Сизим Открывашкин ",
//                 wins: 1,
//                 userId: 59,
//             },
//             {

//                 name: "Иваныч Иванов ",
//                 wins: 0,
//                 userId: 60,
//             }
//         ]
//     }
// ]


export const Questions = () => {

    const dispatch = useDispatch()
    const { isLoad: isLoading, data: questionsForStudents } = useSelector((state) => state.question);
    const widthOfStatLoaderFunc = ({ justAnswered, userId, wins }) => {
        const isAddOne = justAnswered === userId ? 1 : 0
        return Math.min((1 + wins + isAddOne) * 10, 80)
    }

    useEffect(() => {
        dispatch(getQuestionList())

    }, [])
    // console.log(questions)//баг

    const navigate = useNavigate()
    const [totalQuestions, setTotalQuestions] = useState(12);
    const [questionsLeft, setQuestionsLeft] = useState(11);
    const [questionNumberN, setQuestionNumberN] = useState(1);
    const [justAnswered, setJustAnswered] = useState(null);
    const [isReshuffled, setIsReshuffled] = useState("fasle");
    const [dataAnswersRecorded, setDataAnswersRecorded] = useState([])
    /*вопросы мальчик/девочка чередуются рандомно (приходят рандомно с бэка), стейт наверху
    показывают сколько вопросов осталось*/

    const [widthOfStatLoader, setWidthOfStatLoader] = useState(0)

    if (!isLoading && questionsForStudents) {

        const currentQuestionGender = questionsForStudents[questionsLeft].toWhomGender;
        //хранит пол (о ком задается текущий вопрос)
        const dataClasssStudentsRandom = questionsForStudents[questionsLeft].students
        const dataClassStudentsFirst = dataClasssStudentsRandom.slice(0, 4)//берем 4-х студентов 
        const dataClassStudentsSecond = dataClasssStudentsRandom.slice(4, 8)/*берем других 4-х студентов, 
        если предыдущие не понравились юзеру*/
        const dataClassStudents = isReshuffled === "true" ? dataClassStudentsSecond : dataClassStudentsFirst
        const widthOfLoader = Math.ceil((totalQuestions - questionsLeft) * (100 / totalQuestions));

        const coinsEarned = questionsLeft === 0 ? Math.round(Math.random() * totalQuestions * 2) + totalQuestions : 0
        console.log("real_data_before", questionsForStudents)
        return (
            <Background currentQuestionGender={currentQuestionGender}>
                {justAnswered ? (
                    <ContinueOverlay
                        onClick={() => {
                            setQuestionsLeft(questionsLeft - 1);
                            setQuestionNumberN(questionNumberN + 1);
                            setJustAnswered(null);
                            setIsReshuffled("false");
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
                            <TheQuestionImage src={questionsForStudents[questionsLeft].imageLink} />
                        </TheQuestionImageSpace>
                        <TheQuestionText >
                            {questionsForStudents[questionsLeft].text}
                        </TheQuestionText>
                    </TheQuestionSpace>
                    <NameChoice>
                        {dataClassStudents.map(({ name, userId, wins }) => (
                            <ButtonName key={userId}
                                widthOfStatLoader={widthOfStatLoader}
                                questionData={questionsForStudents[questionsLeft]}
                                onClick={() => {
                                    setJustAnswered(userId);
                                    setDataAnswersRecorded([...dataAnswersRecorded, { aboutUserId: userId, questionId: questionsForStudents[questionsLeft].questionId }]);

                                }}
                                activeColor={justAnswered === userId}
                                notYetClicked={!justAnswered}
                            >
                                <StatisticsLoader
                                    wins={dataClassStudents.wins}
                                    widthOfStatLoader={widthOfStatLoaderFunc({ justAnswered, userId, wins })}
                                    notYetClicked={!justAnswered}
                                >
                                </StatisticsLoader>
                                <Text>
                                    {name}
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
                                opacity: isReshuffled === "true" ? "50%" : "100%",
                                pointerEvents: isReshuffled === "true" ? "none" : "all"
                            }}
                            onClick={() => setIsReshuffled("true")}>
                            <ReshuffleIcon />сменить имена
                        </TransparentButton>
                        <TransparentButton onClick={() => {
                            setTotalQuestions(totalQuestions - 1);
                            setQuestionsLeft(questionsLeft - 1);
                            setIsReshuffled("false");
                        }}>
                            <SkipIcon />пропустить
                        </TransparentButton>
                    </QuestionManipulationSpace>
                    }
                </Parent>
            </Background >

        )
    } else
        return <LoadingScreen />
}

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

