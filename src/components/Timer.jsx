import React, { useState, useEffect, useRef } from 'react'

export const Timer = ({ startTimeGame, finishTimeFunc }) => {
  const currentTime = new Date()
  const startTime = new Date(startTimeGame)

  const [count, setCount] = useState(20);//здесь нужно поставить 1800
  //startTime.getTime() - currentTime.getTime()) / 1000

  const [delay, setDelay] = useState(1000);//интервал 
  const [isRunning, setIsRunning] = useState(true);

  useInterval(
    () => {
      if (count < 2) {
        finishTimeFunc()
      } else {
        setCount(count - 1);
      }

    },
    count ? delay : null
  );

  return (
    <div>
      <p>{Math.floor(count / 60)}:{count % 60 <= 9 ? "0" : ""}{count % 60}</p>

    </div>
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Timer

