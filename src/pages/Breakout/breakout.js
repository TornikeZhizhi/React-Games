import React, { useEffect, useState, useRef } from "react";
import "./breakout.css";

function Breakout() {
  const [directions, setdirections] = useState([0, 0]);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const [ballVelocity, setBallVelocity] = useState({ x: 1, y: 1 });
  const ballRef = useRef();
  const breakBlocksRef = useRef();

  useEffect(() => {
    // console.log("1");

    const interval = setInterval(() => {
      setdirections((prevDirections) => [
        prevDirections[0] + ballVelocity.x,
        prevDirections[1] - ballVelocity.y,
      ]);
    }, 5);
    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [ballVelocity]);

  useEffect(() => {
    // console.log("2");
    const checkBoundary = () => {
      const ballRect = ballRef.current.getBoundingClientRect();
      const containerRect = breakBlocksRef.current.getBoundingClientRect();
      let newVelocity = { ...ballVelocity };

      if (ballRect.left < containerRect.left) {
        setBallVelocity({ x: 1, y: -1 });
        // console.log("Ball is out of the container! left");
      } else if (ballRect.right > containerRect.right) {
        setBallVelocity({ x: -1, y: 1 });
        // console.log("Ball is out of the container! right");
      } else if (ballRect.top < containerRect.top) {
        setBallVelocity({ x: -1, y: -1 });
        // console.log("Ball is out of the container! top");
      } else if (ballRect.bottom > containerRect.bottom) {
        setBallVelocity({ x: -1, y: 1 });
        // console.log("Ball is out of the container! bottom");
      }

      if (newVelocity.y > 0) {
        console.log("Ball is coming from the bottom");
      } else {
        console.log("Ball is coming from the top");
      }
    };

    checkBoundary();
  }, [directions]);

  return (
    <div className="breakout_fluid" ref={breakBlocksRef}>
      {/* <div className="breakBlocks"></div> */}

      <div
        className="ball"
        ref={ballRef}
        style={{
          transform: `translate3d(${directions[0]}px, ${directions[1]}px, 0px)`,
        }}
      ></div>
    </div>
  );
}

export default Breakout;
