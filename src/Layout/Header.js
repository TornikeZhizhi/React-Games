import React from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/slot">Slot</Link>
            </li>
            <li>
              <Link to="/wheel">Wheel</Link>
            </li>
            <li>
              <Link to="/flip-game">Flip-game</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
