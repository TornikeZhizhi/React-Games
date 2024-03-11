import React from "react";

function Table({ scoreTable, chooseHandler, finalScore, gameTry }) {
  const onChooseHandler = (type, data) => {
    chooseHandler(type, data);
  };
  return (
    <>
      <div className="table_common_box">
        <div className="tbl_box tbl_titles"></div>
        <div className="tbl_box bold purple">You</div>
        <div className="tbl_box bold purple">Enemy</div>
      </div>
      <div className="table_common_box">
        <div className="tbl_titles_row">
          {scoreTable.Your.map((item, index) => {
            return (
              <div key={index} className="tbl_box bold tbl_titles">
                {item.item}
              </div>
            );
          })}
        </div>

        <div className={`you_row ${gameTry === "enemy" ? "disable" : ""}`}>
          {scoreTable.Your.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => onChooseHandler("you", item.item)}
                className={`tbl_box bold green ${
                  item.completed === true ? "completed" : ""
                }`}
              >
                {item.quantity}
              </div>
            );
          })}
        </div>

        <div className={`enemy_row ${gameTry === "you" ? "disable" : ""}`}>
          {scoreTable.Enemy.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => onChooseHandler("enemy", item.item)}
                className={`tbl_box bold red ${
                  item.completed === true ? "completed" : ""
                }`}
              >
                {item.quantity}
              </div>
            );
          })}
        </div>

        {/* <div className="tbl_box bold">dd</div>
      <div className="tbl_box bold">dd</div> */}
      </div>
      <div className="table_common_box">
        <div className="tbl_box bold purple tbl_titles">TOTAL SCORE</div>
        <div className="tbl_box bold purple">{finalScore.you}</div>
        <div className="tbl_box bold purple">{finalScore.enemy}</div>
      </div>
    </>
  );
}

export default Table;
