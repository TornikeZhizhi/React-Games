import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="header">
      <nav>
        <ul>
          <li>{/* <Link to="/slot">sda</Link> */}</li>
          <li>
            <a href="/slot">Slot</a>
          </li>
          <li>
            <a href="/wheel">Wheel</a>
          </li>
          <li>
            <a href="/shirt-draw">Shirt-Draw</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
