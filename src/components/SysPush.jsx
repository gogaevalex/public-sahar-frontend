import React, { useState, useEffect } from 'react';
import st from '@emotion/styled'

export const SysPush = ({ children, openedSystemPush, setOpenedSystemPush }) => {

    return openedSystemPush ?
        <BottomWindow openedSystemPush={openedSystemPush}>
            {children}
        </BottomWindow>
        : null
}

const ParentOverlay = st.div`
    height: 100%;
    position: relative;
    font-size: 14px;
line-height: 14px;
`;

const BottomWindow = st.div`
    position: absolute;
    bottom:50px;
    z-index:11;
    background: rgba(0, 21, 20, 0.85);
    color:#FDFDFF;
    border-radius: 22px;
    padding: 15px;
    transition-duration: 1s;
    opacity:${({ openedSystemPush }) => openedSystemPush ? `100%` : `0`};
    font-size: 14px;
    font-weight:300;
line-height: 18px;
width:70%;
`;

const ExitButton = st.div`
    position:absolute;
    right: 10px;    
    top:10px;
    padding: 6px;
    cursor: pointer;
`;