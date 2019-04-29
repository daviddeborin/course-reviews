import React, { Component } from "react";
import { Form, Button, Grid, Dropdown, TextArea } from "semantic-ui-react";

import DifficultyRating from './DifficultyRating'
import ClassRating from './ClassRating'
import Hours from './Hours'
import Term from './Term'

import "./ReviewForm.scss";


class ReviewForm extends Component {

  render() {

    return (
      <div id='wrapper'>
        <div id="review-container">
          
          <Term professors={this.props.professors}/>
          <Hours/>
          <ClassRating/>
          <DifficultyRating/>

          <div class='strip'>
            <p>
              Please tell us about the class:
            </p>
            <Form>
              <TextArea placeholder='Tell us more' />
            </Form>
          </div>

          <div class='strip' id='submit'>
            <div>
            <Button size='large' >Submit Review</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
