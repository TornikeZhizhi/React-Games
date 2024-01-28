import React, { useEffect, useState } from "react";
import "./Slot.css";
import SlotData from "./SlotData.json";

function Slot() {
  const [rowStyle, setRowStyle] = useState({});

  const [prizeRow, setprizeRow] = useState({
    prizeFirstRow: SlotData,
    prizeSecondRow: SlotData,
    prizeThirdRow: SlotData,
  });

  const createAnimeRow = (startIndex) => {
    return Array.from({ length: 30 }, (_, i) => {
      const randomNumb =
        i >= 24
          ? SlotData[i + startIndex - 24].name
          : SlotData[Math.floor(Math.random() * 15)].name;
      return { name: randomNumb };
    });
  };

  const slotAnimation = () => {
    const animeRow1 = createAnimeRow(0);
    const animeRow2 = createAnimeRow(5);
    const animeRow3 = createAnimeRow(10);

    setprizeRow({
      prizeFirstRow: animeRow1,
      prizeSecondRow: animeRow2,
      prizeThirdRow: animeRow3,
    });

    setRowStyle({
      transform: `translateY(${44 * 24}px)`,
      transitionDuration: "1.4s",
      filter: "blur(0.5px)",
      // "transition-timing-function": "cubic-bezier(0.57, -0.03, 0.57, 1.1)",
    });
  };

  const handleTransitionEnd = () => {
    setRowStyle({
      transform: `translateY(0px)`,
      transitionDuration: "0s",
      filter: "blur(0)",
    });

    setprizeRow({
      prizeFirstRow: SlotData.slice(0, 5).map((item) => ({ name: item.name })),
      prizeSecondRow: SlotData.slice(5, 10).map((item) => ({
        name: item.name,
      })),
      prizeThirdRow: SlotData.slice(10, 15).map((item) => ({
        name: item.name,
      })),
    });
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
              {prizeRow.prizeFirstRow.map((item, index) => {
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
              {prizeRow.prizeSecondRow.map((item, index) => {
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
              {prizeRow.prizeThirdRow.map((item, index) => {
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
