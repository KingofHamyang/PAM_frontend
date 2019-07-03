import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Information.css";
import axios from "axios";

export default class Information extends Component {
  state = {
    content: "로그인 해주세요.",
    name: "",
    logined: false,
    ID: "",
    Passwd: ""
  };
  handlechange_ID = e => {
    this.setState({
      ID: e.target.value
    });
  };
  handlechange_Passwd = e => {
    this.setState({
      Passwd: e.target.value
    });
  };
  handleLogOut = () => {
    const set = e => {
      this.setState(e);
    };
    axios
      .post("http://localhost:3001/router/User/logout")
      .then(function(response) {
        if (response.data === "로그아웃 완료!") {
          set({ logined: false, content: "로그인 해주세요" });
        }
        alert(response.data);
      });
  };

  handleLogin = () => {
    const set = e => {
      this.setState(e);
    };

    var idtosend = this.state.ID;
    var passwdtosend = this.state.Passwd;
    var idtoset = this.state.ID;
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3001/router/User/login", {
        ID: idtosend,
        password: passwdtosend,
        withCredentials: true
      })
      .then(function(response) {
        if (response.data === "로그인!") {
          console.log(response);
          set({
            logined: true,
            content: idtoset,
            ID: "",
            Passwd: ""
          });
        } else {
          alert("아이디나 비밀번호가 틀렸습니다!");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="Information">
        <h1 className="Information-contents">
          {!this.state.logined
            ? "로그인해주세요"
            : this.state.content + "님 환영합니다."}
        </h1>
        <input
          onChange={this.handlechange_ID}
          style={{ display: this.state.logined ? "none" : "" }}
          type="text"
          placeholder="아이디를 입력하세요."
          className="Information-ID"
        />
        <input
          onChange={this.handlechange_Passwd}
          style={{ display: this.state.logined ? "none" : "" }}
          type="password"
          placeholder="비밀번호를 입력하세요."
          className="Information-ID"
        />
        <p style={{ display: this.state.logined ? "" : "none" }}>
          {this.state.name}
        </p>
        <div className="Information-button">
          <button
            value="로그인"
            onClick={this.handleLogin}
            style={{ display: this.state.logined ? "none" : "" }}
          >
            로그인
          </button>

          <button
            value="로그아웃"
            onClick={this.handleLogOut}
            style={{ display: this.state.logined ? "" : "none" }}
          >
            로그아웃
          </button>
          <Link to="/register">회원가입</Link>
          <Link
            style={{ display: this.state.logined ? "" : "none" }}
            to={{
              pathname: "/mysurvey",
              state: { id: this.state.content }
            }}
          >
            내 설문 보기
          </Link>
        </div>
      </div>
    );
  }
}
