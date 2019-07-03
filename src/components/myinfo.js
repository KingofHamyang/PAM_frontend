import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class myinfo extends Component {
  state = {
    name: "",
    point: ""
  };
  componentDidMount() {
    const thisstate = this;
    axios
      .post("http://localhost:3001/router/user/myinfo")
      .then(function(response) {
        if (response.data === "로그인 후에 이용해주세요.") {
        } else {
          thisstate.setState({
            name: response.data[0].name,
            point: response.data[0].point
          });
        }
      });
  }
  handleclikc = () => {
    console.log(this.state.surveylist);
  };
  render() {
    return (
      <div>
        <h1>이름</h1>
        <p>{this.state.name}</p>
        <h1>Point</h1>
        <p>{this.state.point}</p>
      </div>
    );
  }
}
