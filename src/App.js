import "./App.css";
import React from "react";
import Play from "./components/Play";
import Clock from "./components/Clock";
import InfoBanner from "./components/InfoBanner";
import MainContainer from "./components/MainContainer";
import logo from "./assets/lottery-icon-12.png";

function App() {
  return (
    <>
      <header>
        <img className="logo-img" src={logo} alt="" />
        <h1>Lottery Project</h1>
      </header>
      <MainContainer />
      <Clock />
      <InfoBanner />
      <Play />
    </>
  );
}

export default App;
