import React from "react";

function FinalModal({ finalScore, resetGame }) {
  return (
    <>
      <div className="yahtze_modal">
        {finalScore.you > finalScore.enemy ? (
          <div>You win</div>
        ) : finalScore.you < finalScore.enemy ? (
          <div>Enemy win</div>
        ) : (
          <div>It's a draw</div>
        )}
        <button onClick={resetGame}>Play again</button>
      </div>
    </>
  );
}

export default FinalModal;
