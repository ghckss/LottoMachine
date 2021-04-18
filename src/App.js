import React from "react";
import { Header, LottoInput, LottoMachine, ResultNav } from "./components";
import "./App.scss";

const App = () => {
  const [values, setValues] = React.useState(["", "", "", "", "", ""]);
  const [results, setResults] = React.useState([]);

  const appendResult = (result) => {
    const newResults = [...results];
    result.sort((a, b) => a - b);
    newResults.push(result);
    setResults(newResults);
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <LottoMachine
          values={values}
          setValues={setValues}
          setResults={appendResult}
        />
        <ResultNav results={results} />
      </main>
      <LottoInput values={values} setValues={setValues} />
    </div>
  );
};

export default App;
