import React from "react";

function FlipPopup({ popupToggler, playAgain, time }) {
  const poupClose = () => {
    playAgain();
  };

  return (
    popupToggler && (
      <div id="popup_window">
        <div className="popup_content">
          <div className="popup_text">
            <h2>"Congratulations, You Won!"</h2>
          </div>
          <div className="last_score">
            <span>your score is</span>
            <span id="lastscore"> {time}</span>
          </div>
          <div className="question">
            <span id="bad_answer">fuck this game,i want more fucking game</span>
            <span id="play_again" onClick={poupClose}>
              play again?
            </span>
          </div>
        </div>
      </div>
    )
  );
}

export default FlipPopup;
