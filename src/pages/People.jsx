import React, { useState, useEffect } from 'react';
import st from '@emotion/styled'
import { Input } from '../components/Input';
import { InputtedText } from '../components/InputtedText';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend, getPeopleList } from '../redux/actions';
import { LoadingScreen } from '../components/LoadingScreen';
import { MenuLayout } from '../components/MenuLayout';
import { PopUp } from '../components/PopUp';


export const People = () => {
    const [activeClass, setActiveClass] = useState([]);
    const [value, setValue] = useState("");
    const dispatch = useDispatch()
    const { list: peopleList, isLoad: isLoadingPeople } = useSelector((state) => state.friend).peopleList;
    console.log('people', peopleList)
    useEffect(() => {
        dispatch(getPeopleList())
    }, [])


    const baseListSize = 15
    const listIncreaseStep = 10
    const [showRowsCommon, setShowRowsCommon] = useState(baseListSize)
    var content = <LoadingScreen />
    if (!isLoadingPeople && peopleList) {
        const filteredDataCommon = peopleList.result.filter((el) => {
            if (value === '') {
                return el;
            }
            else {
                if (el !== null) {
                    const str = el.firstName + " " + el.lastName;
                    return str.toLowerCase().includes(value.toLowerCase())
                }
            }
        })

        content = <Wrap>
            <Parent>
                <Rounder>
                    <SearchBar>
                        <Input value={value} onChange={setValue} placeholder="поиск..." fontSize={15} />
                    </SearchBar>
                    <BodyContent>
                        <TopText>люди из школы</TopText>
                        {filteredDataCommon.length ? (filteredDataCommon.map(({ common = 0, firstName, lastName, _id, source }, index) => (
                            index < showRowsCommon && (
                                <BorderWrapper key={_id}>
                                    <OneClass >
                                        <Text>
                                            <InputtedText text={`${firstName} ${lastName}`} maxNumberOfSymbols='18'></InputtedText>
                                        </Text>
                                        <ButtonWrap>
                                            {/* <GreyTextButton

                                            >блочить</GreyTextButton> */}
                                            <ButtonSelect onClick={() => {
                                                setActiveClass([...activeClass, _id]);
                                                dispatch(addFriend({
                                                    contactUserId: _id,
                                                    source: source
                                                }));

                                            }

                                            } >
                                                {activeClass.find((item) => item === _id) ? <RequestSent>друг добавлен</RequestSent> : <ButtonFriendship>дружить</ButtonFriendship>}
                                            </ButtonSelect>

                                        </ButtonWrap>

                                    </OneClass>
                                    {/* <GreyText>общих друзей: {common}</GreyText> */}
                                </BorderWrapper>)
                        ))
                        ) : <TextEmpty>-тут ничего нет-</TextEmpty>}
                        {filteredDataCommon.length >= baseListSize && (
                            <BottomButtonSpace>
                                <ButtonMore onClick={() => setShowRowsCommon(Math.min(showRowsCommon + listIncreaseStep, filteredDataCommon.length))} activeColor={showRowsCommon === filteredDataCommon.length}>еще</ButtonMore>
                                <ButtonHide onClick={() => setShowRowsCommon(Math.max(showRowsCommon - listIncreaseStep, baseListSize))} activeColor={showRowsCommon === baseListSize}>скрыть</ButtonHide>
                            </BottomButtonSpace>
                        )}
                    </BodyContent>
                    {/*
                    <BodyContent>
                        <TopText>из школы</TopText>
                        {filteredDataSchool.length ? (filteredDataSchool.map(({ firstName, lastName, id }, index) => (
                            index < showRowsSchool &&
                            <BorderWrapper key={id}>
                                <OneClass >
                                    <Text>
                                        {firstName} {lastName}
                                    </Text>

                                    <ButtonSelect onClick={() => {
                                        setActiveClass([...activeClass, id]);
                                        dispatch(addFriend({ userId: '63e79aea38454378d450b987' }));
                                    }} >
                                        {activeClass.find((item) => item === id) ? <RequestSent>друг добавлен</RequestSent> : <ButtonFriendship>дружить</ButtonFriendship>}
                                    </ButtonSelect>
                                </OneClass>
                            </BorderWrapper>
                        ))
                        ) : <TextEmpty>-тут ничего нет-</TextEmpty>}
                        <BottomButtonSpace>
                            <ButtonMore onClick={() => setShowRowsSchool(Math.min(showRowsSchool + listIncreaseStep, filteredDataSchool.length))} activeColor={showRowsSchool === filteredDataSchool.length}>еще</ButtonMore>
                            <ButtonHide onClick={() => setShowRowsSchool(Math.max(showRowsSchool - listIncreaseStep, baseListSize))} activeColor={showRowsSchool === baseListSize}>скрыть</ButtonHide>
                        </BottomButtonSpace>
                    </BodyContent>
                    */}
                </Rounder>
            </Parent>

        </Wrap>

    } return (<Wrap>
        <MenuLayout>{content}</MenuLayout>
    </Wrap>)
}
const Wrap = st.div`
    background: #001514;
    height: 100%;
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
const Rounder = st.div`
    border-radius:16px;
    padding:0 20px;
    width:100%;
  
`;

const BodyContent = st.div`
    text-align: center;
 
`;
const ButtonWrap = st.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
`;
const GreyText = st.text`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgba(15, 18, 23, 0.25);

`;
const GreyTextButton = st.text`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgba(15, 18, 23, 0.25);
    margin-right: 4px;
    cursor: pointer;
`;
const SearchBar = st.div`
    height:40px;
    display: flex;
    justify-content: left;
    text-size:12px;
    padding:0px 5px;
`;
const TextEmpty = st.div`
    height: 2em;
    opacity:0.3;
    font-size: 13px;
`;
const OneClass = st.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    align-items: center;
    margin:4px 0 4px 0;
    width:100%;
`;
const BorderWrapper = st.div`
    border-bottom: 1px solid rgba(15, 18, 23, 0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding:5px;
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

const RequestSent = st.div`
    color: rgba(15, 18, 23, 0.25); 
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;

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