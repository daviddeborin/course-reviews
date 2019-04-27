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
          <Menu.Item position="left" id="header-alt-brand">
            <Icon name="book" />
            Course Review
          </Menu.Item>
          <Menu.Item position="right">
            <Button as="a" inverted={!fixed}>
              Log in
            </Button>
            <Button
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
