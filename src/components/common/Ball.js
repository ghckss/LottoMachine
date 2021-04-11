import React from "react";
import "./Ball.scss";

const Ball = ({ number, size }) => {
  let color = "";
  if (number <= 10) {
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
  };

  return (
    <div className="ball" style={ballStyle}>
      {number ? (
        <div>{number}</div>
      ) : (
        <input type="text" style={{ width: `${size - 10}px` }} />
      )}
    </div>
  );
};

export default Ball;
