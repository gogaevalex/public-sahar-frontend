import React, { useState } from 'react';
import st from '@emotion/styled';

export const Input = ({value = '', onChange, placeholder}) => {
    const [focus, setFocus] = useState(false)
    return (
        <Parent focus={focus}>
            <Field
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                type="text"
                onFocus={() => {setFocus(true)}}
                onBlur={() => {setFocus(false)}}
                focus={focus}
            />
        </Parent>
    )
}

const Parent = st.div`
    display: flex;
    width: 100%;
    max-width: 280px;
    border-bottom: 1px solid #FDFDFF;
    border-bottom: ${({focus}) => {
        focus ? "1px solid var(--tg-theme-text-color)" : "1px solid #FDFDFF"
	}};
    padding: 2px;
`;

const Field = st.input`
    background: var(--tg-theme-bg-color);
    border: none;
    width: 100%;
    color: var(--tg-theme-text-color);
    font-size: 20px;
    outline: none;
    text-align: center;
    ::placeholder {
        color: #FDFDFF";
        opacity: 1;
        text-align:center;
    }
`;