import React, { Component } from "react";
import { Rating, Button } from "semantic-ui-react";

class Review extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>Term Taken:</h2>
        <h2>Professor: {this.props.data.professor}</h2>
        <h2>Overall Rating: {this.props.data.rating}</h2>
      </div>
    );
  }
}

export default Review;
