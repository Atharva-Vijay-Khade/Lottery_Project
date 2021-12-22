import React, { Component } from "react";
import "./css/winner.css";
export default class Winners extends Component {
  state = {
    list: ["Winner 1", "Winner 2", "Winner 3"],
  };
  render() {
    return (
      <div className="participants">
        <h1>Winners</h1>
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
