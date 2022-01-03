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
          <ul class="list-group">
            <li className="list-group-item">◉ Connect your metamask wallet</li>
            <li className="list-group-item">
              ◉ Set Rinkeby test network to your wallet
            </li>
            <li className="list-group-item">
              ◉ The entry price of the lottery is 1 ETH, make sure of have
              sufficient funds in your wallet
            </li>
            <li className="list-group-item">
              ◉ Click on play and confirm your payment over metamask
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
