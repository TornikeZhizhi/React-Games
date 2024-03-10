import React from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import SlotImg from "./imgs/slot-machine.png";
import WheelImg from "./imgs/fortune-wheel.png";
import FlipImg from "./imgs/card-game.png";
import QuizGame from "./imgs/answer.png";
import DiceGame from "./imgs/dice.png";

function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/slot">
                <img src={SlotImg} />
                Slot
              </Link>
            </li>
            <li>
              <Link to="/wheel">
                {" "}
                <img src={WheelImg} />
                Wheel
              </Link>
            </li>
            <li>
              <Link to="/flip-game">
                {" "}
                <img src={FlipImg} />
                Flip-game
              </Link>
            </li>
            <li>
              <Link to="/quiz">
                {" "}
                <img src={QuizGame} />
                Quiz
              </Link>
            </li>
            <li>
              <Link to="/yahtze">
                {" "}
                <img src={DiceGame} />
                Yahtzee
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
