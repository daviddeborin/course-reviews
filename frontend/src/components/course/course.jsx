import React, { Component } from "react";
import { Segment, Tab, Menu, Input } from "semantic-ui-react";

import DiscussionContainer from "./discussion/discussionContainer/DiscussionContainer";
import ReviewContainer from "./reviews/review/container/ReviewContainer";
import Ratings from 'react-ratings-declarative';

import './course.scss'

// the content of the tab
const panes = [
  {
    menuItem: "Reviews",
    render: () => (
      <Tab.Pane>
        <ReviewContainer />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Discussion",
    render: () => (
      <Tab.Pane>
        <DiscussionContainer />
      </Tab.Pane>
    )
  }
];

class Course extends Component {
  state = {
    avgHours: '1-4',
    avgDifficulty: 4.6,
    avgRating: 1,
  };

  getHourColor = () => {
    const hours = this.state.avgHours;
    switch (hours) {
        case '1-4':
            return 'green';
        case '5-9':
            return 'yellowgreen';
        case '10-14':
            return 'gold';
        case '15-19':
            return 'orange';
        default:
            return 'red';
    }
  }

  getDifficultyColors = (border, rating = false) => {
    let diff = this.state.avgDifficulty;
    if (rating) {
      diff = this.state.avgRating;
    }
    if (diff < 1.5) {
      return 'green';
    }
    if (diff < 2.5) {
      return 'olive';
    }
    if (diff < 3.5) {
      if (border) {
        return 'yellow';
      }
      return 'gold';
    }
    if (diff < 4.5) {
      return 'orange';
    }
    return 'red';
  }

  render() {
    return (
      <div>
        {/*  Course Title  */}
        {/* <h1>CS 498 Applied Machine Learning</h1> */}
        <Menu borderless>
          <Menu.Item position="left">
            <h1>CS 498 Applied Machine Learning</h1>
          </Menu.Item>

          <Menu.Item position="right">
            <Input placeholder="Search" />
          </Menu.Item>
        </Menu>

        {/*  Metrics Dashboard   */}
        <Segment.Group horizontal>
          <Segment className='metric' textAlign='center'>
            Average Hours Per Week
            <Segment className='centerMetric' color={this.getHourColor()}>
              {this.state.avgHours}
            </Segment>
          </Segment>

          <Segment className='metric' textAlign='center'>
            Average Rating
            <Segment className='centerMetric' color='yellow'>
              <Ratings
                rating={this.state.avgRating}
                widgetRatedColors={'gold'}
                widgetDimensions='1.5em'
              >
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget />
              </Ratings>
            </Segment>
          </Segment>

          <Segment className='metric' textAlign='center'>
            Average Difficulty
            <Segment className='centerMetric' color={this.getDifficultyColors(true)}>
              <Ratings
                rating={this.state.avgDifficulty}
                widgetRatedColors={this.getDifficultyColors(false)}
                widgetDimensions='1.5em'
              >
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget />
              </Ratings>
            </Segment>
          </Segment>
        </Segment.Group>

        {/* Discussion/Review Tabs  */}
        <Tab panes={panes} />
      </div>
    );
  }
}

export default Course;
