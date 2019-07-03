import React, { Component } from "react";
import axios from "axios";

var _ = require("lodash");
export default class surveyresult extends Component {
  state = {
    data: [],
    newdata: []
  };
  componentDidMount() {
    const thisstate = this;

    axios
      .post("http://localhost:3001/router/survey/survey_result", {
        s_ssq: thisstate.props.location.state.s_ssq
      })
      .then(response => {
        console.log(response.data);
        var datawillsave = _.groupBy(response.data, "a_q_name");
        for (var key in datawillsave) {
          thisstate.setState({
            data: thisstate.state.data.concat({
              data: datawillsave[key]
            })
          });
        }
      });
  }
  handleClick = () => {
    console.log(this.state.data);
  };
  render() {
    var dataparsed = this.state.data.map(data => (
      <div>
        <h1>{data.data[0].a_q_name}</h1>
        {data.data.map(datainlist => (
          <p>
            <div>{datainlist.answer}</div>
            <div>갯수 = {datainlist["COUNT(*)"]}</div>
          </p>
        ))}
      </div>
    ));
    return <div>{dataparsed}</div>;
  }
}
