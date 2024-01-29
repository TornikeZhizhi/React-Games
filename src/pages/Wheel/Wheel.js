import React, { useState } from "react";
import "./css/Wheel.css";
import WheelPlate from "./WheelPlate";
import Dummy_WheelArray from "./WheelData.json";
function Wheel() {
  const [wheelArray, setWheelArray] = useState(Dummy_WheelArray);

  return (
    <div className="bonus-game">
      <div className="bonus-game__wrapper">
        <div className="bonus-game__wheel">
          <div className="wheel null">
            <div className="wheel__button null"></div>
            <div className="wheel__arrow"></div>
            <div id="spinning" className="wheel__white null">
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
