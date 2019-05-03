import React, { Component } from "react";
import { List } from "semantic-ui-react";
import "./DiscussionContainer.scss";
import axios from "axios";

class DiscussionContainer extends Component {
  showDiscussion = () => {
    if (this.props.discussionPosts.length) {
      return (
        <div>
          <List divided relaxed>
            {this.props.discussionPosts.map((p, i) => (
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
      )
    }
  }
  render() {
    return (
      <div>
        
        {/* this is the list of comments  */}
        {this.showDiscussion()}
      </div>
    );
  }
}

export default DiscussionContainer;
