import React, {useState} from 'react';
import st from '@emotion/styled'
import { MainLayout } from '../components/MainLayout';
import { CrossIcon } from '../icons/CrossIcon';
import { TickIcon } from '../icons/TickIcon';

const dataFriend = [
    {
        name: "Емеля Варонов",
        id: 5,
    },
    {
        name: "Шамиль Магомедов",
        id: 6,
    },
    {
        name: "Андрей Андреев",
        id: 7,
    },
    {
        name: "Валя Самедова",
        id: 8,
    },
    {
        name: "Ким Чин Ун",
        id: 9,
    },
    {
        name: "Сима Симский",
        id: 10,
    }
]

export const ChoiceFriend = () => {
    const [listFriend, setListFriend] = useState([]);

    const changeFriendList = (event, id) => {
        event.preventDefault();
        setListFriend((currentList) => {
            let activeFriendId = currentList.findIndex((item) => item === id);

            if (activeFriendId === -1) {
                currentList.push(id);
            } else {
                currentList.splice(activeFriendId, 1);
            }
            const result = [...currentList]
            return result;
        })
    }


    return (
        <MainLayout nextPage={"/choiceGender"} prevPage={"/choiceFamily"}>
            <Parent>
                <Header>
                    Добавь всех кого знаешь
                </Header>
                <BodyContent>
                    {dataFriend.map(({name, id}) => {
                        let activeFriend = listFriend.find((item) => item === id);
                        return (
                            <OneFriend key={id}>
                                <Text>
                                    {name}
                                </Text>
                                <ButtonSelect onClick={(event) => changeFriendList(event, id)} activeFriend={activeFriend}>
                                    {activeFriend ? <TickIcon/> : <CrossIcon/>}
                                </ButtonSelect>
                            </OneFriend>
                    )})}
                </BodyContent>
            </Parent>
        </MainLayout>
    )
}

const Parent = st.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px
`;

const Header = st.div`
    text-align: center;
    font-size: 40px;
    padding: 0 0 30px 0;
`;

const BodyContent = st.div`
    text-align: center;
    padding: 0 20px;
    width: 100%;
    max-height: 300px;
    overflow: auto;
`;

const OneFriend = st.div`
    border-bottom: 1px solid var(--tg-theme-text-color);
    display: flex;
    justify-content: space-between;
    padding: 14px 0;
    align-items: center;
`;

const Text = st.div`

`;

const ButtonSelect = st.div`
    background: ${({activeFriend}) => activeFriend ? "#05B2DC" : "#F15BB5"};
    cursor: pointer;
    padding: 6px 18px;
    border-radius: 4px;
`;

