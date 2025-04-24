import React, { useState, useEffect } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  // Másodpercenként frissítjük az időt
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <h2>A pontos idő</h2>
      <p className="clock-timer">{time.toLocaleTimeString()}</p>
      <p>
        {time.toLocaleDateString()} -{" "}
        {time.toLocaleDateString("hu-HU", { weekday: "long" })}
      </p>
    </div>
  );
}

export default DigitalClock;
