import React, { Component } from "react";
import axios from "axios";
export default class Register extends Component {
  state = {
    ID: "",
    password: "",
    name: "",
    studentID: 0
  };
  handleID = e => {
    this.setState({
      ID: e.target.value
    });
  };
  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleStudentID = e => {
    this.setState({
      studentID: e.target.value
    });
  };
  registerSubmit = () => {
    axios
      .post("http://localhost:3001/router/User/regist", {
        ID: this.state.ID,
        password: this.state.password,
        name: this.state.name,
        studentID: this.state.studentID
      })
      .then(function(response) {
        alert(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <h1>회원가입</h1>
        <input
          onChange={this.handleID}
          type="text"
          placeholder="아이디를 입력하세요."
          className="Register-ID"
        />
        <input
          onChange={this.handlePassword}
          type="password"
          placeholder="비밀번호를 입력하세요."
          className="Register-ID"
        />
        <input
          onChange={this.handleName}
          type="text"
          placeholder="이름을 입력하세요."
          className="Register-ID"
        />
        <input
          onChange={this.handleStudentID}
          type="password"
          placeholder="학번을 입력하세요."
          className="Register-ID"
        />
        <div className="Register-button">
          <button onClick={this.registerSubmit}>완료</button>
        </div>
      </div>
    );
  }
}
