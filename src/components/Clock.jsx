import React, { useEffect, useState } from "react";
import "./css/clock.css";

export default function Clock() {
  const [isEventPassed, setIsEventPassed] = useState(false);
  const [timeRemaning, setTimeRemaning] = useState(["00", "00", "00", "00"]);

  useEffect(() => {
    setInterval(() => {
      setTimeRemaning(getRemaningTime());
    }, 1000);
  }, []);

  function getRemaningTime() {
    var countDownDate = new Date("Jan 5, 2022 21:00:00").getTime();
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = 6 - new Date().getDay(); //Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text
    if (distance < 0) {
      setIsEventPassed(true);
      return ["00", "00", "00", "00"];
    }
    // Display the result in the element with id="demo"
    return [
      days,
      (hours < 10 ? "0" : "") + hours,
      (minutes < 10 ? "0" : "") + minutes,
      (seconds < 10 ? "0" : "") + seconds,
    ];
  }

  return (
    <div className="clock-wrapper">
      <div className="clock-wrapper__clock">
        <h6>Time Remaining for Next Draw</h6>
        {isEventPassed === false ? (
          <h2>
            <span>{timeRemaning[0]}</span>d <span>{timeRemaning[1]}</span>h{" "}
            <span>{timeRemaning[2]}</span>m <span>{timeRemaning[3]}</span>s
          </h2>
        ) : (
          <h2>Event Passed</h2>
        )}
      </div>
    </div>
  );
}
