import React, { useState, useEffect } from "react";
import "./css/Wheel.css";
import WheelPlate from "./WheelPlate";
import Dummy_WheelArray from "./WheelData.json";
function Wheel() {
  const [wheelArray, setWheelArray] = useState(Dummy_WheelArray);

  const [winningNumber, setwinningNumber] = useState(1);
  const [wheelStyleIndex, setwheelStyleIndex] = useState({});
  const [spintValue, setspintValue] = useState(0);
  const [transitionEndHandled, setTransitionEndHandled] = useState(false);
  const wheelAnimation = () => {
    setTransitionEndHandled(false);
    let spinSum = 0;
    spinSum = spintValue + 1080 - winningNumber * 23;

    setwheelStyleIndex({
      transform: `rotate(${spinSum}deg)`,
      transitionDuration: "1.4s",
      transitionTimingFunction: "cubic-bezier(0.44, -0.105, 0, 1.07)",
    });
  };

  const addActiveClass = () => {
    const updateArray = wheelArray.map((item) => {
      if (item.id == winningNumber) {
        return { ...item, activeClass: true };
      } else {
        return item;
      }
    });
    setWheelArray(updateArray);
  };

  const removeActiveClass = () => {
    const updateArray2 = wheelArray.map((item) => {
      return { ...item, activeClass: false };
    });
    setWheelArray(updateArray2);
  };

  const handleTransitionEnd = () => {
    if (!transitionEndHandled) {
      addActiveClass();
      setTimeout(() => {
        removeActiveClass();
      }, 3000);

      setspintValue((prev) => prev + 1080);
      setTransitionEndHandled(true);
    }

  };

  return (
    <div className="bonus-game">
      <div className="bonus-game__wrapper">
        <div className="bonus-game__wheel">
          <div className="wheel ">
            <div className="wheel__button " onClick={wheelAnimation}></div>
            <div className="wheel__arrow"></div>
            <div
              id="spinning"
              className="wheel__white "
              style={wheelStyleIndex}
              onTransitionEnd={() => handleTransitionEnd()}
            >
              <div className="wheel__mid">
                <div className="wheel__inner">
                  {wheelArray.map((item) => (
                    <WheelPlate
                      textBlack={item.textBlack}
                      iconClass={item.iconClass}
                      activeClass={item.activeClass}
                      text={item.text}
                      key={item.id}
                    />
                  ))}
                  <div className="wheel__shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheel;
