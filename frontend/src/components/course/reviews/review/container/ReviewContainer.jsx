import React, { Component } from "react";
import { List } from "semantic-ui-react";
import Review from "../Review";
import "./ReviewContainer.scss";
import axios from "axios";

class ReviewContainer extends Component {

  showReviews = () => {
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
        {/* this is the list of comments  */}
        {this.showReviews()}
      </div>
    );
  }
}

export default ReviewContainer;
