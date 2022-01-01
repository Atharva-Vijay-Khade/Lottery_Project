import React, { useState } from "react";
import Participants from "./Participants";
import "./css/maincontainer.css";
import badgeImage from "../assets/badge-image.png";
import Winners from "./Winners";
const MainContainer = () => {
  let [prizepool, setPrizePool] = useState(0);
  return (
    <div className="main-container">
      <div className="container__content">
        <h1>GLOBAL BLOCKCHAIN LOTTERY</h1>
        A decentralized lottery system on the ethereum network.
        <br></br>
        Note: This is a learning project and is hosted on Rinkeby test network.
      </div>
      <div className="main-container__badge">
        <div className="main-container__badge__image-n-text">
          <img src={badgeImage} alt="" />
          <h5>Current Pool 🤑</h5>
          <h1>
          <strong>{prizepool}</strong> ETH
          </h1>
        </div>
        <Winners />
      </div>
      <Participants setPrizePool={setPrizePool} />
    </div>
  );
};

export default MainContainer;
