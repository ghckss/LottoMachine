import React from "react";
import Ball from "../common/Ball";
import "./index.scss";

const ResultNav = ({ results }) => {
  const resultBalls = results.map((result, index) => {
    return (
      <div key={index} className="result__row">
        {result.map((number) => (
          <Ball key={`${index}-${number}`} number={number} size="30">
            <div>{number}</div>
          </Ball>
        ))}
      </div>
    );
  });
  return (
    <nav className="result">
      <div className="result__title">RESULT LIST</div>
      {resultBalls}
    </nav>
  );
};

export default ResultNav;
