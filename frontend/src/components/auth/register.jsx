import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import axios from "axios";

class Register extends Component {
  state = {};

  handleSubmit = () => {
    axios
      .post("http://localhost:9000/signup/", {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
      })
      .then(function(response) {
        //redirect
        window.location.href = "/course-reviews/#/login";
      });
  };

  render() {
    return (
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Username"
            id="username"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            id="password"
          />

          <Button color="teal" fluid size="large" onClick={this.handleSubmit}>
            Create an Account
          </Button>
        </Segment>
      </Form>
    );
  }
}

export default Register;
