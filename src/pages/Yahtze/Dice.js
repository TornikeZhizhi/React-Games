import React, { useEffect, useState } from "react";

function Dice({ diceArray, diceDisableHandler, gameDefault }) {
  const [animeToggler, setanimeToggler] = useState(true);

  function numberToWord(number) {
    switch (number) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      default:
        return "";
    }
  }

  useEffect(() => {
    setanimeToggler(true);
    setTimeout(() => {
      setanimeToggler(false);
    }, 400);
  }, [diceArray.map((dice) => dice.number).join(",")]);

  const onDiceDisableHandler = (ind) => {
    diceDisableHandler(ind);
  };

  return (
    <>
      {/* {console.log(diceArray)} */}
      {diceArray.map((item, index) => (
        <i
          onClick={() => onDiceDisableHandler(index)}
          key={index}
          className={`fas fa-dice-${numberToWord(item.number)} ${
            animeToggler ? "rotateAnime" : ""
          } ${!item.active ? "disable" : ""} ${
            gameDefault === false ? "fa-question" : ""
          }`}
        ></i>
      ))}
    </>
  );
}

export default Dice;
