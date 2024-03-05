import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/quiz.css";
import quizJson from "./QuizData.json";

function QuizInner() {
  const params = useParams();
  let dummyData;

  if (params.id == 10) {
    dummyData = quizJson.book;
  } else if (params.id == 12) {
    dummyData = quizJson.music;
  } else if (params.id == 11) {
    dummyData = quizJson.movie;
  } else if (params.id == 15) {
    dummyData = quizJson.games;
  } else if (params.id == 20) {
    dummyData = quizJson.mithology;
  } else if (params.id == 25) {
    dummyData = quizJson.art;
  } else if (params.id == 29) {
    dummyData = quizJson.comics;
  } else if (params.id == 27) {
    dummyData = quizJson.animals;
  } else if (params.id == 31) {
    dummyData = quizJson.anime;
  }
  const [questions, setquestions] = useState([]);
  const [qIndex, setqIndex] = useState(0);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const answerHandler = (chooseAnswer, index) => {
    // console.log(questions, index);
    const editedData = { ...questions };
    if (questions.correct_answer === chooseAnswer) {
      editedData.activeClass[index] = "green";
      setquestions(editedData);
    } else {
      editedData.activeClass[index] = "red";
      setquestions(editedData);
    }

    setTimeout(function () {
      setqIndex((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    const answersArray = shuffleArray([
      ...dummyData[qIndex].incorrect_answers,
      dummyData[qIndex].correct_answer,
    ]);
    let sumData = {
      ...dummyData[qIndex],
      answersArray,
      activeClass: [false, false, false, false],
    };
    setquestions(sumData);
  }, [qIndex]);

  return (
    <div className="quin_inner_fluid">
      {/* {console.log(questions)} */}
      <div className="quin_inner_container">
        <div className="quiz_question">{questions?.question}</div>
        <div className="qs_box_wrapper">
          {questions?.answersArray?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => answerHandler(item, index)}
                className={
                  `qs_box ` +
                  (questions.activeClass[index] !== false
                    ? questions.activeClass[index]
                    : " ")
                }
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuizInner;
