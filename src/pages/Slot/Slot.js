import React, { useEffect, useRef, useState } from "react";
import "./SlotCss/Slot.css";
import SlotData from "../SlotData.json";
import SlotItem from "./SlotItem";

function Slot() {
  let elementHeight = 62;

  const [rowStyle, setRowStyle] = useState({});
  const [prizeRow, setprizeRow] = useState([]);
  const [buttonDisable, setbuttonDisable] = useState(false);

  useEffect(() => {
    setprizeRow({
      prizeFirstRow: [
        { name: "slot_k" },
        { name: "slot_a" },
        { name: "slot_anubisi" },
        { name: "slot_a" },
        { name: "slot_10" },
      ],
      prizeSecondRow: [
        { name: "slot_j" },
        { name: "slot_j" },
        { name: "slot_a" },
        { name: "slot_tvali" },
        { name: "slot_bug" },
      ],
      prizeThirdRow: [
        { name: "slot_faraon" },
        { name: "slot_j" },
        { name: "slot_a" },
        { name: "slot_tvali" },
        { name: "slot_bug" },
      ],
      prizeFourRow: [
        { name: "slot_faraon" },
        { name: "slot_tvali" },
        { name: "slot_a" },
        { name: "slot_tvali" },
        { name: "slot_bug" },
      ],
      prizeFiveRow: [
        { name: "slot_faraon" },
        { name: "slot_tvali" },
        { name: "slot_j" },
        { name: "slot_tvali" },
        { name: "slot_j" },
      ],
    });
  }, []);

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
    setbuttonDisable(true);
    const animeRow1 = createAnimeRow(0);
    const animeRow2 = createAnimeRow(5);
    const animeRow3 = createAnimeRow(10);
    const animeRow4 = createAnimeRow(15);
    const animeRow5 = createAnimeRow(20);

    setprizeRow({
      prizeFirstRow: animeRow1,
      prizeSecondRow: animeRow2,
      prizeThirdRow: animeRow3,
      prizeFourRow: animeRow4,
      prizeFiveRow: animeRow5,
    });
    setRowStyle({
      rowStle1: {
        transform: `translateY(${elementHeight * 24}px)`,
        transitionDuration: "1.4s",
      },
      rowStle2: {
        transform: `translateY(${elementHeight * 24}px)`,
        transitionDuration: "1.5s",
      },
      rowStle3: {
        transform: `translateY(${elementHeight * 24}px)`,
        transitionDuration: "1.6s",
      },
      rowStle4: {
        transform: `translateY(${elementHeight * 24}px)`,
        transitionDuration: "1.7s",
      },
      rowStle5: {
        transform: `translateY(${elementHeight * 24}px)`,
        transitionDuration: "1.8s",
      },
    });
  };

  const handleTransitionEnd = () => {
    setbuttonDisable(false);
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
      prizeFourRow: SlotData.slice(15, 20).map((item) => ({
        name: item.name,
      })),
      prizeFiveRow: SlotData.slice(20, 25).map((item) => ({
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
              {prizeRow.prizeFirstRow?.map((item, index) => {
                return <SlotItem key={index} slotName={item.name} />;
              })}
            </div>
          </div>
          <div className="slot_rowBox">
            <div className="slot_row" style={rowStyle.rowStle2}>
              {prizeRow.prizeSecondRow?.map((item, index) => {
                return <SlotItem key={index} slotName={item.name} />;
              })}
            </div>
          </div>
          <div className="slot_rowBox">
            <div className="slot_row" style={rowStyle.rowStle3}>
              {prizeRow.prizeThirdRow?.map((item, index) => {
                return <SlotItem key={index} slotName={item.name} />;
              })}
            </div>
          </div>
          <div className="slot_rowBox">
            <div className="slot_row" style={rowStyle.rowStle4}>
              {prizeRow.prizeFourRow?.map((item, index) => {
                return <SlotItem key={index} slotName={item.name} />;
              })}
            </div>
          </div>
          <div className="slot_rowBox">
            <div
              className="slot_row"
              onTransitionEnd={() => handleTransitionEnd(3)}
              style={rowStyle.rowStle5}
            >
              {prizeRow.prizeFiveRow?.map((item, index) => {
                return <SlotItem key={index} slotName={item.name} />;
              })}
            </div>
          </div>
        </div>
        <div
          className={"spinBox " + (buttonDisable ? "disable" : " ")}
          onClick={slotAnimation}
        ></div>
      </div>
    </div>
  );
}

export default Slot;
