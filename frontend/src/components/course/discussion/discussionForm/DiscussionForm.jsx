import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class DiscussionForm extends Component {
  state = {};
  render() {
    return (
      <Form>
        <Form.TextArea
          label="Post"
          placeholder="what do u have to say fucker"
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default DiscussionForm;
