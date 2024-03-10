import React, { useState } from "react";
import "./css/yahtze.css";
import Dice from "./Dice.js";

function Yahtze() {
  const [diceArray, setdiceArray] = useState([
    { number: 1, active: true },
    { number: 2, active: true },
    { number: 3, active: false },
    { number: 4, active: true },
    { number: 5, active: true },
  ]);

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
        return { number: Math.floor(Math.random() * 6) + 1, active: true };
      } else {
        return { number: dice.number, active: false };
      }
    });

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
            <div className="table_common_box">
              <div className="tbl_box"></div>
              <div className="tbl_box bold purple">You</div>
              <div className="tbl_box bold purple">Enemy</div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">Ones</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">Twoos</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">Threes</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">Fours</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">Fives</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">Sixes</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <br></br>
            <div className="table_common_box">
              <div className="tbl_box">Three of a kind</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">Four of a kind</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">Full House</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">Small straight</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">Large straight</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">Chance</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box bold">YAHTZEE</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box bold purple">TOTAL SCORE</div>
              <div className="tbl_box bold purple"></div>
              <div className="tbl_box bold purple"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yahtze;
