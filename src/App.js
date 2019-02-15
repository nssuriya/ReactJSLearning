import React, { Component } from "react";
import "./App.css";
import { Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import Contact from "./components/contact";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import history from "./history";
import Welcome from "./components/welcome";
class App extends Component {
  constructor() {
    super();
    this.state = {
      header: "Welcome",
      headerList: ["Home", "About Us", "Contact"],
      urlList: {
        Home: "/",
        "About Us": "/aboutUs",
        Contact: "/contact"
      }
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
        <Router history={history}>
          <div>
            <Route exact path="/" component={Welcome} />
            <Route
              path="/"
              render={props => (
                <Sidebar
                  list={this.state.headerList}
                  changeHeaderText={this.changeHeaderText}
                  urlList={this.state.urlList}
                  {...props}
                />
              )}
            />
            <Route exact path="/home" component={Home} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
