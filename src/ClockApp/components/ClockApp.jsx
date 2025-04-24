import React, { useState } from "react";
import DigitalClock from "./DigitalClock";
import Stopper from "./Stopper";
import "./ClockApp.css";

function ClockApp() {
  const [mode, setMode] = useState("clock");

  return (
    <div className="clock-app">
      <h1>Óra és Stopperóra</h1>

      <div role="tablist" className="tab-list">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "clock"}
          className={`tab ${mode === "clock" ? "active" : ""}`}
          onClick={() => setMode("clock")}
        >
          Óra
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "stopper"}
          className={`tab ${mode === "stopper" ? "active" : ""}`}
          onClick={() => setMode("stopper")}
        >
          Stopper
        </button>
      </div>

      <div className="tab-panel">
        {mode === "clock" && <DigitalClock />}
        {mode === "stopper" && <Stopper />}
      </div>
    </div>
  );
}

export default ClockApp;
