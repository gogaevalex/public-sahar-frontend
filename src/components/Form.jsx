import React, {useCallback, useEffect, useState} from 'react';
import st from '@emotion/styled'
import {useTelegram} from "../hooks/useTelegram";
import {Select} from './Select';

export const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <Parent className={"form"}>
            <Title>Введите ваши данные</Title>
            <TextField
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <TextField
                className={'input'}
                type="text"
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />
            <Select data={[
						{
							text: 'Физ. лицо',
						},
						{
							text: 'Юр. лицо',
						}
					]}
					onChange={onChangeSubject}
                    active={subject}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </Parent>
    );
};

const Parent = st.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
`;

const Title = st.h3`
`;

const TextField = st.input`
    width: 100%;
    padding: 10px;
    margin-top: 15px;
`;
