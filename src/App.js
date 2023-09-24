import React, { useState } from "react";
import "./App.css";
import Tooltip from "./Components/Tooltip";
const App = () => {
  const [position, setPosition] = useState("top");
  const [hovering, setHovering] = useState(false);

  const handleClick = (pos) => {
    setPosition(pos);
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div className="App">
      <div className="btn-position">
        <div className="grp-name">Select the position of the hovering!!</div>
        <button
          className={position === "top" ? "btn active" : "btn"}
          onClick={() => handleClick("top")}
        >
          top
        </button>
        <button
          className={position === "left" ? "btn active" : "btn"}
          onClick={() => handleClick("left")}
        >
          left
        </button>
        <button
          className={position === "right" ? "btn active" : "btn"}
          onClick={() => handleClick("right")}
        >
          right
        </button>
        <button
          className={position === "down" ? "btn active" : "btn"}
          onClick={() => handleClick("down")}
        >
          down
        </button>
      </div>

      <div id="button-container">
        <button
          className="btn hover-btn"
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        >
          Hover Over Me!!
        </button>
        {hovering && <Tooltip position={position} />}
      </div>
    </div>
  );
};

export default App;
