import React, { Component } from "react";

import { Segment} from "semantic-ui-react";

class Review extends Component {

  render() {
    console.log(this.props.data);
    let data = this.props.data;
    return (
      <div>

        {/*  Metrics Dashboard   */}
        <Segment.Group horizontal>
          <Segment className='metric' textAlign='center'>
            Term Taken
            <Segment className='centerMetric' >
              {data.term}
            </Segment>
          </Segment>

          <Segment className='metric' textAlign='center'>
            Professor
            <Segment className='centerMetric'>
                {data.professor}
            </Segment>
          </Segment>

          <Segment className='metric' textAlign='center'>
            Overall Rating
            <Segment className='centerMetric' /*color={this.getRatingColor(true)}*/>
              {data.rating}
            </Segment>
          </Segment>
        </Segment.Group>

        <Segment.Group horizontal>
        <Segment className='metric' textAlign='center'>
            Review
            <Segment className='centerMetric' >
              {data.review}
            </Segment>
          </Segment>
        </Segment.Group>

      </div>
    );
  }
}

export default Review;
