import React, { useEffect, useRef, useState } from "react";
import "./Slot.css";
import SlotData from "./SlotData.json";

function Slot() {
  let elementHeight = 44;

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
      rowStle1: {
        transform: `translateY(${elementHeight * 24}px)`,
        transitionDuration: "1.4s",
      },
      rowStle2: {
        transform: `translateY(${elementHeight * 24}px)`,
        transitionDuration: "1.8s",
      },
      rowStle3: {
        transform: `translateY(${elementHeight * 24}px)`,
        transitionDuration: "2.2s",
      },
    });
  };

  const handleTransitionEnd = () => {
    setRowStyle({
      rowStle1: {
        transform: `translateY(0)`,
        transitionDuration: "0s",
      },
      rowStle2: {
        transform: `translateY(0)`,
        transitionDuration: "0s",
      },
      rowStle3: {
        transform: `translateY(0)`,
        transitionDuration: "0s",
      },
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
            <div className="slot_row" style={rowStyle.rowStle1}>
              {prizeRow.prizeFirstRow.map((item, index) => {
                return (
                  <div key={index} className={`slot_item ${item.name}`}></div>
                );
              })}
            </div>
          </div>
          <div className="slot_rowBox">
            <div className="slot_row" style={rowStyle.rowStle2}>
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
              onTransitionEnd={() => handleTransitionEnd(3)}
              style={rowStyle.rowStle3}
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
