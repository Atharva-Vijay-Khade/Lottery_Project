import React, { Component } from "react";
import "./css/infobanner.css";
import lotteryImage from "../assets/lottery-image.webp";
export default class InfoBanner extends Component {
  render() {
    return (
      <div className="info-container">
        <img src={lotteryImage} alt="" />
        <div className="info-container__rules-and-regu">
          <h1>Rules To Participate</h1>
          <ul>
            <li>Lorem ipsum dolor</li>
            <li> sit amet, consectetur</li>
            <li> adipiscing elit, sed do</li>
            <li> eiusmod tempor incididunt</li>
          </ul>
        </div>
      </div>
    );
  }
}
