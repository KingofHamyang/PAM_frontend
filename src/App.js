import React, { Component } from "react";
import LeftMenu from "./components/LeftMemu";
import mainhome from "./components/mainhome";
import Register from "./components/Register";
import surveylist from "./components/surveylist";
import surveyanswer from "./components/surveyanswer";
import Registersurvey from "./components/Registersurvey";
import surveyresult from "./components/survey_result";
import mysurvey from "./components/mysurvey";
import myinfo from "./components/myinfo";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <div className="App">
          <BrowserRouter>
            <LeftMenu />

            <Switch>
              <div className="mainhome">
                <Route exact path="/" component={mainhome} />
                <Route path="/register" component={Register} />
                <Route path="/registersurvey" component={Registersurvey} />
                <Route path="/surveylist" component={surveylist} />
                <Route path="/surveyanswer" component={surveyanswer} />
                <Route path="/surveyresult" component={surveyresult} />
                <Route path="/mysurvey" component={mysurvey} />
                <Route path="/myinfo" component={myinfo} />
              </div>
            </Switch>
          </BrowserRouter>
        </div>
      </CookiesProvider>
    );
  }
}

export default App;
