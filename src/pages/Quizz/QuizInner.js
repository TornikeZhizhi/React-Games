import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/quiz.css";
import quizJson from "./QuizData.json";

function QuizInner() {
  const params = useParams();
  // let dummyData;

  const idToDummyDataMap = {
    10: quizJson.book,
    12: quizJson.music,
    11: quizJson.movie,
    15: quizJson.games,
    20: quizJson.mithology,
    25: quizJson.art,
    29: quizJson.comics,
    27: quizJson.animals,
    31: quizJson.anime,
  };

  const dummyData = idToDummyDataMap[params.id] || []; // default to empty array if no matching id found

  const [questions, setquestions] = useState([]);
  const [qIndex, setqIndex] = useState(0);
  const [answersArray, setanswersArray] = useState([]);
  const [disableQuiz, setdisableQuiz] = useState(false);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const answerHandler = (chooseAnswer, index) => {
    setdisableQuiz(true);
    const correctAnswer = questions.correct_answer;
    const newActiveClass = questions.activeClass.map((item, idx) =>
      idx === index ? (chooseAnswer === correctAnswer ? "green" : "red") : item
    );
    setquestions((prevQuestions) => ({
      ...prevQuestions,
      activeClass: newActiveClass,
    }));
    setanswersArray((prevAnswersArray) => [
      ...prevAnswersArray,
      chooseAnswer === correctAnswer,
    ]);

    if (qIndex < dummyData.length - 1) {
      setTimeout(() => {
        setqIndex((prev) => prev + 1);
      }, 500);
    }
  };

  useEffect(() => {
    if (!dummyData[qIndex]) return; // Guard clause to prevent unnecessary processing

    const { incorrect_answers, correct_answer } = dummyData[qIndex];
    const shuffledAnswers = shuffleArray([
      ...incorrect_answers,
      correct_answer,
    ]);

    setquestions({
      ...dummyData[qIndex],
      answersArray: shuffledAnswers,
      activeClass: new Array(incorrect_answers.length + 1).fill(false),
    });
    setdisableQuiz(false);
  }, [qIndex, dummyData]);
  return (
    <div className="quin_inner_fluid">
      <div className="quin_inner_container">
        <div className="quiz_question">{questions?.question}</div>
        <div className="pr_fluid">
          <div className="quiz_percens">
            {qIndex === 0 ? "0%" : `${qIndex}0%`}
          </div>
          <div className="quiz_progressBar">
            {answersArray.map((item, index) => (
              <div
                key={index}
                className={`quiz_progress ${item ? "green" : "red"}`}
              ></div>
            ))}
          </div>
        </div>
        <div className="qs_box_wrapper">
          {questions?.answersArray?.map((item, index) => (
            <div
              key={index}
              onClick={() => answerHandler(item, index)}
              className={`qs_box ${
                questions.activeClass[index] ||
                "" + (disableQuiz ? "disable" : "")
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizInner;
