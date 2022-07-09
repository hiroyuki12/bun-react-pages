import logo from "./logo.svg";
import * as React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to React!</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <a href="https://mbp.hatenablog.com/entry/2022/07/09/201047" target="_blank">
            環境構築
         </a>
       </p>
      </header>
    </div>
  );
}

export default App;
