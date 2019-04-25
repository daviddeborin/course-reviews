import React, { Component } from "react";
import { List, Button, Modal } from "semantic-ui-react";
import Review from "../Review";

class ReviewContainer extends Component {
  state = {
    Reviews: [
      {
        rating: 5
      },
      {
        rating: 2
      }
    ]
  };
  render() {
    return (
      <div>
        {/* button to add post */}
        <Modal trigger={<Button>New Review</Button>}>
          <Modal.Header>New Review</Modal.Header>
          <Modal.Content />
        </Modal>

        {/* this is the list of comments  */}
        <div>
          <List divided relaxed>
            {this.state.Reviews.map((p, i) => (
              <List.Item key={i}>
                <List.Content>
                  <Review />
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default ReviewContainer;
