import React, { Component } from "react";
import axios from "axios";

import { Map } from "immutable";
var _ = require("lodash");

export default class surveyanswer extends Component {
  state = {
    data: [],
    sq_s_ssq: 0,
    Answers: [],
    chklist: Map({})
  };
  componentDidMount() {
    const s_ssq = this.props.location.state.s_ssq;
    const thisstate = this;
    axios
      .post("http://localhost:3001/router/survey/survey_details", {
        s_ssq: s_ssq
      })
      .then(function(response) {
        var answerlist = _.groupBy(response.data, "q_name");

        for (var key in answerlist) {
          console.log(answerlist[key]);

          thisstate.setState({
            data: thisstate.state.data.concat({ data: answerlist[key] }),
            sq_s_ssq: answerlist[key][0].sq_s_ssq,

            chklist: thisstate.state.chklist.set(
              answerlist[key][0].q_name,
              "asdf"
            )
          });
        }
      });
  }
  handleClick = () => {
    axios
      .post("http://localhost:3001/router/survey/survey_submit", {
        data: this.state.chklist,
        sq_s_ssq: this.state.sq_s_ssq
      })
      .then(response => {
        alert(response.data);
      });
  };
  handleAddAnswer = e => {
    var key_to_find = e.target.name.toString();
    this.setState({
      chklist: this.state.chklist.set(key_to_find, e.target.value.toString())
    });
  };
  render() {
    var datanew = this.state.data.map(answer => (
      <div>
        <h1>{answer.data[0].q_name}</h1>
        {answer.data.map(datainlist => (
          <p>
            <div>{datainlist.Answer}</div>
            <input
              type="checkbox"
              checked={
                this.state.chklist.get(answer.data[0].q_name) ===
                datainlist.Answer
                  ? true
                  : false
              }
              name={answer.data[0].q_name}
              onClick={this.handleAddAnswer}
              value={datainlist.Answer}
            />
          </p>
        ))}
      </div>
    ));
    return (
      <div className="surveyanswer">
        <div>설문 : {this.props.location.state.s_name}</div>
        <button onClick={this.handleClick}>답변 제출</button>
        {datanew}
      </div>
    );
  }
}
