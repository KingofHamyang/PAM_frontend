import React, { Component } from "react";
import "./MenuComponent.css";
import { Link } from "react-router-dom";

export default class MenuComponent extends Component {
  render() {
    return (
      <div>
        <Link to="/Registersurvey">설문 등록하기</Link>
        <Link to="/surveylist">설문 목록 보기</Link>
        <Link to="/myinfo">내 정보 보기</Link>
      </div>
    );
  }
}
