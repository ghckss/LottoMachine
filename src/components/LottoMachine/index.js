import React from "react";
import Canvas from "./LottoMachineCanvas/Canvas";
import "./index.scss";

const LottoMachine = ({ setResults }) => {
  const [active, setActive] = React.useState(false);

  const makeResult = () => {
    const numbers = [];
    for (let i = 0; i < 6; i++) {
      const randNumber = Math.floor(Math.random() * (45 - 1 + 1)) + 1;
      if (numbers.indexOf(randNumber) === -1) numbers.push(randNumber);
      else i -= 1;
    }
    setResults(numbers);
  };

  return (
    <div className="lotto">
      <div className="lotto__machine">
        <Canvas active={active} />
      </div>
      <div className="lotto__button">
        <button
          onClick={() => {
            setActive(!active);
            if (active) makeResult();
          }}
        >
          {active ? "중지" : "실행"}
        </button>
      </div>
    </div>
  );
};

export default LottoMachine;
