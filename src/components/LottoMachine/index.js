import React from "react";
import Canvas from "./LottoMachineCanvas/Canvas";
import "./index.scss";

const LottoMachine = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div className="lotto">
      <div className="lotto__machine">
        <Canvas active={active} />
      </div>
      <div className="lotto__button">
        <button
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? "중지" : "실행"}
        </button>
      </div>
    </div>
  );
};

export default LottoMachine;
