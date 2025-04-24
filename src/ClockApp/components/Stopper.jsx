import React, { useState, useEffect } from "react";
import Button from "./Button";

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
    <>
      <h2>Időmérés</h2>

      <p>
        <span>{formattedMinutes}</span>:<span>{formattedSeconds}</span>.
        <span>{formattedMseconds}</span>
      </p>

      <Button className="button" onClick={isRunning ? handleLap : handleReset}>
        {isRunning ? "Köridő" : "Visszaállítás"}
      </Button>

      <Button
        className={isRunning ? "button button-red" : "button button-green"}
        onClick={handleStartStop}
      >
        {isRunning ? "Megállít" : "Indít"}
      </Button>

      {laps.length > 0 && (
        <div>
          <h3>Köridők:</h3>
          <ul>
            {laps.map((lap, index) => {
              const lapMinutes = String(Math.floor(lap / 60000)).padStart(
                2,
                "0"
              );
              const lapSeconds = String(
                Math.floor((lap % 60000) / 1000)
              ).padStart(2, "0");
              const lapMseconds = String(
                Math.floor((lap % 1000) / 10)
              ).padStart(2, "0");

              return (
                <li key={index}>
                  {index + 1}. kör: {lapMinutes}:{lapSeconds}.{lapMseconds}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Stopper;
