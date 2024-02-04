import React from "react";

function FlipBox({ item }) {
  return (
    <div className={`box ` + item.name}>
      <div className="tour_back rotate">{/* <img  src="img/leo.svg"> */}</div>
      <div className="tour_front rotate"></div>
    </div>
  );
}

export default FlipBox;
