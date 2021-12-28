import "./App.css";
import React from "react";
import Play from "./components/Play";
import Clock from "./components/Clock";
import InfoBanner from "./components/InfoBanner";
import MainContainer from "./components/MainContainer";


function App() {
  return (
    <>
      <header>
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
