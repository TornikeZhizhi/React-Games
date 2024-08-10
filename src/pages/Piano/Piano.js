import React, { useEffect } from "react";
import "./piano.css";
import * as Tone from "tone";

const keyToNote = {
  Q: "C4",
  W: "D4",
  E: "E4",
  R: "F4",
  T: "G4",
  Y: "A4",
  U: "B4",
  I: "C5",
  O: "D5",
  P: "E5",
  A: "F5",
  S: "G5",
  D: "A5",
  F: "B5",
  G: "C6",
  H: "D6",
  J: "E6",
  K: "F6",
  L: "G6",
  Z: "A6",
  X: "B6",
  C: "C7",
  V: "D7",
  B: "E7",
  N: "F7",
};

function Piano() {
  useEffect(() => {
    const synth = new Tone.Synth().toDestination();

    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      const note = keyToNote[key];
      if (note) {
        synth.triggerAttack(note);
        const keyElement = document.querySelector(`#key-${key}`);
        if (keyElement) {
          keyElement.classList.add("active");
        }
      }
    };

    const handleKeyUp = (event) => {
      const key = event.key.toUpperCase();
      const note = keyToNote[key];
      if (note) {
        synth.triggerRelease();
        const keyElement = document.querySelector(`#key-${key}`);
        if (keyElement) {
          keyElement.classList.remove("active");
        }
      }
    };

    const handleMouseDown = (event) => {
      const key = event.target.textContent.toUpperCase();
      const parentkey = event.target.parentElement.textContent.toUpperCase();
      console.log(key, parentkey);
      const note = keyToNote[key];
      if (note) {
        synth.triggerAttack(note);
        event.target.classList.add("active");
      }
    };

    const handleMouseUp = (event) => {
      const key = event.target.textContent.toUpperCase();

      const note = keyToNote[key];
      if (note) {
        synth.triggerRelease();
        event.target.classList.remove("active");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const keys = document.querySelectorAll(".kb_parent");
    keys.forEach((key) => {
      key.addEventListener("mousedown", handleMouseDown);
      key.addEventListener("mouseup", handleMouseUp);
    });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      keys.forEach((key) => {
        key.removeEventListener("mousedown", handleMouseDown);
        key.removeEventListener("mouseup", handleMouseUp);
      });
    };
  }, []);

  return (
    <div id="p-wrapper">
      <div className="piano_header">
        <div className="socket">
          <div className="gel center-gel">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c1 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c2 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c3 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c4 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c5 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c6 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>

          <div className="gel c7 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>

          <div className="gel c8 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c9 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c10 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c11 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c12 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c13 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c14 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c15 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c16 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c17 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c18 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c19 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c20 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c21 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c22 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c23 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c24 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c25 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c26 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c28 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c29 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c30 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c31 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c32 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c33 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c34 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c35 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c36 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c37 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
        </div>
        <div className="socket">
          <div className="gel center-gel">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c1 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c2 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c3 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c4 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c5 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c6 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>

          <div className="gel c7 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>

          <div className="gel c8 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c9 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c10 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c11 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c12 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c13 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c14 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c15 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c16 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c17 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c18 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c19 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c20 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c21 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c22 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c23 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c24 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c25 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c26 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c28 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c29 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c30 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c31 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c32 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c33 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c34 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c35 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c36 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c37 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
        </div>
        <div className="socket">
          <div className="gel center-gel">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c1 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c2 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c3 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c4 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c5 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c6 r1">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>

          <div className="gel c7 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>

          <div className="gel c8 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c9 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c10 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c11 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c12 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c13 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c14 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c15 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c16 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c17 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c18 r2">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c19 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c20 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c21 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c22 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c23 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c24 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c25 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c26 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c28 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c29 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c30 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c31 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c32 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c33 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c34 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c35 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c36 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
          <div className="gel c37 r3">
            <div className="hex-brick h1"></div>
            <div className="hex-brick h2"></div>
            <div className="hex-brick h3"></div>
          </div>
        </div>
      </div>
      <ul id="piano">
        <li className="kb_parent" id="key-A">
          <span className="keyboard_letter">A</span>
          <div className="anchor"></div>
        </li>
        <li className="kb_parent" id="key-S">
          <span className="keyboard_letter">S</span>
          <div className="anchor"></div>
          <span className="piano_key" id="key-Q">
            <span className="keyboard_letter">Q</span>
          </span>
        </li>
        <li className="kb_parent" id="key-D">
          <span className="keyboard_letter">D</span>
          <div className="anchor"></div>
          <span className="piano_key" id="key-W">
            <span className="keyboard_letter">W</span>
          </span>
        </li>
        <li className="kb_parent" id="key-F">
          <span className="keyboard_letter">F</span>
          <div className="anchor"></div>
        </li>
        <li className="kb_parent" id="key-G">
          <span className="keyboard_letter">G</span>
          <div className="anchor"></div>
          <span className="piano_key" id="key-E">
            <span className="keyboard_letter">E</span>
          </span>
        </li>
        <li className="kb_parent" id="key-H">
          <span className="keyboard_letter">H</span>
          <div className="anchor"></div>
          <span className="piano_key" id="key-R">
            <span className="keyboard_letter">R</span>
          </span>
        </li>
        <li className="kb_parent" id="key-J">
          <span className="keyboard_letter">J</span>
          <div className="anchor"></div>
        </li>
        <li className="kb_parent" id="key-K">
          <span className="keyboard_letter">K</span>
          <div className="anchor"></div>
          <span className="piano_key" id="key-T">
            <span className="keyboard_letter">T</span>
          </span>
        </li>
        <li className="kb_parent" id="key-L">
          <span className="keyboard_letter">L</span>
          <div className="anchor"></div>
          <span className="piano_key" id="key-Y">
            <span className="keyboard_letter">Y</span>
          </span>
        </li>
        <li className="kb_parent" id="key-Z">
          <span className="keyboard_letter">Z</span>
          <div className="anchor"></div>
        </li>
        <li className="kb_parent" id="key-X">
          <span className="keyboard_letter">X</span>
          <div className="anchor"></div>
          <span className="piano_key" id="key-U">
            <span className="keyboard_letter">U</span>
          </span>
        </li>
        <li className="kb_parent" id="key-C">
          <span className="keyboard_letter">C</span>
          <div className="anchor"></div>
          <span className="piano_key" id="key-I">
            <span className="keyboard_letter">I</span>
          </span>
        </li>
        <li className="kb_parent" id="key-V">
          <span className="keyboard_letter">V</span>
          <div className="anchor"></div>
        </li>
        <li className="kb_parent" id="key-B">
          <span className="keyboard_letter">B</span>
          <div className="anchor"></div>
          <span className="piano_key" id="key-O">
            <span className="keyboard_letter">O</span>
          </span>
        </li>
        <li className="kb_parent" id="key-N">
          <span className="keyboard_letter">N</span>
          <div className="anchor"></div>
          <span className="piano_key" id="key-P">
            <span className="keyboard_letter">P</span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Piano;
