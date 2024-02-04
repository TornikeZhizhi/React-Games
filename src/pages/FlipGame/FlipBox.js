import React from "react";

function FlipBox({ item, flipHandler, disableTable }) {
  // console.log(item);
  return (
    <div
      className={`box ${item.name} ${item.completed ? "winner" : ""} ${
        disableTable ? "disable" : " "
      }`}
      onClick={() => flipHandler(item.unicId, item.id)}
    >
      <div className={"tour_back " + (item.rotate ? "rotate" : " ")}>
        {/* <img  src="img/leo.svg"> */}
      </div>
      <div className={"tour_front " + (item.rotate ? "rotate" : " ")}></div>
    </div>
  );
}

export default FlipBox;
