import { React, useState, useRef } from "react";

function StopWatch() {
  let timerId = useRef(null);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  // Start Timer
  const startTimer = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(timerId.current);
    let timerRef = setInterval(() => {
      setNow(Date.now());
    }, 100);

    timerId.current = timerRef;
  };

  //Stop Timer
  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  //Reset Timer
  const resetTimer = () => {
    clearInterval(timerId.current);
    setNow(null);
    setStartTime(null);
  };

  let secondsPassed = 0 + "0";
  let minutesPassed = "0" + "0";
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
    minutesPassed = Math.floor(secondsPassed / 60);
    secondsPassed = secondsPassed % 60;
    secondsPassed = secondsPassed.toFixed(3);
    // Formatting into two digits
    secondsPassed = secondsPassed < 10 ? "0" + secondsPassed : secondsPassed;
    minutesPassed = minutesPassed < 10 ? "0" + minutesPassed : minutesPassed;
  }
  return (
    <>
      <div className="root">
        <div className="stopwatch text-emerald-700   -mb-5">STOP-WATCH</div>
        <div className="stopwatch">
          {minutesPassed}:{secondsPassed}
        </div>

        <div>
          <button className="btn" onClick={startTimer}>
            Start
          </button>
          <button className="btn" onClick={stopTimer}>
            Stop
          </button>
          <button className="btn" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
