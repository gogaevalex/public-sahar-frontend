import React from 'react';
import st from '@emotion/styled';
import {Button} from "./Button";

export const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <Parent >
            <Picture />
            <Title >{product.title}</Title>
            <Description >{product.description}</Description>
            <Price >
                <span>Стоимость: <b>{product.price}</b></span>
            </Price>
            <Button onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </Parent>
    );
};

const Parent = st.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--tg-theme-button-color);
    padding: 15px;
    width: 170px;
`;

const Picture = st.img`
width: 100%;
background: lightgray;
height: 100px;
margin: 0 auto;
background: var(--tg-theme-button-color);
`;

const Title = st.div`

`;

const Description = st.div`
font-size: 0.8em;

`;

const Price = st.div`

`;
