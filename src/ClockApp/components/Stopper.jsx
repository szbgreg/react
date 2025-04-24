import React, { useState, useEffect } from "react";
import Button from "./Button";
import LapList from "./LapList";
import "./Stopper.css";

function Stopper() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

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
    setLaps([]);
  };

  // Köridő rögzítése
  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
  };

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const mseconds = Math.floor((time % 1000) / 10);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMseconds = String(mseconds).padStart(2, "0");

  return (
    <div className="stopper-container">
      <div className="container">
        <h2>Időmérés</h2>

        <p className="time-display">
          <span className="digit">{formattedMinutes}</span>:
          <span className="digit">{formattedSeconds}</span>.
          <span className="digit">{formattedMseconds}</span>
        </p>

        <Button
          className="button"
          onClick={isRunning ? handleLap : handleReset}
        >
          {isRunning ? "Köridő" : "Visszaállítás"}
        </Button>

        <Button
          className={isRunning ? "button button-red" : "button button-green"}
          onClick={handleStartStop}
        >
          {isRunning ? "Megállít" : "Indít"}
        </Button>
      </div>

      {laps.length > 0 && <LapList laps={laps} />}
    </div>
  );
}

export default Stopper;
