import React from "react";

function Table({ scoreTable }) {
  return (
    <>
      <div className="table_common_box">
        <div className="tbl_box tbl_titles"></div>
        <div className="tbl_box bold purple">You</div>
        <div className="tbl_box bold purple">Enemy</div>
      </div>
      <div className="table_common_box">
        <div className="tbl_titles_row">
          {scoreTable.Your.map((item) => {
            return <div className="tbl_box bold tbl_titles">{item.item}</div>;
          })}
        </div>

        <div className="you_row">
          {scoreTable.Your.map((item) => {
            return <div className="tbl_box bold green">dd</div>;
          })}
        </div>

        <div className="enemy_row">
          {scoreTable.Enemy.map((item) => {
            return <div className="tbl_box bold red">dd</div>;
          })}
        </div>

        {/* <div className="tbl_box bold">dd</div>
      <div className="tbl_box bold">dd</div> */}
      </div>
      <div className="table_common_box">
        <div className="tbl_box bold purple tbl_titles">TOTAL SCORE</div>
        <div className="tbl_box bold purple"></div>
        <div className="tbl_box bold purple"></div>
      </div>
    </>
  );
}

export default Table;
