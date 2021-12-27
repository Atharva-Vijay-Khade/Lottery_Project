import React, { Component } from "react";
import "./css/participants.css";

import web3 from '../web3';
import {LotteryAbi, LotteryAddress} from '../Lottery';

export default class Participants extends Component {

  constructor(props) {
    super(props);

    this.state = {
      account: "",
      list : ["Fetching..."]
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

    const list = await lotteryContract.methods.getPlayers().call();

    this.setState({list});


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
      <div className="participants">
        <h1>Participants</h1>
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
