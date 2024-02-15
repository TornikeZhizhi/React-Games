import React, { useEffect, useState, useRef } from "react";
import "./css/Flip.css";
import FlipHeader from "./FlipHeader";
import FlipBox from "./FlipBox";

import DummyFlip from "./FlipData.json";
import FlipPopup from "./FlipPopup";

function FlipGame() {
  const [FlipData, setFlipData] = useState([]);
  const [flipIdArray, setflipIdArray] = useState([]);
  const [disableTable, setdisableTable] = useState(false);
  const [bestScore, setbestScore] = useState(0);
  const [time, seTtime] = useState(0);
  const [gameFinished, setgameFinished] = useState(0);
  const [popupToggler, setpopupToggler] = useState(false);

  const interval = useRef(null);

  useEffect(() => {
    let finalFlipData = [];
    let startingData = [
      { name: "cancer", unicId: 1, id: 1, rotate: false, completed: false },
      { name: "virgo", unicId: 2, id: 2, rotate: false, completed: false },
      // { name: "capricon", unicId: 3, id: 3, rotate: false, completed: false },
      // { name: "scorpion", unicId: 4, id: 4, rotate: false, completed: false },
      // { name: "taurus", unicId: 5, id: 5, rotate: false, completed: false },
      // { name: "leo", unicId: 6, id: 6, rotate: false, completed: false },
      // { name: "aquaris", unicId: 7, id: 7, rotate: false, completed: false },
      // { name: "pisces", unicId: 8, id: 8, rotate: false, completed: false },
      // {
      //   name: "sagittarius",
      //   unicId: 9,
      //   id: 9,
      //   rotate: false,
      //   completed: false,
      // },
      // { name: "gemini", unicId: 10, id: 10, rotate: false, completed: false },
      { name: "cancer", unicId: 11, id: 1, rotate: false, completed: false },
      { name: "virgo", unicId: 12, id: 2, rotate: false, completed: false },
      // { name: "capricon", unicId: 13, id: 3, rotate: false, completed: false },
      // { name: "scorpion", unicId: 14, id: 4, rotate: false, completed: false },
      // { name: "taurus", unicId: 15, id: 5, rotate: false, completed: false },
      // { name: "leo", unicId: 16, id: 6, rotate: false, completed: false },
      // { name: "aquaris", unicId: 17, id: 7, rotate: false, completed: false },
      // { name: "pisces", unicId: 18, id: 8, rotate: false, completed: false },
      // {
      //   name: "sagittarius",
      //   unicId: 19,
      //   id: 9,
      //   rotate: false,
      //   completed: false,
      // },
      // { name: "gemini", unicId: 20, id: 10, rotate: false, completed: false },
    ];
    while (startingData.length > 0) {
      let randomNumb = Math.floor(Math.random() * startingData.length);
      finalFlipData.push(startingData[randomNumb]);
      startingData.splice(randomNumb, 1);
    }
    setFlipData(finalFlipData);
  }, []);

  const startTimer = () => {
    interval.current = setInterval(() => {
      seTtime((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current); // Clean up the interval when component unmounts
    };
  }, []);

  const playAgain = () => {
    const resetData = FlipData.map((item) => ({
      ...item,
      rotate: false,
      completed: false,
    }));
    setFlipData(resetData);
    startTimer();
    seTtime(0);
    setpopupToggler(false);
  };

  const gameFinishedHandler = () => {
    console.log(gameFinished, FlipData);
    if (gameFinished == FlipData.length / 2 - 1) {
      console.log("Aba");
      if (bestScore == 0) {
        setbestScore(time);
      } else if (time < bestScore) {
        setbestScore(time);
      }
      clearInterval(interval.current);
      setTimeout(function () {
        setpopupToggler(true);
      }, 1500);
      setgameFinished(0);
    } else {
      setgameFinished((prev) => prev + 1);
    }
  };

  const flipHandler = (unicId, id) => {
    setflipIdArray([...flipIdArray, id]);
    // Update rotation state
    const rotData = FlipData.map((item) =>
      item.unicId === unicId ? { ...item, rotate: true } : item
    );
    setFlipData(rotData);

    const handleCompletion = () => {
      // Update completion state after a delay
      setTimeout(() => {
        const updatedData = FlipData.map((item) =>
          item.id === id ? { ...item, completed: true } : item
        );
        setFlipData(updatedData);
      }, 450);
      setflipIdArray([]);
      gameFinishedHandler();
    };
    if (id === flipIdArray[flipIdArray.length - 1]) {
      handleCompletion();
    } else if (flipIdArray.length !== 0) {
      // Reset rotation state after a delay
      setdisableTable(true);
      setTimeout(() => {
        const resetData = FlipData.map((item) => ({ ...item, rotate: false }));
        setFlipData(resetData);
        setflipIdArray([]);
        setdisableTable(false);
      }, 350);
    }
  };

  return (
    <>
      <FlipPopup
        time={time}
        popupToggler={popupToggler}
        playAgain={playAgain}
      />
      <FlipHeader bestScore={bestScore} time={time} />
      <div className="flipp_container">
        {FlipData.map((item, index) => {
          return (
            <FlipBox
              disableTable={disableTable}
              flipHandler={flipHandler}
              item={item}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default FlipGame;
