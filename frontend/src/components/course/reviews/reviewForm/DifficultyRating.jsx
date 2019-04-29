import React, { Component } from "react";
import Ratings from 'react-ratings-declarative';

class DifficultyRating extends Component {
    state = {
        difficulty : 1
    }

    changeDifficulty = (nextValue) => {
        this.setState({ difficulty: nextValue });
    };

    getColor = () => {
        const rate = this.state.difficulty;
        switch (rate) {
            case 1:
                return 'green';
            case 2:
                return 'yellowgreen';
            case 3:
                return 'gold';
            case 4:
                return 'orange';
            default:
                return 'red';
        }
    }

    render () {
        return (
            <div class='rating strip'>
                <div>
                    Difficulty:
                </div>
                <Ratings
                    rating={this.state.difficulty}
                    widgetRatedColors={this.getColor()}
                    changeRating={this.changeDifficulty}
                    widgetHoverColors={this.getColor()}
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

export default DifficultyRating