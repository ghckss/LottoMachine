import React from "react";
import { Header, LottoInput, LottoMachine, ResultNav } from "./components";
import "./App.scss";

const App = () => {
  const [isAnimationActive, setAnimationActive] = React.useState(false);
  const [values, setValues] = React.useState(["", "", "", "", "", ""]);
  const [results, setResults] = React.useState([]);

  const appendResult = (result) => {
    const newResults = [...results];
    result.sort((a, b) => a - b);
    newResults.push(result);
    setResults(newResults);

    const scrollHeight = document.querySelector("nav").scrollHeight;
    document.querySelector(".result").scrollTo(0, scrollHeight);
  };

  const getKeyframes = () => {
    const resultRows = document.querySelectorAll(".result__row");
    let bottomDestination = resultRows[resultRows.length - 1]
      ? window.innerHeight - resultRows[resultRows.length - 1].offsetTop
      : window.innerHeight;

    bottomDestination -= 100;
    if (bottomDestination < 120) bottomDestination = 120;

    return `@keyframes container {
      10% {right: 0; border: none;} 
      100% {width: 350px; bottom: ${bottomDestination}px; right: 0; border: none; justify-content: center;}
    }`;
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <LottoMachine
          values={values}
          setAnimationActive={setAnimationActive}
          setValues={setValues}
          setResults={appendResult}
        />
        <ResultNav results={results} />
      </main>
      <style>{getKeyframes()}</style>
      <LottoInput
        values={values}
        isAnimationActive={isAnimationActive}
        setValues={setValues}
      />
    </div>
  );
};

export default App;
