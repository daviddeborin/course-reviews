import React, { Component } from "react";
import { Rating } from "semantic-ui-react";

class ReviewForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <Rating icon="star" defaultRating={3} maxRating={5} />
      </div>
    );
  }
}

export default ReviewForm;
