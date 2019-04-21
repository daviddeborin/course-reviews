import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DiscussionContainer from "./components/discussion/dicussionContainer/DicussionContainer";
import './App.css';
import Header from './components/common/header/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router>
          <div>
            <Switch>
              {/* <Route exact path="/" component={} /> */}
              <Route path="/courses/:subject/:courseNumber/discussion" component={DiscussionContainer} />
            </Switch>
          </div>
        </Router>
        <footer></footer>
      </div>
    );
  }
}

export default App;
