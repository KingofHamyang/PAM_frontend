import React, { Component } from "react";
import "./Registersurvey.css";
import axios from "axios";

export default class Information extends Component {
  state = {
    id: 0,
    id_for_temp: 0,
    SurveyTitle: "",
    num_Question: 0,
    QuestionName: "",
    Answer: "",
    Temp_AnswerList: [],
    QuestionNameList: []
  };
  handleSubmitting = () => {
    /*const set = e => {
      this.setState(e);
    };*/

    var surveytitle = this.state.SurveyTitle;
    var data = this.state.QuestionNameList;
    axios
      .post("http://localhost:3001/router/Survey/survey_regist", {
        surveytitle: surveytitle,
        data: data
      })
      .then(function(response) {
        alert(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleAddingQuestion = () => {
    this.setState({
      num_Question: this.state.num_Question + 1,
      Answer: "",
      Temp_AnswerList: [],
      QuestionNameList: this.state.QuestionNameList.concat({
        id: this.state.id,
        name: this.state.QuestionName,
        contents: this.state.Temp_AnswerList
      }),
      id: this.state.id + 1
    });
  };
  handleQuestionName = e => {
    this.setState({
      QuestionName: e.target.value
    });
    console.log(this.state.QuestionName);
  };
  handleSurveyTitle = e => {
    this.setState({
      SurveyTitle: e.target.value
    });
  };
  handleQuestionAnswer = e => {
    this.setState({
      Answer: e.target.value
    });
    console.log(this.state.Answer);
  };
  addAnswer = () => {
    this.setState({
      Temp_AnswerList: this.state.Temp_AnswerList.concat(this.state.Answer)
    });
  };
  test = () => {
    console.log(this.state.Answer);
    console.log(this.state.Temp_AnswerList);
    console.log(this.state.QuestionNameList);
  };

  render() {
    const listofAnswer = this.state.QuestionNameList.map(
      ({ id, name, contents }) => (
        <div key={id}>
          {id} {name}
          {contents.map(contents => (
            <div key={contents}>{contents}</div>
          ))}
        </div>
      )
    );
    const templist = this.state.Temp_AnswerList.map(item => (
      <div key={item}>{item}</div>
    ));
    return (
      <div className="Register_survey">
        <input
          onChange={this.handleSurveyTitle}
          placeholder="설문 이름을 입력하세요."
        />
        <p>추가되고 있는 목록</p>
        {templist}
        {listofAnswer}
        <div>
          <input
            onChange={this.handleQuestionName}
            placeholder="질문 제목을 입력하세요"
          />
          <input
            onChange={this.handleQuestionAnswer}
            placeholder="질문에 답할 수 있는 목록을 입력하세요."
          />
          <button onClick={this.addAnswer} value="답변 목록 추가">
            답변 목록 추가
          </button>
          <button onClick={this.handleAddingQuestion} value="질문 추가">
            질문 추가
          </button>

          <button onClick={this.handleSubmitting} value="설문 등록하기!">
            설문 등록하기!
          </button>
        </div>
      </div>
    );
  }
}
