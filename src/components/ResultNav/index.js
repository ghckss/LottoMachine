import React from "react";
import "./index.scss";

const LottoInput = () => {
  const ballStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "1px solid black",
  };
  const ball = <div className="circle" style={ballStyle}></div>;
  return (
    <nav className="result">
      <div className="result__title">RESULT LIST</div>
      <div className="result__row">
        {ball}
        {ball}
        {ball}
        {ball}
        {ball}
        {ball}
      </div>
    </nav>
  );
};

export default LottoInput;
