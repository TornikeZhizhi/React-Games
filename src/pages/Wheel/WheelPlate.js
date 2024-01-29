import React from "react";

function WheelPlate({ textBlack, iconClass, activeClass, text }) {
  return (
    <>
      <div className={`wheel__element ${activeClass ? "active" : null}`}>
        <div className="wheel__element-anker">
          <div className="wheel__element-white"></div>
          <div className="wheel__element-inactive"></div>
          <div className="wheel__element-active">
            <div className="wheel__element-fire"></div>
          </div>
          <div className="wheel__element-content">
            <div
              className={`wheel__element-text ${textBlack ? "black" : null}`}
            >
              {" "}
              {text}
            </div>
            <div className={`wheel__element-icon ${iconClass}`}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WheelPlate;
