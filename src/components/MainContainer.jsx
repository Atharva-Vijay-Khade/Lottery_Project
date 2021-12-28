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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <div className="main-container__badge">
        <div className="main-container__badge__image-n-text">
          <img src={badgeImage} alt="" />
          <h5>Current Pool 🤑</h5>
          <h1>
            $ <strong>{prizepool}</strong>
          </h1>
        </div>
        <Winners />
      </div>
      <Participants setPrizePool={setPrizePool} />
    </div>
  );
};

export default MainContainer;
