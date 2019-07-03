import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class mysurvey extends Component {
  state = {
    surveylist: []
  };
  componentDidMount() {
    const thisstate = this;
    axios
      .post("http://localhost:3001/router/survey/survey_titles")
      .then(function(response) {
        if (response.data === "로그인 후에 이용해주세요.") {
          alert(response.data);
        } else {
          console.log(response.data);

          thisstate.setState({
            surveylist: response.data.map(data => ({
              data: data,
              visible: true
            }))
          });
        }
      });
  }
  handlesearch = e => {
    console.log(e.target.value);
    this.setState({
      surveylist: this.state.surveylist.map(function(data) {
        console.log(data.data.s_name);
        if (data.data.s_name.indexOf(e.target.value) !== -1) {
          data["visible"] = true;
          return data;
        } else {
          data["visible"] = false;
          return data;
        }
      })
    });
  };
  render() {
    var surveylist2component = this.state.surveylist.map(data => (
      <div
        key={data.data.s_ssq}
        style={{
          display: data.data.s_id === this.props.location.state.id ? "" : "none"
        }}
      >
        <h1>설문 제목 : {data.data.s_name}</h1>
        <p>설문게시자 : {data.data.s_id}</p>
        <Link
          to={{
            pathname: "/surveyanswer",
            state: { s_ssq: data.data.s_ssq, s_name: data.data.s_name }
          }}
        >
          설문하러가기
        </Link>
        <Link
          to={{
            pathname: "/surveyresult",
            state: { s_ssq: data.data.s_ssq, s_name: data.data.s_name }
          }}
        >
          설문 통계 확인
        </Link>
      </div>
    ));
    return (
      <div>
        설문목록
        {surveylist2component}
      </div>
    );
  }
}
