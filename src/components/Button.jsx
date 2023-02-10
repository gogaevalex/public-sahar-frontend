import React from 'react';
import st from '@emotion/styled'

export const Button = (props) => {
    return (
        <Parent {...props} />
    );
};

const Parent = st.button `
    padding: 10px 15px;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    border: none;
    outline: none;
    cursor: pointer;
`;