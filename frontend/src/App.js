import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DiscussionContainer from "./components/discussion/dicussionContainer/DicussionContainer";
import "./App.css";
import HomePage from "./components/home/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <Router>
          <div>
            <Switch>
              {/* <Route exact path="/" component={} /> */}
              <Route
                path="/courses/:subject/:courseNumber/discussion"
                component={DiscussionContainer}
              />
            </Switch>
          </div>
        </Router>
        <footer />
      </div>
    );
  }
}

export default App;
