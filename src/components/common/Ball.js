import React from "react";
import "./Ball.scss";

const Ball = ({ children, number, size, warning }) => {
  let color = "";
  if (!number) {
    color = "#eeeeee";
  } else if (number <= 10) {
    color = "#e4a716";
  } else if (number <= 20) {
    color = "#1993da";
  } else if (number <= 30) {
    color = "#e96353";
  } else if (number <= 40) {
    color = "#8f8f8f";
  } else if (number <= 45) {
    color = "#5ab545";
  }

  const ballStyle = {
    width: `${size}px`,
    height: `${size}px`,
    background: `radial-gradient(circle at 25% 5%, #ffffff, ${color}, #ffffff)`,
    border: `${warning && "1px solid red"}`,
  };

  return (
    <div className="ball" style={ballStyle}>
      {children}
    </div>
  );
};

export default Ball;
