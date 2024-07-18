import React from "react";
import "./piano.css";
import * as Tone from "tone";
function Piano() {
  const synth = new Tone.MonoSynth().toDestination();

  // Play a note
  synth.triggerAttackRelease("G3", "8n");
  return (
    <div id="p-wrapper">
      <ul id="piano">
        <li>
          <div className="anchor"></div>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
        </li>

        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
        <li>
          <div className="anchor"></div>
          <span></span>
        </li>
      </ul>
    </div>
  );
}

export default Piano;
