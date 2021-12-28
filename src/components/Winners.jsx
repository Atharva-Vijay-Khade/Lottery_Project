import React, { Component } from "react";
import "./css/winner.css";

import web3 from "../web3";
import { LotteryAbi, LotteryAddress } from "../Lottery";

export default class Winners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: "",
      winner: ["TBD..."],
      players: [],
      text: "winner",
    };
  }

  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch);
  }

  async loadBlockchainData() {
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const lotteryContract = new web3.eth.Contract(LotteryAbi, LotteryAddress);
    this.setState({ lotteryContract });

    console.log(this.state.account);

    console.log(lotteryContract);

    const players = await lotteryContract.methods.getPlayers().call();

    this.setState({ players });

    if (players.length > 0) this.setState({ text: "Previous Winner" });
    else this.setState({ text: "Winner" });

    const winner = await lotteryContract.methods.winner().call();

    this.setState({ winner: winner });

    // await lotteryContract.methods.reset().call();

    // const points = await ratingContract.methods.getPoints(0).call();

    // this.setState({ points });
    //console.log(points);

    // const count = await ratingContract.methods.getCount(0).call();

    // this.setState({ count });
    // console.log(count);
    // var rting = points / count;
    // this.setState({ rting });
  }

  render() {
    return (
      <div className="winner">
        <h2>{this.state.text}</h2>

        <input type="text" value={this.state.winner} />
      </div>
    );
  }
}
