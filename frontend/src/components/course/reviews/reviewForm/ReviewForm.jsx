import React, { Component } from "react";
import { Form, Button, Grid, TextArea } from "semantic-ui-react";

import DifficultyRating from "./DifficultyRating";
import ClassRating from "./ClassRating";
import Hours from "./Hours";
import Term from "./Term";

import "./ReviewForm.scss";

class ReviewForm extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="review-container">
          <Term professors={this.props.professors} />
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <div class="question">Hours spent per week:</div>
              </Grid.Column>
              <Grid.Column width={10}>
                <div class="centerMe">
                  <Hours />
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}>
                <div class="question">Rating:</div>
              </Grid.Column>
              <Grid.Column width={10}>
                <div class="centerMe">
                  <ClassRating />
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}>
                <div class="question">Difficulty:</div>
              </Grid.Column>
              <Grid.Column width={10}>
                <div class="centerMe">
                  <DifficultyRating />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <div class="strip">
            <Form>
              <TextArea placeholder="Tell us more" />
            </Form>
          </div>

          <div class="strip" id="submit">
            <div>
              <Button size="large">Submit Review</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
