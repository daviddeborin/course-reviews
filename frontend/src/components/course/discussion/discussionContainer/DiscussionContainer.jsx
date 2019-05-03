import React, { Component } from "react";
import { List, Button, Modal } from "semantic-ui-react";
import DiscussionForm from "../discussionForm/DiscussionForm";
import "./DiscussionContainer.scss";
import axios from "axios";

class DiscussionContainer extends Component {
  state = {
    DiscussionPosts: []
  };

  componentWillMount() {
    var url = "http://localhost:9000/comment/" + this.props.courseID;

    axios.get(url).then(res => {
      this.setState({ DiscussionPosts: res.data });
    });
  }
  render() {
    return (
      <div>
        {/* button to add post */}
        <div>
          <Modal trigger={<Button id="new-post-btn">New Post</Button>}>
            <Modal.Header>New Post</Modal.Header>
            <Modal.Content>
              <DiscussionForm />
            </Modal.Content>
          </Modal>
        </div>
        {/* this is the list of comments  */}
        <div>
          <List divided relaxed>
            {this.state.DiscussionPosts.map((p, i) => (
              <List.Item key={i}>
                <List.Icon name="comment" size="small" verticalAlign="top" />
                <List.Content>
                  <List.Header>Date: {p.createdAt}</List.Header>
                  <List.Description>{p.comment}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default DiscussionContainer;
