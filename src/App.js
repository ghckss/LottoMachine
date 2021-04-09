import { Header, LottoInput, LottoMachine, ResultNav } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <LottoMachine />
        <ResultNav />
      </main>
      <LottoInput />
    </div>
  );
}

export default App;
