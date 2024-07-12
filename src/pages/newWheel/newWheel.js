import React, { useEffect, useState } from "react";
import "./newWheel.css";

function NewWheel() {
  const [wheelData, setWheelData] = useState([
    { point: 50 },
    { point: 100 },
    { point: 200 },
    { point: 300 },
    { point: 400 },
    { point: 500 },
    { point: 600 },
    { point: 700 },
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

  const handleTransitionEnd = () => {
    setspintValue((prev) => prev + 1080);
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
                  className="wheelinator__section"
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
