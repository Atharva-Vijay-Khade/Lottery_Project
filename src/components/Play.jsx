import React, { Component } from "react";

import web3 from '../web3';
import {LotteryAbi, LotteryAddress} from '../Lottery';

export default class Play extends Component {

  constructor(props) {
    super(props);

    this.state = {
      account: "",
      list : ["not yet declared"],
      value : "1",
      lotteryContract : "",
      isManager: false
    };
  }

  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch);
  }

  addNewPlayer = async () => {
    console.log(this);
    await this.state.lotteryContract.methods.enter().send({
      from : this.state.account , value : web3.utils.toWei(this.state.value,'ether')
    });
  }

  pickWinner = async () => {
    console.log(this);
    await this.state.lotteryContract.methods.pickWinner().send({
      from : this.state.account
    });
  }
  
  async loadBlockchainData() {

    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const lotteryContract = new web3.eth.Contract(LotteryAbi, LotteryAddress);
    this.setState({ lotteryContract });

    const checkManager = await lotteryContract.methods.manager().call();

    if(this.state.account == checkManager)
      this.setState({isManager: true});

    console.log(this.state.account);

    console.log(lotteryContract);

    // const list = await lotteryContract.methods.getPlayers().call();

    // this.setState({list});


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
      <div>
        <button onClick={this.addNewPlayer} type="button" className="btn btn-success btn-lg">
          Play
        </button>
        {"        "}
        { this.state.isManager && <button onClick={this.pickWinner} type="button" className="btn btn-success btn-lg">
          Pick Winner
          </button>
        }
      </div>
    );
  }
}
