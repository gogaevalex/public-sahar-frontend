import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSchoolList } from '../redux/actions';
import st from '@emotion/styled'
import { MainLayout } from '../components/MainLayout';
import SchoolPicture from '../pictures/SchoolPicture.png';
import { Input } from '../components/Input';
import { InputtedText } from '../components/InputtedText';
import { LoadingScreen } from '../components/LoadingScreen';

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

// const shortText = (text) => {
//     if (text.length > 25) {
//         return `${text.slice(0, 25)}...`;
//     } else return text;
// }


export const ChoiceSchool = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getSchoolList())

    }, [])
    const [activeSchool, setActiveSchool] = useState(null);

    const { isLoad: isLoading, data: schools } = useSelector((state) => state.school);//сюда надо перекинуть инфу об общем балансе юзера

    console.log("школы", schools)
    console.log("Load", isLoading)

    // const filteredDataClass = schools.filter((el) => {
    //     if (value === '') {
    //         return el;
    //     }
    //     else {
    //         const str = el.title;
    //         return str.toLowerCase().includes(value)
    //     }
    // })

    console.log('schools', schools);
    if (!isLoading && schools) {
        return (

            <MainLayout nextPage={"/choiceName"} prevPage={"/choiceCity"}>
                <Parent>

                    <Header>
                        Выбери свою школу
                    </Header>
                    <BodyContent>
                        <SearchBar>
                            <Input value={value} onChange={setValue} placeholder="поиск по школам..." fontSize={20} />
                        </SearchBar>
                        {schools.map(({ title, city, countStudent = 0, id }) => (
                            <OneClass key={id} onClick={() => setActiveSchool(id)} activeColor={activeSchool === id}>
                                <LeftBlock>
                                    <Image src={SchoolPicture} alt="schoolPicture" />
                                    <Description>
                                        <Title>{title}</Title>
                                        <City>{city}</City>
                                    </Description>
                                </LeftBlock>
                                <CountBlock>
                                    <CountNumber>
                                        {countStudent}
                                    </CountNumber>
                                    ЧЕЛ.
                                </CountBlock>
                            </OneClass>
                        ))}
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

const BodyContent = st.div`
    text-align: center;
    padding: 0 0 50px 0;
    width: 100%;
    overflow: auto;
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

