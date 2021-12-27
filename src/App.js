import "./App.css";
import React from "react";
import Participants from "./components/Participants";
import Play from "./components/Play";
import Winners from "./components/Winners";
import Clock from "./components/Clock";
import InfoBanner from "./components/InfoBanner";

import web3 from './web3';

class App extends React.Component {
  render() {
    console.log(web3.version);
    return (
      <>
        <header>
          <h1>Lottery Project</h1>
        </header>
        <div className="main-container">
          <div className="container__content">
            <h1>GLOBAL BLOCKCHAIN<br /> LOTTERY</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <Participants />
        </div>
        <Clock />
        <InfoBanner />
        <Winners />
        <Play />
      </>
    );
  }
}
export default App;
