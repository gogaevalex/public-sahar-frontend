import React, { useState, useEffect } from 'react';
import st from '@emotion/styled'
import { ExitIcon } from '../icons/ExitIcon';

export const PopUp = ({ children, openedPopUp, setOpenedPopUp }) => {





    return openedPopUp ? <ParentOverlay>
        <FocusedWindow>
            <ExitButton onClick={() => {
                setOpenedPopUp(false)
            }}>
                <ExitIcon />
            </ExitButton>

            {children}

        </FocusedWindow>
    </ParentOverlay> : null
}

const ParentOverlay = st.div`
    height: 100%;
    position: relative;
  
    
`;

const FocusedWindow = st.div`
    margin-top:20%;
    position: absolute;
    z-index:5;
    background: #FDFDFF;
    box-shadow: 0px 0px 200px rgba(0, 0, 0, 0.55);
    border-radius: 28px;
    padding: 30px 15px 10px 15px;
    width: 80%;
    left: 10%;
    
`;

const ExitButton = st.div`
position:absolute;
right: 10px;    
top:10px;
    padding: 6px;
    cursor: pointer;
`;