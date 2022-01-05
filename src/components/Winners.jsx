import React, { Component } from "react";
import "./css/winner.css";

import web3 from "../web3";
import { LotteryAbi, LotteryAddress } from "../Lottery";

export default class Winners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: "",
      winner: ["To be declared...    Stay Tuned"],
      players: [],
      text: "Winner",
    };
  }

  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch);
  }

  async loadBlockchainData() {
    let accounts;
    try {
      accounts = await web3.eth.getAccounts();
    } catch (err) {
      this.setState({ winner: "Cannot Fetch" });
      console.log("please install metamask");
      return;
    }
    this.setState({ account: accounts[0] });

    const lotteryContract = new web3.eth.Contract(LotteryAbi, LotteryAddress);
    this.setState({ lotteryContract });
    const players = await lotteryContract.methods.getPlayers().call();

    this.setState({ players });

    if (players.length > 0) this.setState({ text: "Previous Winner" });
    else this.setState({ text: "Winner" });

    const winner = await lotteryContract.methods.winner().call();

    this.setState({ winner: winner });
  }

  render() {
    return (
      <div className="winner">
        <h2>{this.state.text}🥳</h2>

        <input type="text" value={this.state.winner} />
      </div>
    );
  }
}