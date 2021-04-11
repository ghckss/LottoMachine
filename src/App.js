import React from "react";
import { Header, LottoInput, LottoMachine, ResultNav } from "./components";
import "./App.scss";

const App = () => {
  const [results, setResults] = React.useState([]);
  const appendResult = (result) => {
    const newResults = [...results];
    newResults.push(result);
    result.sort();
    setResults(newResults);
  };
  return (
    <div className="App">
      <Header />
      <main className="main">
        <LottoMachine setResults={appendResult} />
        <ResultNav results={results} />
      </main>
      <LottoInput />
    </div>
  );
};

export default App;
