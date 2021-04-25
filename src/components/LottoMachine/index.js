import React from "react";
import Canvas from "./LottoMachineCanvas/Canvas";
import "./index.scss";

const LottoMachine = ({
  values,
  setValues,
  setResults,
  setAnimationActive,
}) => {
  const [active, setActive] = React.useState(false);

  const pushRandomNumber = (numbers) => {
    const randNumber = Math.floor(Math.random() * (45 - 1 + 1)) + 1;
    if (numbers.indexOf(randNumber) === -1) numbers.push(randNumber);
    else pushRandomNumber(numbers);
    return numbers;
  };

  const makeResult = () => {
    setActive(true);

    const numbers = [...values.filter((value) => value !== "")];

    const promises = [];
    const loopCount = 6 - numbers.length;
    for (let i = 0; i < loopCount; i++) {
      promises.push(setEachValue(i, numbers));
    }

    Promise.all(promises).then(() => {
      setActive(false);
      setAnimationActive(true);
      setTimeout(() => {
        setValues(["", "", "", "", "", ""]);
        setResults(numbers);
        setAnimationActive(false);
      }, 500);
    });
  };

  const setEachValue = (index, numbers) => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        pushRandomNumber(numbers);
        setValues([...numbers]);
        resolve();
      }, index * 400);
    });
  };

  return (
    <div className="lotto">
      <div className="lotto__machine">
        <Canvas active={active} />
      </div>
      <div className="lotto__button">
        <button
          style={{ display: `${active ? "none" : "block"}` }}
          onClick={() => {
            makeResult();
          }}
        >
          실행
        </button>
      </div>
    </div>
  );
};

export default LottoMachine;
