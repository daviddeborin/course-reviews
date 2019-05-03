import React, { Component } from "react";
import { Menu, Container, Button, Icon } from "semantic-ui-react";
import "./Header.scss";

class HeaderAlt extends Component {
  state = {};
  render() {
    const fixed = false;

    return (
      <Menu
        fixed={fixed ? "top" : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size="large"
        id="header-alt"
      >
        <Container>
        <a href="/">
          <Menu.Item position="left" id="header-alt-brand">
            <Icon name="book" />
            CourseReview
          </Menu.Item>
          </a>
          <Menu.Item position="right">
          
            <Button href="/#/login" as="a" inverted={!fixed}>
              Log in
            </Button>
            
            <Button
            href="/#/register"
              as="a"
              inverted={!fixed}
              primary={fixed}
              style={{ marginLeft: "0.5em" }}
            >
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default HeaderAlt;
