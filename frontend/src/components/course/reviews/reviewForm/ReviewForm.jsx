import React, { Component } from "react";
import { Form, Button, Grid, TextArea } from "semantic-ui-react";
import Notifications, {notify} from 'react-notify-toast';
import axios from 'axios';

import DifficultyRating from "./DifficultyRating";
import ClassRating from "./ClassRating";
import Hours from "./Hours";
import Term from "./Term";

import "./ReviewForm.scss";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating : 1,
      difficulty: 1,
      hours : '1-4',
      term : '',
      year : '',
      professor : '',
      review : '',
      disabled : false
    }
  }

  // callbacks
  getChildRating = (newRating) => {
    this.setState({rating : newRating})
  }
  getChildDifficulty = (newDifficulty) => {
    this.setState({difficulty : newDifficulty})
  }
  getChildHours = (newHours) => {
    this.setState({hours : newHours})
  }
  getChildTerm = (newTerm) => {
    this.setState({term : newTerm})
  }
  getChildYear = (newYear) => {
    this.setState({year : newYear})
  }
  getChildProfessor = (newProfessor) => {
    this.setState({professor : newProfessor})
  }

  updateDescription = (event, data) => {
    this.setState({review: data.value});
  }

  checkComplete = () => {
    let {rating, difficulty, hours, term, year, professor, review} = this.state;
    let message = "You are missing the following fields: \t"
    let missing = [];

    if (term === '') {
      missing.push('Term');
    }
    if (year === '') {
      missing.push('Year');
    }
    if (professor === '') {
      missing.push('Professor');
    }
    if (review === '') {
      missing.push('Description');
    }
   
    if (!missing.length) {
      return true;
    }

    message += missing[0];
    missing.shift();

    if (missing.length) {
      missing.map(miss => {
        message += ', '
        message += miss
      })
    }

    return message;
  }

  submitForm = () => {
    let canSubmit = this.checkComplete();
    if (canSubmit === true) {
       // SEND FORM
      let oldthis = this;
      this.setState({disabled : true})
      notify.show("Sending form, please wait",'success', 5000, 'green');
      console.log({
        courseId: this.props.courseId,
        subject : this.props.subject,
        number : this.props.courseNumber,
        formData : this.state,
      })

      var url = "http://3.15.14.122:9000/review/"
      axios.post(url, {
        courseId: this.props.courseId,
        subject : this.props.subject,
        number : this.props.courseNumber,
        formData : this.state,
      }).then(function(res) {
        window.location.reload();

      }).catch(function(err) {
        notify.show("Review was not sent, please try again", 'error', 5000, 'red');
        oldthis.setState({disabled : false});
      });

    } else {
      notify.show(canSubmit, "error", 5000, 'red');
    }
  }

  render() {
    
    return (
      <div id="wrapper">
        <div id="review-container">
          <Term 
            professors={this.props.professors} 
            sendTerm={this.getChildTerm} 
            sendYear={this.getChildYear} 
            sendProfessor={this.getChildProfessor} 
          />
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <div class="question">Rating:</div>
              </Grid.Column>
              <Grid.Column width={10}>
                <div class="centerMe">
                  <ClassRating sendParent={this.getChildRating} />
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}>
                <div class="question">Difficulty:</div>
              </Grid.Column>
              <Grid.Column width={10}>
                <div class="centerMe">
                  <DifficultyRating sendParent={this.getChildDifficulty}/>
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}>
                <div className="question">Hours spent per week:</div>
              </Grid.Column>
              <Grid.Column width={10}>
                <div class="centerMe">
                  <Hours sendParent={this.getChildHours}/>
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}>
                <div class="question">Describe the class:</div>
              </Grid.Column>
              <Grid.Column width={10}>
                <div class="centerMe">
                    <Form>
                      <TextArea 
                        placeholder="Tell us more" 
                        onChange={this.updateDescription}
                        />
                    </Form>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
          <div class="strip" id="submit">
            <div>
              <Button disabled={this.state.disabled} size="large" onClick={this.submitForm}>Submit Review</Button>
            </div>
          </div>
          <Notifications></Notifications>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
