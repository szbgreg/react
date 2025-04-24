import React, { useState, useEffect } from "react";

function Stopper() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Az idő frissítése, de csak akkor ha fut a mérés
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isRunning]);

  // Az idő megállítása és újraindítása
  const handleStartStop = () => {
    setIsRunning((prevRunning) => !prevRunning);
  };

  // Az idő nullázása
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const mseconds = Math.floor((time % 1000) / 10);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMseconds = String(mseconds).padStart(2, "0");

  return (
    <>
      <h2>Időmérés</h2>

      <p>
        <span>{formattedMinutes}</span>:
        <span>{formattedSeconds}</span>.
        <span>{formattedMseconds}</span>
      </p>
      <button onClick={handleReset}>Visszaállítás</button>
      <button onClick={handleStartStop}>
        {isRunning ? "Megállít" : "Indít"}
      </button>
    </>
  );
}

export default Stopper;
