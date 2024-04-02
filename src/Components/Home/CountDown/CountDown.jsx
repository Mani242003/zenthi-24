import React, { useState, useEffect, useRef } from "react";
import "./CountDown.css";

const CountDown = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
   const [inputDate, setInputDate] = useState("2 April 2024");
  const [currentDate, setcurrentDate] = useState(inputDate);
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date('April 10, 2024 00:00:00').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days1 = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours2 = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days1);
        setHours(hours2);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    },1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  

  return (
    <div className="countdown-container" 
    data-aos="fade-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="500">
      <div className="countdown-values">
        <div className="countdown-value" style={{ color: "#EE1523" }}>
          <p className="big-text">{days}</p>
          <span className="days">days</span>
        </div>
        <div className="countdown-value" style={{ color: "#F2C108" }}>
          <p className="big-text">{hours}</p>
          <span className="days">hours</span>
        </div>
        <div className="countdown-value" style={{ color: "#0BA6F4" }}>
          <p className="big-text">{minutes}</p>
          <span className="days">mins</span>
        </div>
        <div className="countdown-value" style={{ color: "#7CB847" }}>
          <p className="big-text">{seconds}</p>
          <span className="days">seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
