import React, { Component } from "react";
import "./css/participants.css";
export default class Participants extends Component {
  state = {
    list: ["Participant 1", "Participant 2", "Participant 3", "Participant 4"],
  };
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
