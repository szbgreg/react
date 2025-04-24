import React, { useState, useEffect } from "react";

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
    <>
      <h2>A pontos idő</h2>
      <p>{time.toLocaleTimeString()}</p>
      <p>
        {time.toLocaleDateString()} -{" "}
        {time.toLocaleDateString("hu-HU", { weekday: "long" })}
      </p>
    </>
  );
}

export default DigitalClock;
