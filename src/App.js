import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Welcome from "./components/welcome";
class App extends Component {
  constructor() {
    super();
    this.state = {
      header: "Home",
      headerList: ["Home", "About Us", "Contact"]
    };
  }
  changeHeaderText = event => {
    this.setState({
      header: event.target.textContent
    });
  };

  render() {
    return (
      <div>
        <Header headerList={this.state.header} />
        <Welcome />
        <Sidebar
          list={this.state.headerList}
          changeHeaderText={this.changeHeaderText}
        />
        {/* <Login/> */}
      </div>
    );
  }
}

export default App;
