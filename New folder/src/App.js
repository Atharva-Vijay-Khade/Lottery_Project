import "./App.css";
import React from "react";
import Participants from "./components/Participants";
import Play from "./components/Play";
import Winners from "./components/Winners";

import web3 from './web3';

class App extends React.Component {
  render() {
    console.log(web3.version);
    return (
      <>
        <h1>Lottery Project</h1>
        <Play />
        <div className="container">
          <div className="container__subcard">
            <Participants />
          </div>
          <div className="container__subcard">
            <Winners />
          </div>
        </div>
      </>
    );
  }
}
export default App;
