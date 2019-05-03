import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password : ''
    }
  }
  postLogin = () => {
    if (this.state.password === '' || this.state.username === '') {
      notify.show('Please fill out the information', 'error', 5000, 'red');
      return;
    }
    console.log('state', this.state);
    axios.post('http://localhost:9000/login', {
      username : this.state.username,
      password : this.state.password
    })
    .then (function(res) {
      console.log(res);
    })
    .catch (function (err){
      notify.show('Invalid information', 'error', 5000, 'red');
      console.log(err);
    })
  }

  updateName = (event, data) => {
    this.setState({username : data.value});
  }
  updatePassword = (event, data) => {
    this.setState({password : data.value});
  }

  state = {};
  render() {
    return (
      <div>
      <Notifications></Notifications>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
            onChange={this.updateName}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            onChange={this.updatePassword}
          />

          <Button color="teal" fluid size="large" onClick={this.postLogin}>
            Login
          </Button>
        </Segment>
      </Form>
      </div>
    );
  }
}

export default Login;
