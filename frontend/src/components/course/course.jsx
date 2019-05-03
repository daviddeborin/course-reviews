import React, { Component } from "react";
import { Segment, Tab, Menu, Input, Modal, Button } from "semantic-ui-react";

import DiscussionContainer from "./discussion/discussionContainer/DiscussionContainer";
import ReviewContainer from "./reviews/review/container/ReviewContainer";
import Ratings from "react-ratings-declarative";
import axios from "axios";
import "./course.scss";
import CourseSearchBar from "../common/courseSearchBar/CourseSearchBar";
import ReviewForm from "./reviews/reviewForm/ReviewForm";
import DiscussionForm from "./discussion/discussionForm/DiscussionForm";



class Course extends Component {
  state = {
    avgHours: "1-4",
    avgDifficulty: 4.6,
    avgRating: 1,
    courseInfo: {},
    display: true,
    reviews: [],
    discussionPosts: {}
  };

  componentDidMount() {
    var url =
      "http://localhost:9000/course/" +
      this.props.match.params.subject +
      "/" +
      this.props.match.params.courseNumber;

    axios
      .get(url)
      .then(res => {
        this.setState({ courseInfo: res.data, display: true });


        axios.get('http://localhost:9000/review/' + res.data.id).then((res2) => {
          this.setState({reviews: res2.data});
        }).catch();


        axios.get("http://localhost:9000/comment/" + res.data.id).then(res2 => {
          this.setState({ discussionPosts: res2.data });
        }).catch();
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
        return "olive";
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
              <Modal trigger={<Button id="new-rev-btn">New Review</Button>}>
                <Modal.Header>New Review</Modal.Header>
                <Modal.Content>
                  <ReviewForm courseNumber={this.props.courseNumber} subject={this.props.subject} />
                </Modal.Content>
              </Modal>

              <ReviewContainer
                courseNumber={this.props.match.params.courseNumber}
                subject={this.props.match.params.subject}
                courseId={this.state.courseInfo.id}
                reviews={this.state.reviews}
              />
            </Tab.Pane>
          )
        },
        {
          menuItem: "Discussion",
          render: () => (        
            <Tab.Pane>
              <Modal trigger={<Button id="new-post-btn">New Post</Button>}>
                <Modal.Header>New Post</Modal.Header>
                <Modal.Content>
                  <DiscussionForm />
                </Modal.Content>
              </Modal>
              <DiscussionContainer
                courseNumber={this.props.match.params.courseNumber}
                subject={this.props.match.params.subject}
                courseId={this.state.courseInfo.id}
                discussionPosts={this.state.discussionPosts}
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
