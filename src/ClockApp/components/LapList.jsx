import React from "react";
import "./LapList.css";

function LapList({ laps }) {
  return (
    <div className="laps-container">
      <h3>Köridők:</h3>
      <ul className="laps-list">
        {laps.map((lap, index) => {
          const lapMinutes = String(Math.floor(lap / 60000)).padStart(2, "0");
          const lapSeconds = String(Math.floor((lap % 60000) / 1000)).padStart(
            2,
            "0"
          );
          const lapMseconds = String(Math.floor((lap % 1000) / 10)).padStart(
            2,
            "0"
          );

          return (
            <li key={index}>
              <span className="lap-number">{index + 1}. kör:</span>
              <span className="lap-time">
                {lapMinutes}:{lapSeconds}.{lapMseconds}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LapList;
