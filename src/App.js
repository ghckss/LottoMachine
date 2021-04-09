import React from "react";
import { Header, LottoInput, LottoMachine, ResultNav } from "./components";
import "./App.scss";

const App = () => {
  const [results, setResults] = React.useState([[]]);
  return (
    <div className="App">
      <Header />
      <main className="main">
        <LottoMachine />
        <ResultNav results={results} />
      </main>
      <LottoInput />
    </div>
  );
};

export default App;
