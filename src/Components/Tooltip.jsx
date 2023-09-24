import React from "react";

const Tooltip = ({ position }) => {
  const getClassname = () => {
    return `${position}`;
  };

  return (
    <div className={getClassname()}>
      Thanks for hovering "{position}" position!
    </div>
  );
};

export default Tooltip;
