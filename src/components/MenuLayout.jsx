import React from 'react';
import st from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { MainIcon } from '../icons/MainIcon';

const menuList = [
    {
        path: '/newsline',
        title: 'Лента'
    },
    {
        path: '/news',
        title: 'Новые'
    },
    {
        path: '/main',
        title: ''
    },
    {
        path: '/people',
        title: 'Люди'
    },
    {
        path: '/profile',
        title: 'Профиль'
    },
]

export const MenuLayout = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Parent>
            <Menu>
                {menuList.map(({path, title}) => (
                    path === '/main' ? (
                        <BlockMainIcon onClick={() => navigate('/main')} active={location.pathname === '/main'}>
                            <MainIcon/>
                        </BlockMainIcon>
                    ) : (
                        <MenuItem onClick={() => navigate(path)} key={path} active={location.pathname === path}>
                            {title}
                            {location.pathname === path && <BottomLine />}
                        </MenuItem>
                    )
                ))}

            </Menu>
            {children}
        </Parent>
    );
};

const Parent = st.div`

`;

const Menu = st.div`
    display: flex;
    height: 64px;
    width: 100%;
    background: black;
    align-items: center;
`;

const BlockMainIcon = st.div`
    padding: 5px;
    opacity: ${({active}) => active ? 1 : 0.5};
    margin: 8px 0px 0 0px;
`;

const MenuItem = st.div`
    color: ${({active}) => active ? "white" : "#9B9B9B"};
    padding: 10px;
    position: relative;
`;

const BottomLine = st.div`
    width: 44px;
    background: white;
    height: 4px;
    border-radius: 6px 6px 0 0;
    position: absolute;
    bottom: -12px;
`;