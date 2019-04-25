import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Course from "./components/course/course";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/common/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div id="app-body-container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/courses/" component={Course} />
              <Route path="/login/" component={Login} />
              <Route path="/register/" component={Register} />
            </Switch>
          </div>
        </Router>
        <footer />
      </div>
    );
  }
}

export default App;
