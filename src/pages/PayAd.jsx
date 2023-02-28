import React, { useState, useEffect } from 'react';
import st from '@emotion/styled'
import { Timer } from '../components/Timer';
import { PopUp } from '../components/PopUp';
import CoinsStacked from '../pictures/CoinsStacked.png';
import CashTounge from '../pictures/CashTounge.png';
import Padlock from '../pictures/Padlock.png';
import Tickets from '../pictures/Tickets.png';
import { Frame, useMotionValue, useTransform, useAnimation } from "framer";


const style = {
    backgroundImage: "URL(https://img.icons8.com/color/452/GeeksforGeeks.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundColor: "#55ccff",
    boxShadow: "5px 10px 18px #888888",
    borderRadius: 10,
    height: 300,
};

export const PayAd = () => {
    // To move the card as the user drags the cursor
    const motionValue = useMotionValue(0);

    // To rotate the card as the card moves on drag
    const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);

    // To decrease opacity of the card when swiped
    // on dragging card to left(-200) or right(200)
    // opacity gradually changes to 0
    // and when the card is in center opacity = 1
    const opacityValue = useTransform(
        motionValue,
        [-200, -150, 0, 150, 200],
        [0, 1, 1, 1, 0]
    );

    // Framer animation hook
    const animControls = useAnimation();

    return (
        <div className="App">
            <Frame
                center
                // Card can be drag only on x-axis
                drag="x"
                x={motionValue}
                rotate={rotateValue}
                opacity={opacityValue}
                dragConstraints={{ left: -1000, right: 1000 }}
                style={style}
                onDragEnd={(event, info) => {
                    // If the card is dragged only upto 150 on x-axis
                    // bring it back to initial position
                    if (Math.abs(info.point.x) <= 150) {
                        animControls.start({ x: 0 });
                    } else {
                        // If card is dragged beyond 150
                        // make it disappear
                        // making use of ternary operator
                        animControls.start({ x: info.point.x < 0 ? -200 : 200 });
                    }
                }}
            />
        </div>
    );
};
