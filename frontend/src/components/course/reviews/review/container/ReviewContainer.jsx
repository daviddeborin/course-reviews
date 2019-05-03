import React, { Component } from "react";
import { List, Button, Modal } from "semantic-ui-react";
import Review from "../Review";
import ReviewForm from "../../reviewForm/ReviewForm";
import "./ReviewContainer.scss";
import axios from "axios";

class ReviewContainer extends Component {

  showReviews = () => {
    console.log('reviews', this.props.reviews);
    if (this.props.reviews.length) {
      return (
        <div>
          <List divided relaxed>
            {this.props.reviews.map((p, i) => (
              <List.Item key={i}>
                <List.Content>
                  <Review data={p} />
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
        {/* button to add post */}
        <Modal trigger={<Button id="new-rev-btn">New Review</Button>}>
          <Modal.Header>New Review</Modal.Header>

          <Modal.Content>
            <ReviewForm courseNumber={this.props.courseNumber} subject={this.props.subject} />
          </Modal.Content>
        </Modal>

        {/* this is the list of comments  */}
        {this.showReviews()}
      </div>
    );
  }
}

export default ReviewContainer;
