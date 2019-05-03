import React, { Component } from "react";
import { List, Button, Modal } from "semantic-ui-react";
import Review from "../Review";
import ReviewForm from "../../reviewForm/ReviewForm";
import "./ReviewContainer.scss";
import axios from "axios";

class ReviewContainer extends Component {
  state = {
    Reviews: []
  };

  componentWillMount() {
    var url = "http://localhost:9000/review/" + this.props.courseId;

    axios.get(url).then(res => {
      console.log(res.data);
      this.setState({ Reviews: res.data });
    });
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
        <div>
          <List divided relaxed>
            {this.state.Reviews.map((p, i) => (
              <List.Item key={i}>
                <List.Content>
                  <Review data={p} />
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
