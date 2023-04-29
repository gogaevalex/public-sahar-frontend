import React, { useState, useEffect } from 'react';
import st from '@emotion/styled'
import { useNavigate } from 'react-router-dom';
import { WhiteExitIcon } from '../icons/WhiteExitIcon';
import { SelectActiveIcon } from '../icons/SelectActiveIcon';
import { SelectInactiveIcon } from '../icons/SelectInactiveIcon';
import { Input } from '../components/Input';
import { InputtedText } from '../components/InputtedText';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendList } from '../redux/actions';
import { LoadingScreen } from '../components/LoadingScreen';
import $api from '../utils/api';


export const ShopCrushOption = () => {
    const buyCertain = async (data) => {
        try {
            await $api.post('/buy/certain', { data });
        } catch (error) {
            console.log(error)
        }
    }

    const [activeClass, setActiveClass] = useState(null);
    const [value, setValue] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { list: dataClass, isLoad: isLoadingFriends } = useSelector((state) => state.friend).friendList;

    useEffect(() => {
        dispatch(getFriendList())
    }, [])
    //create a new array by filtering the original array

    if (!isLoadingFriends && dataClass) {
        console.log('people', dataClass)
        const filteredData = dataClass.contactList.filter((el) => {
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
        return (


            <Parent>
                <Rounder>
                    <Header>
                        <ConfirmButton
                            activeClass={activeClass}
                            onClick={() => {
                                console.log("buy", activeClass)
                                buyCertain({ contactUserId: activeClass })
                                navigate('/shop');
                            }}
                        >Подтвердить</ConfirmButton>
                        <ExitButton onClick={() => navigate('/shop')/*bug*/} >
                            <WhiteExitIcon ></WhiteExitIcon>
                        </ExitButton>
                        <TopText>Выбери друга у которого хочешь появиться в опросе</TopText>

                    </Header>
                    {/*со следующим обновлением будет добавлен поиск по друзьям*/}
                    <SearchBar>
                        <Input value={value} onChange={setValue} placeholder="поиск..." />
                    </SearchBar>
                    <BodyContent>
                        {filteredData.map(({ firstName, lastName, _id, contactUserId }) => (
                            <OneClass key={_id}>
                                <Text>
                                    {firstName} {lastName}
                                </Text>
                                <ButtonSelect onClick={() => setActiveClass(contactUserId)} activeColor={activeClass === contactUserId}>
                                    {activeClass === contactUserId ? <SelectActiveIcon /> : <SelectInactiveIcon />}
                                </ButtonSelect>
                            </OneClass>
                        ))}
                    </BodyContent>
                </Rounder>
            </Parent>

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
    background: #FDFDFF;
`;
const Rounder = st.div`
border-radius:16px;
`;
const Header = st.div`
    position:relative;
    text-align: center;
    padding: 0 0 30px 0;
    background: #FF670E;
    padding:70px 20px 20px 20px;
    border-top-left-radius:16px;
    border-top-right-radius:16px;

`;

const BodyContent = st.div`
    text-align: center;
    padding:0 20px;
    width: 100%;
    overflow: auto;
`;
const SearchBar = st.div`
height:40px;
display: flex;
justify-content: left;
text-size:12px;
padding:0px 20px;
`;
const OneClass = st.div`
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    align-items: center;
`;

const TopText = st.div`
font-weight: 500;
font-size: 17px;
line-height: 20px;
text-align: center;

color: #FDFDFF;
`;
const Text = st.div`
`;
const ButtonSelect = st.div`
    cursor: pointer;
    padding: 6px 18px;
 
`;

const ExitButton = st.div`
position:absolute;
left: 20px;    
top:20px;
cursor: pointer;
z-index:10;
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