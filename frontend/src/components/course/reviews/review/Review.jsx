import React, { Component } from "react";

import { Segment} from "semantic-ui-react";

class Review extends Component {
  state = {
    termTaken: 'SP17',
    professor: 'Jaskirat Vig',
    overallRating: '7.8',
    review: "This was a v nice class. Gr8 job.",
  };

  /*getRatingColor = (border, rating = false) => {
    let diff = this.state.overallRating;
    if (diff > 8) {
      return 'green';
    }
    if (diff > 6) {
      return 'yellowgreen';
    }
    if (diff > 4) {
      return 'gold';
    }
    if (diff > 2) {
      return 'orange';
    }
    return 'red';
  }*/

  render() {
    return (
      <div>

        {/*  Metrics Dashboard   */}
        <Segment.Group horizontal>
          <Segment className='metric' textAlign='center'>
            Term Taken
            <Segment className='centerMetric' >
              {this.state.termTaken}
            </Segment>
          </Segment>

          <Segment className='metric' textAlign='center'>
            Professor
            <Segment className='centerMetric'>
                {this.state.professor}
            </Segment>
          </Segment>

          <Segment className='metric' textAlign='center'>
            Overall Rating
            <Segment className='centerMetric' /*color={this.getRatingColor(true)}*/>
              {this.state.overallRating}
            </Segment>
          </Segment>
        </Segment.Group>

        <Segment.Group horizontal>
        <Segment className='metric' textAlign='center'>
            Review
            <Segment className='centerMetric' >
              {this.state.review}
            </Segment>
          </Segment>
        </Segment.Group>

      </div>
    );
  }
}

export default Review;
