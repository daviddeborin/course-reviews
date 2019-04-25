import React, { Component } from "react";
import { Segment, Tab } from "semantic-ui-react";
import DiscussionContainer from "./discussion/dicussionContainer/DicussionContainer";

// the content of the tab
const panes = [
  {
    menuItem: "Reviews",
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
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
  state = {};

  render() {
    return (
      <div>
        {/*  Course Title  */}
        <h1>CS 498 Applied Machine Learning</h1>

        {/*  Metrics Dashboard   */}
        <Segment.Group horizontal>
          <Segment>Metric 1</Segment>
          <Segment>Metric 2</Segment>
          <Segment>Metric 3</Segment>
          <Segment>Metric 4</Segment>
          <Segment>Metric 5..</Segment>
        </Segment.Group>

        {/* Discussion/Review Tabs  */}
        <Tab panes={panes} />
      </div>
    );
  }
}

export default Course;
