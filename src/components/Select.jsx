import React, {useState}  from 'react';
import st from '@emotion/styled';
import { keyframes } from '@emotion/react'
import pt from 'prop-types';

export const Select = ({
    data,
    onChange,
    margin,
    active,
    fontSize,
    isFullWidth,
}) => {
    const [openList, setOpen] = useState(false);
    return (
        <Parent 
            isFullWidth={isFullWidth}
            fontSize={fontSize}
            margin={margin}
        >
            <MainItem onClick={() => setOpen(!openList)}>
                {active}
                <Triangle/>
            </MainItem>
            {openList && (
                <List>
                    {data.map((currentItem) => (
                        <Item 
                            key={currentItem.text}
                            onClick={() => {
                                setOpen(!openList)
                                onChange(currentItem);
                            }}
                        >
                            {currentItem.text}
                        </Item>
                    ))}
                </List>
            )}
        </Parent>
    )
};

Select.propTypes = {
    /**
	 * Данные для полей Select
	 */
	data: pt.array,
    /**
	 * Данные для полей Select
	 */
    active: pt.string.isRequired,
    /**
	 * placeholderьное для Select
	 */
    placeholder: pt.string,
	/**
	 * Название Select
	 */
	name: pt.string.isRequired,
	/**
	 * Функция которая изменяет значение Select
	 */
	onChange: pt.func.isRequired,
	/**
	 * ширина
	 */
     isFullWidth: pt.bool,
	/**
	 * Размер шрифта
	 */
	fontSize: pt.string,
	/**
	 * margin всего компонента
	 */
	margin: pt.string,
};

Select.defaultValue = {
    placeholder: null,
    isFullWidth: false,
    fontSize: 'body1',
    margin: '0',
};

const show = keyframes`
    from {
        transform: translate(0, 10px);
    }
    to {
        transform: rotate(0, 0);
    }
`;

const Parent = st.div`
    width: 220px;
    ${({isFullWidth}) => isFullWidth && `
        width: 100%;
    `};
    margin: ${({margin}) => margin};
    position: relative;
    font-size: ${({theme, fontSize}) => theme.fontSize[fontSize]};
`;

const MainItem = st.div`
    position: relative;
    display: flex;
    border-radius: 100px;
    cursor: pointer;
    justify-content: space-between;
    padding: 10px 18px;
    margin: 0 0 8px 0;
    background: ${({theme}) => theme.color.dark.bg};
    
    &:hover {
        transition: all 0.1s;
        background: ${({theme}) => theme.color.dark.bgHover};
    }
`;

const Triangle = st.div`
    position: absolute;
    border: 5px solid transparent;
    border-top: ${({theme}) => `7px solid ${theme.color.dark.main}`};
    right: 18px;
    top: calc(50% - 3px);
`;

const List = st.div`
    background: ${({theme}) => theme.color.white};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    position: absolute;
    top: calc(100% + 10px);
    width: 100%;
    max-height: 150px;
    overflow: scroll;
    background: ${({theme}) => theme.color.white};
    animation: ${show} 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const Item = st.div`
    cursor: pointer;
    padding: 5px 18px;
    transition: all 0.1s;
    &:hover {
        background: ${({theme}) => theme.color.dark.bg};
    }
`;