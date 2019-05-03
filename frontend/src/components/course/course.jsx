import React, { Component } from "react";
import { Segment, Tab, Menu, Input } from "semantic-ui-react";

import DiscussionContainer from "./discussion/discussionContainer/DiscussionContainer";
import ReviewContainer from "./reviews/review/container/ReviewContainer";
import Ratings from "react-ratings-declarative";
import axios from "axios";
import "./course.scss";
import CourseSearchBar from "../common/courseSearchBar/CourseSearchBar";

class Course extends Component {
  state = {
    avgHours: "1-4",
    avgDifficulty: 4.6,
    avgRating: 1,
    courseInfo: {},
    display: true
  };

  componentWillMount() {
    var url =
      "http://localhost:9000/course/" +
      this.props.match.params.subject +
      "/" +
      this.props.match.params.courseNumber;

    axios
      .get(url)
      .then(res => {
        this.setState({ courseInfo: res.data, display: true });
      })
      .catch(err => {
        this.setState({ display: false });
      });
  }

  getHour = () => {
    var counts = [
      this.state.courseInfo.hours_1_4,
      this.state.courseInfo.hours_5_9,
      this.state.courseInfo.hours_10_14,
      this.state.courseInfo.hours_15_19,
      this.state.courseInfo.hours_20
    ];
    var labels = ["1-4", "5-9", "10-14", "15-19", "20+"];
    let i = counts.indexOf(Math.max(...counts));
    return labels[i];
  };

  getHourColor = () => {
    const hours = this.getHour();
    switch (hours) {
      case "1-4":
        return "green";
      case "5-9":
        return "yellowgreen";
      case "10-14":
        return "gold";
      case "15-19":
        return "orange";
      default:
        return "red";
    }
  };

  getDifficultyColors = (border, rating = false) => {
    let diff = this.state.courseInfo.difficulty;
    if (rating) {
      diff = this.state.courseInfo.rating;
    }
    if (diff < 1.5) {
      return "green";
    }
    if (diff < 2.5) {
      return "olive";
    }
    if (diff < 3.5) {
      if (border) {
        return "yellow";
      }
      return "gold";
    }
    if (diff < 4.5) {
      return "orange";
    }
    return "red";
  };

  render() {
    if (this.state.display) {
      const panes = [
        {
          menuItem: "Reviews",
          render: () => (
            <Tab.Pane>
              <ReviewContainer
                courseNumber={this.props.match.params.courseNumber}
                subject={this.props.match.params.subject}
                courseId={this.state.courseInfo.id}
              />
            </Tab.Pane>
          )
        },
        {
          menuItem: "Discussion",
          render: () => (
            <Tab.Pane>
              <DiscussionContainer
                courseNumber={this.props.match.params.courseNumber}
                subject={this.props.match.params.subject}
                courseId={this.state.courseInfo.id}
              />
            </Tab.Pane>
          )
        }
      ];

      let courseInfo = this.state.courseInfo;
      let number = courseInfo.number;
      if (number !== undefined) {
        number = number.substring(0, 3);
      }

      return (
        <div>
          {/*  Course Title  */}
          {/* <h1>CS 498 Applied Machine Learning</h1> */}
          <Menu borderless>
            <Menu.Item position="left">
              <h1>{courseInfo.subject + number + " " + courseInfo.title}</h1>
            </Menu.Item>

            <Menu.Item position="right">
              <CourseSearchBar />
            </Menu.Item>
          </Menu>

          {/*  Metrics Dashboard   */}
          <Segment.Group horizontal>
            <Segment className="metric" textAlign="center">
              Average Rating
              <Segment className="centerMetric" color="yellow">
                <Ratings
                  rating={this.state.courseInfo.rating}
                  widgetRatedColors={"gold"}
                  widgetDimensions="1.5em"
                >
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                </Ratings>
              </Segment>
            </Segment>

            <Segment className="metric" textAlign="center">
              Average Difficulty
              <Segment
                className="centerMetric"
                color={this.getDifficultyColors(true)}
              >
                <Ratings
                  rating={this.state.courseInfo.difficulty}
                  widgetRatedColors={this.getDifficultyColors(false)}
                  widgetDimensions="1.5em"
                >
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                </Ratings>
              </Segment>
            </Segment>

            <Segment className="metric" textAlign="center">
              Average Hours Per Week
              <Segment className="centerMetric" color={this.getHourColor()}>
                {this.getHour()}
              </Segment>
            </Segment>
          </Segment.Group>

          {/* Discussion/Review Tabs  */}
          <Tab panes={panes} />
        </div>
      );
    } else {
      return "Course Not Found";
    }
  }
}

export default Course;
