import React, { useEffect, useState } from "react";
import "./css/Flip.css";
import FlipHeader from "./FlipHeader";
import FlipBox from "./FlipBox";

import DummyFlip from "./FlipData.json";

function FlipGame() {
  const [FlipData, setFlipData] = useState([]);

  useEffect(() => {
    let finalFlipData = [];
    let startingData = [
      { name: "cancer", id: 1 },
      { name: "virgo", id: 2 },
      { name: "capricon", id: 3 },
      { name: "scorpion", id: 4 },
      { name: "taurus", id: 5 },
      { name: "leo", id: 6 },
      { name: "aquaris", id: 7 },
      { name: "pisces", id: 8 },
      { name: "sagittarius", id: 9 },
      { name: "gemini", id: 10 },
      { name: "cancer", id: 1 },
      { name: "virgo", id: 2 },
      { name: "capricon", id: 3 },
      { name: "scorpion", id: 4 },
      { name: "taurus", id: 5 },
      { name: "leo", id: 6 },
      { name: "aquaris", id: 7 },
      { name: "pisces", id: 8 },
      { name: "sagittarius", id: 9 },
      { name: "gemini", id: 10 },
    ];
    while (startingData.length > 0) {
      let randomNumb = Math.floor(Math.random() * startingData.length);
      finalFlipData.push(startingData[randomNumb]);
      startingData.splice(randomNumb, 1);
    }
    setFlipData(finalFlipData);
  }, []);

  return (
    <>
      <FlipHeader />
      <div className="flipp_container">
        {FlipData.map((item, index) => {
          return <FlipBox item={item} key={index} />;
        })}
      </div>
    </>
  );
}

export default FlipGame;
