import "./App.css";
import React from "react";
import Play from "./components/Play";
import Winners from "./components/Winners";
import Clock from "./components/Clock";
import InfoBanner from "./components/InfoBanner";

import web3 from './web3';
import MainContainer from "./components/MainContainer";

class App extends React.Component {
  render() {
    console.log(web3.version);
    return (
      <>
        <header>
          <h1>Lottery Project</h1>
        </header>
        <MainContainer />
        <Clock />
        <InfoBanner />
        <Winners />
        <Play />
      </>
    );
  }
}
export default App;
