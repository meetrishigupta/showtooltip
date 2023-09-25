import React, { useState } from "react";
import "./App.css";
import Tooltip from "./Components/Tooltip";

const App = () => {
  const [position, setPosition] = useState("top");
  const [hovering, setHovering] = useState(false);

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div className="App">
      <div className="outer-box">
        <div className="btn-position">
          <div className="selection-box">
            <div className="grp-name">
              <p>
                Select the position from dropdown before hovering below text
              </p>
            </div>
            <div>
              {" "}
              <select
                className="position-select"
                value={position}
                onChange={handlePositionChange}
              >
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="down">Down</option>
              </select>
            </div>
          </div>
        </div>
        <img src="./react-logo.png"></img>
        <div id="button-container">
          <h3
            className="btn hover-btn"
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
          >
            HOVER OVER ME!
          </h3>
        </div>
        {hovering && <Tooltip position={position} />}
      </div>
      <div className="branded-footer">
        <p>
          Design & Develop by Rishi Gupta |{" "}
          <span style={{ color: "#FF5C00" }}>Coding Ninjas</span> Skill Test 1
        </p>
      </div>
    </div>
  );
};

export default App;
