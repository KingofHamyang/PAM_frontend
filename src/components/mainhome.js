import React, { Component } from "react";
import "./mainhome.css";

export default class mainhome extends Component {
  render() {
    return (
      <div>
        <h1> 설문조사 플랫폼</h1>

        <p>
          설문조사를 등록하고, 참여할 수 있는 플랫폼입니다. 참여시 포인트를
          획득하며, 설문을 등록하기 위해선 포인트가 필요합니다.
          <h2>이벤트!</h2>
          <p>현재 가입시 100포인트 무료지급</p>
        </p>
      </div>
    );
  }
}
