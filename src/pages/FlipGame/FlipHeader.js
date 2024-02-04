import React from "react";

function FlipHeader() {
  return (
    <>
      <div className="tittle_container">
        <h1>welcome to card flip game</h1>
      </div>
      <div className="score_container">
        <div>
          <span>Hint Chanse in</span>
          <span id="score">10</span>
          <span>second</span>{" "}
        </div>
        <div>
          <span>best score</span> <span id="best_score">0</span>
        </div>

        <div>
          <span>time</span>
          <span id="minute">0</span> :<span id="time">0</span>
        </div>
      </div>
    </>
  );
}

export default FlipHeader;
