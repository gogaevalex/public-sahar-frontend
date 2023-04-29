import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSchoolList } from '../redux/actions';
import st from '@emotion/styled'
import { MainLayout } from '../components/MainLayout';
import SchoolPicture from '../pictures/SchoolPicture.png';
import { Input } from '../components/Input';
import { InputtedText } from '../components/InputtedText';
import { LoadingScreen } from '../components/LoadingScreen';
import { addSchool } from '../redux/actions';
const dataClass = [
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 5,
    },
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 6,
    },
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 7,
    },
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 8,
    },
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 9,
    },
    {
        title: "РФМЛИ-Лицей матема...",
        city: "Владикавказ",
        countStudent: 40,
        id: 10,
    },
]

export const ChoiceSchool = () => {
    const baseListSize = 5
    const listIncreaseStep = 10
    const [showRowsCommon, setShowRowsCommon] = useState(baseListSize)
    const [showRowsSchool, setShowRowsSchool] = useState(baseListSize)

    const [value, setValue] = useState("");
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getSchoolList())

    }, [])
    const [activeSchool, setActiveSchool] = useState(null);

    const { isLoad: isLoading, data: schools } = useSelector((state) => state.school);//сюда надо перекинуть инфу об общем балансе юзера

    console.log("школы", schools)
    console.log("Load", isLoading)


    console.log("act", activeSchool)
    console.log('schools', schools);
    if (!isLoading && schools) {
        const filteredDataClass = schools.filter((el) => {
            if (value === '') {
                return el;
            }
            else {
                const str = el.title;
                return str.toLowerCase().includes(value)
            }
        })
        return (

            <MainLayout nextPage={"/choiceName"} prevPage={"/choiceCity"} clickMainButton={() => dispatch(addSchool({ schoolId: '641dac18d574e2f8ce9d676d' }))}>
                <Parent>

                    <Header>
                        Выбери свою школу
                    </Header>
                    <BodyContent>
                        <SearchBar>
                            <Input value={value} onChange={setValue} placeholder="поиск по школам..." fontSize={20} />
                        </SearchBar>
                        {filteredDataClass.length ? (filteredDataClass.map(({ title, city, countStudent = 0, id }, index) => (
                            index < showRowsCommon && (
                                <OneClass key={id} onClick={() => setActiveSchool(id)} activeColor={activeSchool === id}>
                                    <LeftBlock>
                                        <Image src={SchoolPicture} alt="schoolPicture" />
                                        <Description>
                                            <Title><InputtedText text={title} maxNumberOfSymbols={25} /></Title>
                                            <City>{city}</City>
                                        </Description>
                                    </LeftBlock>
                                    <CountBlock>
                                        <CountNumber>
                                            {countStudent}
                                        </CountNumber>
                                        ЧЕЛ.
                                    </CountBlock>
                                </OneClass>)
                        ))) : <TextEmpty>-тут ничего нет-</TextEmpty>}
                        {filteredDataClass.length >= baseListSize && (
                            <BottomButtonSpace>
                                <ButtonMore onClick={() => setShowRowsCommon(Math.min(showRowsCommon + listIncreaseStep, filteredDataClass.length))} activeColor={showRowsCommon === filteredDataClass.length}>еще</ButtonMore>
                                <ButtonHide onClick={() => setShowRowsCommon(Math.max(showRowsCommon - listIncreaseStep, baseListSize))} activeColor={showRowsCommon === baseListSize}>скрыть</ButtonHide>
                            </BottomButtonSpace>
                        )}
                    </BodyContent>
                </Parent>
            </MainLayout>
        )
    } else {
        return (
            <LoadingScreen />
        )

    }
}

const Parent = st.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`;

const Header = st.div`
    text-align: center;
    font-size: 40px;
    padding: 0 0 30px 0;
    max-width: 250px;
`;
const TextEmpty = st.div`
height: 2em;
opacity:0.3;
font-size: 13px;
`;
const BodyContent = st.div`
    text-align: center;
    padding: 0 0 50px 0;
    width: 100%;
    overflow: auto;
`;
const ButtonMore = st.div`
cursor: pointer;
padding-right:10px;
text-decoration: underline;
color: rgba(15, 18, 23);
opacity: ${({ activeColor }) => activeColor ? "18%" : "40%"};
`;
const ButtonHide = st.div`
cursor: pointer;
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
const SearchBar = st.div`
    height:40px;
    display: flex;
    justify-content: left;
    text-size:12px;
    padding:0px 25px;
`;
const OneClass = st.div`
    background: ${({ activeColor }) => activeColor ? "#9B5DE559" : "none"};
    display: flex;
    justify-content: space-between;
    padding: 8px 24px;
    align-items: center;
    cursor: pointer;
`;

const LeftBlock = st.div`
    display: flex;
`;

const Image = st.img`
    margin: -4px 24px 4px 0;
`;

const Description = st.div`
    text-align: start;
    max-width: 200px
`;

const Title = st.div`
    font-size: 17px;
`;

const City = st.div`
    font-size: 15px;
    color: #8D8E90;
`;

const CountBlock = st.div`
    color: #8D8E90;
`;

const CountNumber = st.div`
    color: #F15BB5;
`;

