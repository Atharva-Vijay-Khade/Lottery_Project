import React, { Component } from "react";
import "./css/participants.css";

import web3 from "../web3";
import { LotteryAbi, LotteryAddress } from "../Lottery";

export default class Participants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: "",
      list: ["Fetching..."],
    };
    this.setPrizePool = props.setPrizePool;
  }

  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch);
  }

  async loadBlockchainData() {
    let accounts;
    try {
      accounts = await web3.eth.getAccounts();
    } catch (err) {
      this.setState({
        list: ["Cannot Fetch Details."],
      });
      this.setPrizePool("- -");
      alert(
        "Metamask Extension is not Detected, or either it is disabled. Please Install MetaMask and refresh the page."
      );
      console.log("please install metamask");
      return;
    }
    this.setState({ account: accounts[0] });

    const lotteryContract = new web3.eth.Contract(LotteryAbi, LotteryAddress);
    this.setState({ lotteryContract });

    // console.log(this.state.account);

    // console.log(lotteryContract);

    const list = await lotteryContract.methods.getPlayers().call();

    this.setState({
      list: list.length === 0 ? ["No Participations yet"] : list,
    });
    this.setPrizePool(
      list.length === 0 ? "0.00" : this.state.list.length + ".00"
    );
  }

  render() {
    return (
      <div className="participants">
        <h1>Already Participated</h1>
        <ul className="list-group">
          {this.state.list.map((eachele) => {
            return (
              <li
                className="list-group-item lmao"
                key={this.state.list.indexOf(eachele)}
              >
                {eachele}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}