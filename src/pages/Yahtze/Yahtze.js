import React, { useState } from "react";
import "./css/yahtze.css";
import Dice from "./Dice.js";
import Table from "./Table.js";
import matchSound from "./music/wins.mp3";
import diceSound from "./music/dice.mp3";
import FinalModal from "./FinalModal.js";
function Yahtze() {
  const matchAudio = new Audio(matchSound);
  const diceAudio = new Audio(diceSound);

  const [gameDefault, setgameDefault] = useState(false);
  const [modalToggler, setmodalToggler] = useState(false);
  const [youRollCounter, setyouRollCounter] = useState(3);
  const [enemyRollCounter, setenemyRollCounter] = useState(3);
  const [finalScore, setFinalScore] = useState({ you: 0, enemy: 0 });
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
  });
  const [gameTry, setgameTry] = useState("you");

  const diceDisableHandler = (ind) => {
    if (gameDefault) {
      const updatedDiceArray = [...diceArray];
      if (ind >= 0 && ind < updatedDiceArray.length) {
        updatedDiceArray[ind].active = !updatedDiceArray[ind].active;
        setdiceArray(updatedDiceArray);
      }
    }
  };

  const updateQuantity = (player, playerItem, value) => {
    const targetKey = player === "you" ? "Your" : "Enemy";
    setscoreTable((prevState) => {
      return {
        ...prevState,
        [targetKey]: prevState[targetKey].map((item) => {
          if (item.item === playerItem && item.completed === false) {
            return { ...item, quantity: value };
          }
          return item;
        }),
      };
    });
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
          } else {
            updateQuantity("enemy", item, occurrences * multiplier);
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
        if (gameTry === "you") {
          if (tripleOrMoreNumbers.length > 0) {
            updateQuantity("you", item, tripleOrMoreNumbers * 5);
          }
        } else {
          if (tripleOrMoreNumbers.length > 0) {
            updateQuantity("enemy", item, tripleOrMoreNumbers * 5);
          }
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
        if (gameTry === "you") {
          if (tripleOrMoreNumbers.length > 0) {
            updateQuantity("you", item, tripleOrMoreNumbers * 10);
          }
        } else {
          if (tripleOrMoreNumbers.length > 0) {
            updateQuantity("enemy", item, tripleOrMoreNumbers * 10);
          }
        }
      }
      // full house
      const findFullHouse = (testArray) => {
        const occurrencesMap = {};

        // Count occurrences of each number
        testArray.forEach((item) => {
          if (occurrencesMap[item.number]) {
            occurrencesMap[item.number]++;
          } else {
            occurrencesMap[item.number] = 1;
          }
        });

        // Find numbers with three occurrences
        const tripleNumbers = Object.keys(occurrencesMap).filter(
          (number) => occurrencesMap[number] === 3
        );

        // Find numbers with two occurrences
        const doubleNumbers = Object.keys(occurrencesMap).filter(
          (number) => occurrencesMap[number] === 2
        );

        // Check if there is at least one number with three occurrences and one number with two occurrences
        if (tripleNumbers.length > 0 && doubleNumbers.length > 0) {
          return true;
        }

        return false;
      };
      const hasFullHouse = findFullHouse(diceRandomArray);
      if (gameTry === "you") {
        if (hasFullHouse && item === "Full House") {
          updateQuantity("you", item, 25);
        }
      } else {
        if (hasFullHouse && item === "Full House") {
          updateQuantity("enemy", item, 25);
        }
      }

      // small straight

      const findSmallStraight = (testArray) => {
        // Extract unique numbers from the array
        const uniqueNumbers = [
          ...new Set(testArray.map((item) => item.number)),
        ];

        // Sort the unique numbers
        const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);

        // Check if there is a sequence of four consecutive numbers
        for (let i = 0; i <= sortedNumbers.length - 4; i++) {
          if (sortedNumbers[i + 3] - sortedNumbers[i] === 3) {
            return true; // Found a small straight
          }
        }

        return false; // Did not find a small straight
      };

      const hasSmallStraight = findSmallStraight(diceRandomArray);
      if (gameTry === "you") {
        if (hasSmallStraight && item === "Small straight") {
          updateQuantity("you", item, 30);
        }
      } else {
        if (hasSmallStraight && item === "Small straight") {
          updateQuantity("enemy", item, 30);
        }
      }

      // large straight
      const findLargeStraight = (testArray) => {
        // Extract unique numbers from the array
        const uniqueNumbers = [
          ...new Set(testArray.map((item) => item.number)),
        ];

        // Check if there is a sequence of five consecutive numbers
        if (uniqueNumbers.length === 5) {
          const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
          if (sortedNumbers[4] - sortedNumbers[0] === 4) {
            return true; // Found a large straight
          }
        }

        return false; // Did not find a large straight
      };

      const hasLargeStraight = findLargeStraight(diceRandomArray);
      if (gameTry === "you") {
        if (hasLargeStraight && item === "Large straight") {
          updateQuantity("you", item, 40);
        }
      } else {
        if (hasLargeStraight && item === "Large straight") {
          updateQuantity("enemy", item, 40);
        }
      }

      // chance

      const calculateChance = (testArray) => {
        // Use reduce to sum up all the numbers
        const sum = testArray.reduce((total, item) => total + item.number, 0);

        return sum;
      };
      const chanceScore = calculateChance(diceRandomArray);
      if (item === "Chance") {
        if (gameTry == "you") {
          updateQuantity("you", item, chanceScore);
        } else {
          updateQuantity("enemy", item, chanceScore);
        }
      }

      // yahtzee
      const checkYahtzee = (testArray) => {
        // Check if all numbers are the same
        const firstNumber = testArray[0].number;
        return testArray.every((item) => item.number === firstNumber);
      };

      // Example usage
      const isYahtzee = checkYahtzee(diceRandomArray);
      if (isYahtzee && item === "Yahtzee") {
        if (gameTry == "you") {
          updateQuantity("you", item, 50);
        } else {
          updateQuantity("enemy", item, 50);
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
    tableCheckerInner(diceRandomArray, "Full House");
    tableCheckerInner(diceRandomArray, "Small straight");
    tableCheckerInner(diceRandomArray, "Large straight");
    tableCheckerInner(diceRandomArray, "Chance");
    tableCheckerInner(diceRandomArray, "Yahtzee");
  };

  const rolInner = () => {
    if (gameTry === "you") {
      setyouRollCounter((prev) => prev - 1);
    }
    if (gameTry === "enemy") {
      setenemyRollCounter((prev) => prev - 1);
    }
  };
  const rolHandler = () => {
    diceAudio.play();
    setgameDefault(true);
    setscoreTable((prevState) => {
      return {
        ...prevState,
        Your: prevState.Your.map((item) => {
          if (item.completed === false) {
            return { ...item, quantity: "" };
          }
          return item;
        }),
        Enemy: prevState.Enemy.map((item) => {
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
    rolInner();
    tableChecker(diceRandomArray);
    setdiceArray(diceRandomArray);
  };

  const chooseHandler = (type, data) => {
    if (gameDefault) {
      matchAudio.play();
      const updatedDiceArray = diceArray.map((die) => ({
        ...die,
        active: true,
      }));
      setdiceArray(updatedDiceArray);
      setgameTry((prevTry) => (prevTry === "you" ? "enemy" : "you"));
      setenemyRollCounter(3);
      setyouRollCounter(3);
      const updateScoreTable = (player) => {
        const updatedItems = scoreTable[player].map((item) => {
          if (item.item === data) {
            return { ...item, completed: true };
          } else if (!item.completed) {
            return { ...item, quantity: "" };
          }
          return item;
        });
        setscoreTable((prevState) => ({
          ...prevState,
          [player]: updatedItems,
        }));
      };

      if (type === "you") {
        updateScoreTable("Your");
      } else if (type === "enemy") {
        const completedTrueCount = scoreTable.Enemy.reduce(
          (count, item) => count + item.completed,
          0
        );
        const allCompletedExceptOne =
          completedTrueCount === scoreTable.Enemy.length - 1 &&
          scoreTable.Enemy.some((item) => !item.completed);
        updateScoreTable("Enemy");
        setTimeout(() => {
          if (allCompletedExceptOne) {
            const calculateSum = (player) =>
              scoreTable[player].reduce(
                (sum, item) =>
                  item.quantity !== "" ? sum + parseInt(item.quantity) : sum,
                0
              );
            const sumYour = calculateSum("Your");
            const sumEnemy = calculateSum("Enemy");
            setFinalScore({ you: sumYour, enemy: sumEnemy });
            setTimeout(() => setmodalToggler(true), 2000);
          }
        }, 1000);
      }
      setgameDefault(false);
    }
  };

  const resetGame = () => {
    setmodalToggler(false);
    setFinalScore({ you: 0, enemy: 0 });
    setyouRollCounter(3);
    setenemyRollCounter(3);
    setgameTry("you");
    const updatedDiceArray = diceArray.map((die) => ({ ...die, active: true }));
    setdiceArray(updatedDiceArray);
    const resetScoreTable = {
      Your: scoreTable.Your.map((item) => ({
        ...item,
        quantity: "",
        completed: false,
      })),
      Enemy: scoreTable.Enemy.map((item) => ({
        ...item,
        quantity: "",
        completed: false,
      })),
    };
    setscoreTable(resetScoreTable);
    setgameDefault(false);
  };
  return (
    <div className="yahtze_fluid">
      <div className="yahtze_container">
        <div className="sidebar">
          {modalToggler && (
            <FinalModal resetGame={resetGame} finalScore={finalScore} />
          )}
          <h1>Yahtzee!</h1>
          <div className="dice-container">
            <Dice
              gameDefault={gameDefault}
              diceArray={diceArray}
              diceDisableHandler={diceDisableHandler}
            />
          </div>
          <span className="rol_counter">
            {gameTry === "you" ? youRollCounter : enemyRollCounter} Roll Left
          </span>
          <button
            onClick={rolHandler}
            disabled={youRollCounter === 0 || enemyRollCounter === 0}
            className={
              youRollCounter === 0 || enemyRollCounter === 0 ? "disabled" : ""
            }
          >
            {gameTry} Roll
          </button>
        </div>
        <div className="ScoreTable">
          <h2>Score Table</h2>

          <div className="table_container">
            <Table
              gameDefault={gameDefault}
              gameTry={gameTry}
              finalScore={finalScore}
              chooseHandler={chooseHandler}
              scoreTable={scoreTable}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yahtze;
