import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class DiscussionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment : '',
    }
  }

  render() {
    return (
      <Form>
        <Form.TextArea
          label="Post"
          placeholder="Enter your comment."
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default DiscussionForm;
