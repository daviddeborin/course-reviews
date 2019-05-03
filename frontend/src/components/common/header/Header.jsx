import React, { Component } from "react";
import { Button, Icon, Image } from "semantic-ui-react";
import "./Header.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <div id="header-container">
        <div id="header">
          <a href="/">
            <Button icon>
              <img
                src={require("../../../assets/images/book.png")}
                alt="home"
              />
            </Button>
          </a>
          <a href="/">
            <h1>The Course Review</h1>
          </a>
          <div className="button-container">
            <a href="course-reviews/#/login">
              <Button className="login" inverted basic color="white">
                Login
              </Button>
            </a>
            <a href="course-reviews/#/register">
              <Button className="login" inverted basic color="white">
                Signup
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
