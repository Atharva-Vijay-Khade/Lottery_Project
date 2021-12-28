import React, { Component } from "react";
import "./css/play.css";
import web3 from "../web3";
import { LotteryAbi, LotteryAddress } from "../Lottery";

export default class Play extends Component {
  constructor(props) {
    super(props);
    this.userclickedonce = false;
    this.state = {
      account: "",
      playtext: "Play - As Easy As 1, 2, 3",
      list: ["not yet declared"],
      value: "1",
      lotteryContract: "",
    };

    this.setIsAdmin = props.setIsAdmin;
  }

  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch);
  }

  addNewPlayer = async () => {
    // console.log(this);
    try {
      await this.state.lotteryContract.methods.enter().send({
        from: this.state.account,
        value: web3.utils.toWei(this.state.value, "ether"),
      });
    } catch (error) {
      this.setState({ playtext: "Some Error Occured" });
      return;
    }
    this.setState({ playtext: "You Enrolled ^-^" });
  };

  pickWinner = async () => {
    console.log(this);
    await this.state.lotteryContract.methods.pickWinner().send({
      from: this.state.account,
    });
  };

  async loadBlockchainData() {
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const lotteryContract = new web3.eth.Contract(LotteryAbi, LotteryAddress);
    this.setState({ lotteryContract });

    const checkManager = await lotteryContract.methods.manager().call();

    if (this.state.account === checkManager) {
      this.setIsAdmin(true);
    }

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

  handleClickEvent = () => {
    if (this.userclickedonce === true) {
      alert("Please Refresh the Page.");
      return;
    }

    this.userclickedonce = true;
    this.setState({ playtext: "Adding you..." });
    setTimeout(() => {
      this.setState({
        playtext: "Please follow the MetaMask Instructions...",
      });
    }, 2000);
    this.addNewPlayer();
  };
  render() {
    return (
      <div onClick={this.handleClickEvent} className="play-btn">
        {this.state.playtext}
      </div>
    );
  }
}
