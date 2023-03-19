
import React from 'react';
export const InputtedText = ({ text, maxNumberOfSymbols, }) => {

    return text.length >= maxNumberOfSymbols ?
        <p text={text}>
            {text.slice(0, maxNumberOfSymbols)}...
        </p>
        : <p>{text}</p>
}
