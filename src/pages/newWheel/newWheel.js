import React, { useEffect, useState } from "react";
import "./newWheel.css";

function NewWheel() {
  const [wheelData, setWheelData] = useState([
    { point: 50, id: 1, activeClass: false },
    { point: 100, id: 2, activeClass: false },
    { point: 200, id: 3, activeClass: false },
    { point: 300, id: 4, activeClass: false },
    { point: 400, id: 5, activeClass: false },
    { point: 500, id: 6, activeClass: false },
    { point: 600, id: 7, activeClass: false },
    { point: 700, id: 8, activeClass: false },
  ]);
  const [wheelWidth, setWheelWidth] = useState();
  const [winningNumber, setwinningNumber] = useState(1);
  const [wheelStyleIndex, setwheelStyleIndex] = useState({});
  const [spintValue, setspintValue] = useState(0);

  useEffect(() => {
    const totalItems = wheelData.length;
    const wheelWidth2 = (100 / totalItems) * 3.14;
    setWheelWidth(wheelWidth2);

    const updatedWheelData = wheelData.map((item, index) => ({
      ...item,
      wheelTransform: (360 / totalItems) * index,
    }));

    setWheelData(updatedWheelData);
  }, []);
  const addActiveClass = () => {
    const updateArray = wheelData.map((item) => {
      if (item.id === winningNumber) {
        return { ...item, activeClass: true };
      } else {
        return item;
      }
    });
    setWheelData(updateArray);
  };

  const removeActiveClass = () => {
    const updateArray2 = wheelData.map((item) => {
      return { ...item, activeClass: false };
    });
    setWheelData(updateArray2);
  };

  const handleTransitionEnd = () => {
    addActiveClass();
    setTimeout(() => {
      removeActiveClass();
    }, 3000);
    setspintValue((prev) => prev + 1080);
    // setwinningNumber(winningNumber + 1);
  };

  const wheelAnimeHandler = () => {
    let spinSum = 0;
    spinSum =
      1800 -
      ((winningNumber - 1) * 360) / wheelData.length -
      (spintValue % 360);
    setwheelStyleIndex({
      transform: `rotate(${spintValue + spinSum}deg)`,
      transitionDuration: "3.4s",
      transitionTimingFunction: "cubic-bezier(0.44, -0.105, 0, 1.07)",
    });
  };

  return (
    <div className="wheelinator__slices">
      <div className="wheelinator__arrow"></div>
      <div className="wheelinator">
        <div
          className="wheelinator-layer-0 wheelinator-layer-common"
          style={wheelStyleIndex}
          id="wheel-layer-0"
          onTransitionEnd={() => handleTransitionEnd()}
        >
          <div className="wheelinator__anker">
            {wheelData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`wheelinator__section ${
                    item.activeClass ? "active" : null
                  }`}
                  style={{
                    transform: `rotate(${item.wheelTransform}deg)`,
                    width: `${wheelWidth}%`,
                  }}
                >
                  <div className="wheelinator__section-half" id="wheelPr1">
                    <span className="wheelpr-green">
                      <span className="st_freespin"></span> {item.point}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="wheelinator__button"
          id="spin-button"
          onClick={wheelAnimeHandler}
        ></div>
      </div>
    </div>
  );
}

export default NewWheel;
