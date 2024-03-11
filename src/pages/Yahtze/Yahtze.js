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
      { item: "twoos", quantity: "", completed: false },
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
  const [gameTry, setgameTry] = useState("you");

  const diceDisableHandler = (ind) => {
    const updatedDiceArray = [...diceArray];
    if (ind >= 0 && ind < updatedDiceArray.length) {
      updatedDiceArray[ind].active = !updatedDiceArray[ind].active;
      setdiceArray(updatedDiceArray);
    }
  };

  const updateQuantity = (player, playerItem, value) => {
    if (player == "you") {
      if (playerItem == "twoos") {
        console.log(value);
      }
      setscoreTable((prevState) => {
        return {
          ...prevState,
          Your: prevState.Your.map((item) => {
            if (item.item === playerItem) {
              return { ...item, quantity: value };
            }
            return item;
          }),
        };
      });
    } else {
      setscoreTable((prevState) => {
        return {
          ...prevState,
          Enemy: prevState.Enemy.map((item) => {
            if (item.item === playerItem) {
              return { ...item, quantity: value };
            }
            return item;
          }),
        };
      });
    }
  };

  const tableChecker = (diceRandomArray) => {
    const tableCheckerInner = (diceRandomArray, item, multiplier) => {
      const occurrences = diceRandomArray.filter(
        (dice) => dice.number === multiplier
      ).length;

      const validItems = ["ones", "twoos", "threes", "fours", "fives", "sixes"];

      if (validItems.includes(item)) {
        if (occurrences > 0) {
          if (gameTry === "you") {
            updateQuantity("you", item, occurrences * multiplier);
          }
        }
      }
      if (item === "Three of a kind") {
        const findTripleOrMore = (testArray) => {
          const occurrencesMap = {};

          // Count occurrences of each number
          testArray.forEach((item) => {
            if (occurrencesMap[item.number]) {
              occurrencesMap[item.number]++;
            } else {
              occurrencesMap[item.number] = 1;
            }
          });

          // Find numbers with three or more occurrences
          const tripleOrMoreNumbers = Object.keys(occurrencesMap).filter(
            (number) => occurrencesMap[number] >= 3
          );

          return tripleOrMoreNumbers;
        };
        const tripleOrMoreNumbers = findTripleOrMore(diceRandomArray);
        if (tripleOrMoreNumbers.length > 0) {
          updateQuantity("you", item, tripleOrMoreNumbers * 5);
        }
      }
      if (item === "Four of a kind") {
        const findTripleOrMore = (testArray) => {
          const occurrencesMap = {};

          // Count occurrences of each number
          testArray.forEach((item) => {
            if (occurrencesMap[item.number]) {
              occurrencesMap[item.number]++;
            } else {
              occurrencesMap[item.number] = 1;
            }
          });

          // Find numbers with three or more occurrences
          const tripleOrMoreNumbers = Object.keys(occurrencesMap).filter(
            (number) => occurrencesMap[number] >= 4
          );

          return tripleOrMoreNumbers;
        };
        const tripleOrMoreNumbers = findTripleOrMore(diceRandomArray);
        if (tripleOrMoreNumbers.length > 0) {
          updateQuantity("you", item, tripleOrMoreNumbers * 7);
        }
      }
    };

    tableCheckerInner(diceRandomArray, "ones", 1);
    tableCheckerInner(diceRandomArray, "twoos", 2);
    tableCheckerInner(diceRandomArray, "threes", 3);
    tableCheckerInner(diceRandomArray, "fours", 4);
    tableCheckerInner(diceRandomArray, "fives", 5);
    tableCheckerInner(diceRandomArray, "sixes", 6);

    tableCheckerInner(diceRandomArray, "Three of a kind");
    tableCheckerInner(diceRandomArray, "Four of a kind");
  };

  const rolHandler = () => {
    setscoreTable((prevState) => {
      return {
        ...prevState,
        Your: prevState.Your.map((item) => {
          if (item.completed === false) {
            return { ...item, quantity: "" };
          }
          return item;
        }),
      };
    });

    const diceRandomArray = diceArray.map((dice) => {
      if (dice.active) {
        return { number: Math.floor(Math.random() * 6) + 1, active: true };
      } else {
        return { number: dice.number, active: false };
      }
    });

    tableChecker(diceRandomArray);
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
