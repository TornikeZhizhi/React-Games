import React, { useEffect, useState } from "react";
import "./Slot.css";
import SlotData from "./SlotData.json";

function Slot() {
  const [rowStyle, setRowStyle] = useState({});

  const [prizeFirstRow, setprizeFirstRow] = useState(SlotData);
  const [prizeSecondRow, setprizeSecondRow] = useState(SlotData);

  const slotAnimation = () => {
    // let animeRow = [];
    // let spinValue = 44 * 24;
    // let ind = 0;
    // for (let i = 0; i < 29; i++) {
    //   let randomNumb = Math.floor(Math.random() * 20);
    //   if (i >= 24 && i < 30) {
    //     animeRow.push({ name: SlotData[ind].name });
    //     ind++;
    //   } else {
    //     animeRow.push({ name: SlotData[randomNumb].name });
    //   }
    // }
    const animeRow1 = Array.from({ length: 30 }, (_, i) => {
      const randomNumb =
        i >= 24
          ? SlotData[i - 24].name
          : SlotData[Math.floor(Math.random() * 20)].name;
      return { name: randomNumb };
    });
    const animeRow2 = Array.from({ length: 30 }, (_, i) => {
      const randomNumb =
        i >= 24
          ? SlotData[i - 19].name
          : SlotData[Math.floor(Math.random() * 20)].name;
      return { name: randomNumb };
    });
    setprizeFirstRow(animeRow1);
    setprizeSecondRow(animeRow2);
    setRowStyle({
      transform: `translateY(${44 * 24}px)`,
      transitionDuration: "2s",
    });
  };

  const handleTransitionEnd = () => {
    setRowStyle({
      transform: `translateY(0px)`,
      transitionDuration: "0s",
    });
    setprizeFirstRow(SlotData.slice(0, 5).map((item) => ({ name: item.name })));
    setprizeSecondRow(
      SlotData.slice(5, 10).map((item) => ({ name: item.name }))
    );
  };

  return (
    <div className="slot_fluid">
      <div className="slot_container_box">
        <div className="slot_container">
          <div className="slot_rowBox">
            <div
              className="slot_row"
              onTransitionEnd={handleTransitionEnd}
              style={rowStyle}
            >
              {prizeFirstRow.map((item, index) => {
                return (
                  <div key={index} className={`slot_item ${item.name}`}></div>
                );
              })}
            </div>
          </div>
          <div className="slot_rowBox">
            <div
              className="slot_row"
              onTransitionEnd={handleTransitionEnd}
              style={rowStyle}
            >
              {prizeSecondRow.map((item, index) => {
                return (
                  <div key={index} className={`slot_item ${item.name}`}></div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="spinBox" onClick={slotAnimation}>
          Spin
        </div>
      </div>
    </div>
  );
}

export default Slot;
