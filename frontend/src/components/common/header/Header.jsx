import React, { Component } from "react";
import { Button, Icon, Image } from "semantic-ui-react";
import "./Header.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <div id="header-container">
        <div id="header">
          <Button icon>
            <img src={require("../../../assets/images/book.png")} alt="home" />
          </Button>
          <h1>The Course Review</h1>
          <div className="button-container">
            <Button className="login" inverted basic color="white">
              Login
            </Button>
            <Button className="login" inverted basic color="white">
              Signup
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
