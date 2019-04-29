import React, { Component } from "react";
import Ratings from 'react-ratings-declarative';


class ClassRating extends Component {
    state = {
        rating : 1
    }

    changeRating = (nextValue) => {
        this.setState({ rating: nextValue });
    };

    render() {
        return (
            <div class='rating strip'>
            <div>
                Rating:
            </div>
            <Ratings
                rating={this.state.rating}
                widgetRatedColors={'gold'}
                changeRating={this.changeRating}
                widgetHoverColors={'gold'}
                widgetDimensions='1.5em'
            >
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget />
            </Ratings>
        </div>
        )
    }
}

export default ClassRating