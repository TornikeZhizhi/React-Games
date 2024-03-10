import React from "react";
import "./css/yahtze.css";

function Yahtze() {
  return (
    <div className="yahtze_fluid">
      <div className="yahtze_container">
        <div className="sidebar">
          <h1>Yahtzee!</h1>
          <div className="dice-container">
            <i className="fas fa-dice-one"></i>
            <i className="fas fa-dice-two"></i>
            <i className="fas fa-dice-three"></i>
            <i className="fas fa-dice-four"></i>
            <i className="fas fa-dice-five"></i>
          </div>
          <button>Roll</button>
        </div>
        <div className="ScoreTable">
          <h2>Score Table</h2>

          <div className="table_container">
            <div className="table_common_box">
              <div className="tbl_box"></div>
              <div className="tbl_box">You</div>
              <div className="tbl_box">Enemy</div>
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
              <div className="tbl_box">YAHTZEE</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
            <div className="table_common_box">
              <div className="tbl_box">TOTAL SCORE</div>
              <div className="tbl_box"></div>
              <div className="tbl_box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yahtze;
