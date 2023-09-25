import React from "react";

const Tooltip = ({ position }) => {
  const getClassname = () => {
    return `${position}`;
  };

  return (
    <div className={getClassname()}>
      Thanks for hovering "{position}" Position!
    </div>
  );
};

export default Tooltip;
