import React, { useEffect, useState } from "react";
import "./css/Flip.css";
import FlipHeader from "./FlipHeader";
import FlipBox from "./FlipBox";

import DummyFlip from "./FlipData.json";

function FlipGame() {
  const [FlipData, setFlipData] = useState([]);
  const [flipIdArray, setflipIdArray] = useState([]);

  useEffect(() => {
    let finalFlipData = [];
    let startingData = [
      { name: "cancer", unicId: 1, id: 1, rotate: false, completed: false },
      { name: "virgo", unicId: 2, id: 2, rotate: false, completed: false },
      { name: "capricon", unicId: 3, id: 3, rotate: false, completed: false },
      { name: "scorpion", unicId: 4, id: 4, rotate: false, completed: false },
      { name: "taurus", unicId: 5, id: 5, rotate: false, completed: false },
      { name: "leo", unicId: 6, id: 6, rotate: false, completed: false },
      { name: "aquaris", unicId: 7, id: 7, rotate: false, completed: false },
      { name: "pisces", unicId: 8, id: 8, rotate: false, completed: false },
      {
        name: "sagittarius",
        unicId: 9,
        id: 9,
        rotate: false,
        completed: false,
      },
      { name: "gemini", unicId: 10, id: 10, rotate: false, completed: false },
      { name: "cancer", unicId: 11, id: 1, rotate: false, completed: false },
      { name: "virgo", unicId: 12, id: 2, rotate: false, completed: false },
      { name: "capricon", unicId: 13, id: 3, rotate: false, completed: false },
      { name: "scorpion", unicId: 14, id: 4, rotate: false, completed: false },
      { name: "taurus", unicId: 15, id: 5, rotate: false, completed: false },
      { name: "leo", unicId: 16, id: 6, rotate: false, completed: false },
      { name: "aquaris", unicId: 17, id: 7, rotate: false, completed: false },
      { name: "pisces", unicId: 18, id: 8, rotate: false, completed: false },
      {
        name: "sagittarius",
        unicId: 19,
        id: 9,
        rotate: false,
        completed: false,
      },
      { name: "gemini", unicId: 20, id: 10, rotate: false, completed: false },
    ];
    while (startingData.length > 0) {
      let randomNumb = Math.floor(Math.random() * startingData.length);
      finalFlipData.push(startingData[randomNumb]);
      startingData.splice(randomNumb, 1);
    }
    setFlipData(finalFlipData);
  }, []);

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
      }, 1200);
    };

    if (id === flipIdArray[flipIdArray.length - 1]) {
      handleCompletion();
    } else if (flipIdArray.length !== 0) {
      // Reset rotation state after a delay
      setTimeout(() => {
        const resetData = FlipData.map((item) => ({ ...item, rotate: false }));
        setFlipData(resetData);
        setflipIdArray([]);
      }, 800);
    }
  };

  return (
    <>
      <FlipHeader />
      <div className="flipp_container">
        {FlipData.map((item, index) => {
          return <FlipBox flipHandler={flipHandler} item={item} key={index} />;
        })}
      </div>
    </>
  );
}

export default FlipGame;
