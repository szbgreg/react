import React, { useState } from "react";

function ClockApp() {
  const [mode, setMode] = useState("clock");

  return (
    <div className="clock-app">
      <h1>Óra és Stopperóra</h1>

      <div>
        <button onClick={() => setMode("clock")}>Óra</button>
        <button onClick={() => setMode("stopper")}>Stopper</button>
        {mode === "clock" && <h2>Digitális óra</h2>}
        {mode === "stopper" && <h2>Stopper</h2>}
      </div>
    </div>
  );
}

export default ClockApp;
