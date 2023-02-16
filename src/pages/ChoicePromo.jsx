import React, {useState} from 'react';
import st from '@emotion/styled'
import PromoPicture from '../pictures/PromoPicture.png';
import { MainLayout } from '../components/MainLayout';
import {Input} from '../components/Input';
import { CopyIcon } from '../icons/CopyIcon';

export const ChoicePromo = () => {
    const [value, setValue] = useState("");
    const [copySuccess, setCopySuccess] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText("DD23FG585");
        setCopySuccess(true);
    }
    const chageInput = (value) => {
        setValue(value.slice(0, 10).replace(/[^a-z0-9\s]/gi, '').toUpperCase());
    };
    

    return (
        <MainLayout nextPage={"/infoBot"} prevPage={"/choiceGender"}>
            <Parent>
                <Header>
                    Введи промокод от друга
                </Header>
                <BlockImage>
                    <img src={PromoPicture} alt="promoPicture"/>
                </BlockImage>
                <Input value={value} onChange={chageInput} placeholder="Например: DD33DD334" />
                <FooterContent>
                    <FooterText>
                    *и ты приглашай друзей со своим промокодом:
                    </FooterText>
                    <CopyBlock onClick={copyToClipboard}>
                    <CopyText copySuccess={copySuccess} >DD23FG585</CopyText>
                    <CopyButton >
                        <CopyIcon />
                    </CopyButton>
                    </CopyBlock>
                </FooterContent>
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

const BlockImage = st.div`
    margin: 0 0 24px 0;
`;

const FooterContent = st.div`
    color: #A4A5A7;
    margin: 30px auto;
`;

const FooterText = st.div`
    margin: 0 0 6px 0;
    text-align: center;

`;

const CopyBlock = st.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CopyText = st.span`
    color: ${({copySuccess}) => copySuccess ? "var(--tg-theme-text-color)" : "#A4A5A7"};
    font-size: 20px;
    margin-right: 4px;
`;

const CopyButton = st.div`

`;


