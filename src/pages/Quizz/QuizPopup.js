import React from "react";
import { useNavigate } from "react-router-dom";

function QuizPopup({ answersArray }) {
  const trueCount = answersArray.filter((item) => item === true).length;
  const navigate = useNavigate();
  const popupHandler = () => {
    navigate("/quiz");
  };
  return (
    <div className="quiz_popup">
      <h2>
        You guessed <span className="green">{trueCount}</span> correct answers
      </h2>
      <button onClick={popupHandler}>Try Another Quiz</button>
    </div>
  );
}

export default QuizPopup;
