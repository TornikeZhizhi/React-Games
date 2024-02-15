import React from "react";

function FlipHeader({ bestScore, time }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <>
      <div className="tittle_container">
        <h1>welcome to card flip game</h1>
      </div>
      <div className="score_container">
        {/* <div>
          <span>Hint Chanse in</span>
          <span id="score">10</span>
          <span>second</span>{" "}
        </div> */}
        <div>
          <span>best score</span>{" "}
          <span id="best_score" style={{ color: "green" }}>
            {bestScore} - Point
          </span>
        </div>

        <div>
          <span>time</span>
          {/* <span id="minute">0</span> : */}
          <span id="time">
            {minutes > 0 ? `${minutes}m ` : ""}
            {seconds}s
          </span>
        </div>
      </div>
    </>
  );
}

export default FlipHeader;
