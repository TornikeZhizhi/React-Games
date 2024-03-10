import React, { useState } from "react";
import "./css/yahtze.css";
import Dice from "./Dice.js";
import Table from "./Table.js";

function Yahtze() {
  const [diceArray, setdiceArray] = useState([
    { number: 1, active: true },
    { number: 2, active: true },
    { number: 3, active: true },
    { number: 4, active: true },
    { number: 5, active: true },
  ]);

  const [scoreTable, setscoreTable] = useState({
    Your: [
      { item: "ones", quantity: "", completed: false },
      { item: "twoos", quantity: "2", completed: false },
      { item: "threes", quantity: "", completed: false },
      { item: "fours", quantity: "", completed: false },
      { item: "fives", quantity: "", completed: false },
      { item: "sixes", quantity: "", completed: false },
      { item: "Three of a kind", quantity: "", completed: false },
      { item: "Four of a kind", quantity: "", completed: false },
      { item: "Full House", quantity: "", completed: false },
      { item: "Small straight", quantity: "", completed: false },
      { item: "Large straight", quantity: "", completed: false },
      { item: "Chance", quantity: "", completed: false },
      { item: "Yahtzee", quantity: "", completed: false },
    ],
    Enemy: [
      { item: "ones", quantity: "", completed: false },
      { item: "twoos", quantity: "3", completed: false },
      { item: "threes", quantity: "", completed: false },
      { item: "fours", quantity: "", completed: false },
      { item: "fives", quantity: "", completed: false },
      { item: "sixes", quantity: "", completed: false },
      { item: "Three of a kind", quantity: "", completed: false },
      { item: "Four of a kind", quantity: "", completed: false },
      { item: "Full House", quantity: "", completed: false },
      { item: "Small straight", quantity: "", completed: false },
      { item: "Large straight", quantity: "", completed: false },
      { item: "Chance", quantity: "", completed: false },
      { item: "Yahtzee", quantity: "", completed: false },
    ],
  });

  const diceDisableHandler = (ind) => {
    const updatedDiceArray = [...diceArray];
    if (ind >= 0 && ind < updatedDiceArray.length) {
      updatedDiceArray[ind].active = !updatedDiceArray[ind].active;
      setdiceArray(updatedDiceArray);
    }
  };

  const rolHandler = () => {
    const diceRandomArray = diceArray.map((dice) => {
      if (dice.active) {
        return { number: Math.floor(Math.random() * 2) + 1, active: true };
      } else {
        return { number: dice.number, active: false };
      }
    });

    // const occurrences = diceRandomArray.filter(
    //   (dice) => dice.number === 2
    // ).length;
    setdiceArray(diceRandomArray);
  };

  return (
    <div className="yahtze_fluid">
      <div className="yahtze_container">
        <div className="sidebar">
          <h1>Yahtzee!</h1>
          <div className="dice-container">
            <Dice
              diceArray={diceArray}
              diceDisableHandler={diceDisableHandler}
            />
          </div>
          <button onClick={rolHandler}>Roll</button>
        </div>
        <div className="ScoreTable">
          <h2>Score Table</h2>

          <div className="table_container">
            <Table scoreTable={scoreTable} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yahtze;
