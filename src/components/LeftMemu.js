import React, { Component } from "react";
import Information from "./Infomation";
import MenuComponent from "./MenuComponent";
import { Link } from "react-router-dom";

import "./LeftMenu.css";

export default class LeftMenu extends Component {
  render() {
    return (
      <div className="Leftmenu">
        <Link to="/">메인화면</Link>
        <Information />
        <MenuComponent />
      </div>
    );
  }
}
