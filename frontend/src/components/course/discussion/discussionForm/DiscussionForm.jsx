import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import Notifications, {notify} from 'react-notify-toast';
import axios from 'axios'


class DiscussionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment : '',
    }
  }

  updateComment = (event, data) => {
    this.setState({comment : data.value});
  }

  submitComment = () => {
    if (this.state.comment === '') {
      notify.show('Please enter a comment', 'error', 5000, 'red');
      return;
    } 

    notify.show('Sending comment please wait', 'success', 5000, 'green');
    axios.post("http://3.15.14.122:9000/comment/", {
      courseId : this.props.courseId,
      comment : this.state.comment
    }).then (() =>  {
      
      window.location.reload();
    }).catch (function (err) {
      notify.show('Comment was not posted, please try again', 'error', 5000, 'red');
    })
  }

  render() {
    return (
      <div>
        <Notifications></Notifications>
        <Form>
          <Form.TextArea
            label="Post"
            placeholder="Enter your comment."
            onChange={this.updateComment}
          />
          <Form.Button onClick={this.submitComment}>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default DiscussionForm;
