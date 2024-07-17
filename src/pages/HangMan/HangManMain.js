import React, { useEffect, useState } from "react";
import { randomWord } from "./Words.js";
import img0 from "./imgs/0.jpg";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/3.jpg";
import img4 from "./imgs/4.jpg";
import img5 from "./imgs/5.jpg";
import img6 from "./imgs/6.jpg";
// import HangTitle from "./HangTitle.js";
import "./css/hangman.css";

const HangManMain = () => {
  const [stateRandomWord, setStateRandomWord] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [game, setGame] = useState(null);
  const [letters, setLetters] = useState([]);
  const [disableGame, setDisableGame] = useState(true);
  // const [wordLength, setwordLength] = useState(0)

  const lettersArray = [
    { boardLett: "a", clicked: false },
    { boardLett: "b", clicked: false },
    { boardLett: "c", clicked: false },
    { boardLett: "d", clicked: false },
    { boardLett: "e", clicked: false },
    { boardLett: "f", clicked: false },
    { boardLett: "g", clicked: false },
    { boardLett: "h", clicked: false },
    { boardLett: "i", clicked: false },
    { boardLett: "j", clicked: false },
    { boardLett: "k", clicked: false },
    { boardLett: "l", clicked: false },
    { boardLett: "m", clicked: false },
    { boardLett: "n", clicked: false },
    { boardLett: "o", clicked: false },
    { boardLett: "p", clicked: false },
    { boardLett: "q", clicked: false },
    { boardLett: "r", clicked: false },
    { boardLett: "s", clicked: false },
    { boardLett: "t", clicked: false },
    { boardLett: "u", clicked: false },
    { boardLett: "v", clicked: false },
    { boardLett: "w", clicked: false },
    { boardLett: "x", clicked: false },
    { boardLett: "y", clicked: false },
    { boardLett: "z", clicked: false },
  ];

  const imgs = [img0, img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const setData = [...randomWord()];
    const setDataArray = [];

    setData.map(function (item) {
      setDataArray.push({ lett: item, found: false });
    });
    setStateRandomWord(setDataArray);
    setLetters(lettersArray);
  }, []);

  const takeWord = (letter, index) => {
    if (disableGame) {
      let oneCheck = false;
      let mainCheck = false;
      let wordLength = 0;
      const editWordData = stateRandomWord.map((item, index) => {
        if (letter == item.lett) {
          oneCheck = true;
          return { ...item, found: true };
        } else {
          mainCheck = true;
          return item;
        }
      });

      // check if game is lost
      if (mainCheck && !oneCheck) {
        if (wrongAnswers == 6) {
          setGame(false);
          setDisableGame(false);
        }
        setWrongAnswers((prev) => prev + 1);
      }

      // set new letter ddata
      setStateRandomWord(editWordData);

      // set className for letter to hide
      const editClickedLetters = letters.map((data, innerIndex) => {
        if (innerIndex == index) {
          return { ...data, clicked: true };
        } else {
          return data;
        }
      });
      setLetters(editClickedLetters);

      //check if game is win
      editWordData.map((item, index) => {
        if (item.found == true) {
          wordLength++;
          if (wordLength == stateRandomWord.length) {
            setGame(true);
            setDisableGame(false);
          }
        }
      });
      wordLength = 0;
    }
  };

  // new game
  const newGame = () => {
    const setData = [...randomWord()];
    const setDataArray = [];

    setData.map(function (item) {
      setDataArray.push({ lett: item, found: false });
    });
    setStateRandomWord(setDataArray);
    setWrongAnswers(0);
    setGame(null);
    setLetters(lettersArray);
    setDisableGame(true);
  };

  return (
    <div className="paper">
      <div className="Hangman">
        {/* <HangTitle/> */}
        <h1>Hangman</h1>
        <img src={imgs[wrongAnswers]} />
        {game == true && (
          <>
            <h4 className="win_game"> "you Win GAME" </h4>{" "}
            <button onClick={newGame} variant="contained">
              New Game
            </button>{" "}
          </>
        )}
        {game == false && (
          <>
            {" "}
            <h5 className="lost_game">You Lost Game ... ! ! !</h5>
            <button onClick={newGame} variant="contained">
              New Game
            </button>{" "}
          </>
        )}

        <div className="word_lines">
          {stateRandomWord.map((letter, index) => {
            if (letter.found == true) {
              return <p key={index}>{letter.lett}</p>;
            } else {
              return <p key={index}>-</p>;
            }
          })}
        </div>

        <div className="letters">
          {letters.map((letter, index) => (
            <p
              key={index}
              className={letter.clicked ? "disable" : ""}
              onClick={() => takeWord(letter.boardLett, index)}
            >
              {letter.boardLett}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HangManMain;
