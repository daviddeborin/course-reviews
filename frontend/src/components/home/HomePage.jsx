import React, { Component } from "react";
import Header from "../../components/common/header/Header";
import CourseSearchBar from "../../components/common/courseSearchBar/CourseSearchBar";
import "./HomePage.scss";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="search-container">
          <CourseSearchBar atHome={true} />
        </div>
      </div>
    );
  }
}

export default HomePage;
