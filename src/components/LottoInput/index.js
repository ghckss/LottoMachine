import React from "react";
import Ball from "../common/Ball";
import "./index.scss";

const LottoInput = ({ values, isAnimationActive, setValues }) => {
  const [duplicateIndexList, setDuplicateIndexList] = React.useState([]);

  React.useEffect(() => {
    document.querySelector("input[name='0']").focus();
  }, []);

  const handleBallChange = (e) => {
    changeBallValue(e);
  };

  const changeBallValue = (e) => {
    const index = e.target.name;
    const newValues = [...values];
    newValues[index] = Number(e.target.value);

    if (
      newValues[index] === "" ||
      (newValues[index] <= 45 && newValues[index] > 0)
    ) {
      setValues(newValues);
    }

    setDuplicateIndexList(getDuplicateIndexList(newValues));
  };

  const getDuplicateIndexList = (valueList) => {
    const list = [];
    for (let i = 0; i < 6; i++) {
      for (let j = i; j < 6; j++) {
        if (
          i !== j &&
          valueList[i] !== "" &&
          valueList[j] !== "" &&
          valueList[i] === valueList[j]
        ) {
          if (list.indexOf(i) === -1) list.push(i);
          if (list.indexOf(j) === -1) list.push(j);
          break;
        }
      }
    }

    return list;
  };

  const showFakeBalls = () => {
    const balls = [];
    for (let i = 0; i < 6; i++) {
      balls.push(
        <div key={`fake-${i}`} className="lotto-input__ball">
          <Ball number="" size="50"></Ball>
        </div>
      );
    }
    return balls;
  };

  const createBalls = () => {
    const size = 50;
    const balls = [];

    for (let i = 0; i < 6; i++) {
      balls.push(
        <div key={i} className="lotto-input__ball">
          <Ball number={values[i]} size={size} warning={isDuplicated(i)}>
            <input
              name={i}
              type="text"
              value={values[i] || ""}
              style={{
                width: `${size - 10}px`,
                background: "transparent",
                color: `${isDuplicated(i) ? "red" : "black"}`,
              }}
              onChange={handleBallChange}
            />
          </Ball>
          {isDuplicated(i) && (
            <div className="lotto-input--error">같은 번호가 있습니다.</div>
          )}
        </div>
      );
    }
    return balls;
  };

  const isDuplicated = (index) => {
    return duplicateIndexList.indexOf(index) !== -1;
  };

  return (
    <>
      <div className="lotto-input">{showFakeBalls()}</div>
      <div className={`lotto-input ${isAnimationActive ? "move" : ""}`}>
        {createBalls()}
      </div>
    </>
  );
};

export default LottoInput;
