//react app for making countdown timer

import React, { useState } from "react";
import { useEffect } from "react";

const Countdown = () => {
  // set variable for day , hour , min and sec;
  let interval;
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  const [sec, setSec] = useState();

  // function to render countdown timer
  const showTime = () => {
    // set future date in milisecond
    const date = new Date(2025, 2, 18).getTime();

    interval = setTimeout(() => {
      const newdate = new Date().getTime();
      const validTime = date - newdate;

      if (validTime < 0) clearTimeout(interval.current);
      else {
        setDay(Math.floor(validTime / (24 * 60 * 60 * 1000))); //for day
        setHour(
          Math.floor((validTime % (24 * 60 * 60 * 60)) / (60 * 60 * 1000)) //for hour
        );
        setMin(Math.floor((validTime % (60 * 60 * 1000)) / (60 * 1000))); // for min

        setSec(Math.floor((validTime % (60 * 1000)) / 1000)); // for second
      }
    }, 1000);
  };

  // render every 1 second

  useEffect(() => {
    showTime();
  });
  return (
    <>
      <div>
        <h1>{day} day</h1>
        <h1>{hour} hour</h1>
        <h1>{min} minute</h1>
        <h1>{sec} second</h1>
      </div>
    </>
  );
};

export default Countdown;
