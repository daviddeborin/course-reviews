import React, { Component } from "react";
import { Segment, Button, Grid, Dropdown, Menu } from "semantic-ui-react";
import "./ReviewForm.scss";
import Ratings from 'react-ratings-declarative';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: [],
      years: [],
      professors: ["Wade", "Geoffrey", "Angrave"],
      rating: 1,
      difficulty: 1,
      hours: '1-4'
    };
  }

  getYears = startYear => {
    let x = [];
    for (let i = startYear; i <= 2019; i++) {
      x.push({ key: i, text: parseInt(i), value: i - startYear });
    }

    return x;
  };

  getProfessors = () => {
    let i = -1;
    return this.state.professors.map(prof => {
      i++;
      return { key: i, text: prof, value: i };
    });
  };

  changeRating = (nextValue) => {
    this.setState({ rating: nextValue });
  };

  changeDifficulty = (nextValue) => {
    this.setState({ difficulty: nextValue });
  };

  getColor = () => {
    const rate = this.state.difficulty;
    if (rate == 1) {
      return 'green';
    }
    if (rate == 2) {
      return 'olive';
    }

    if (rate == 3) {
      return 'gold';
    }

    if (rate == 4) {
      return 'orange';
    }

    if (rate == 5) {
      return 'red';
    }
  }

  changeHours = (event, data) => {
    this.setState({hours: data.children})
  }



  render() {
    const terms = [
      { key: 1, text: "Fall", value: 1 },
      { key: 2, text: "Spring", value: 2 },
      { key: 3, text: "Summer", value: 3 },
      { key: 4, text: "Winter", value: 4 }
    ];

    return (
      <div id="review-container">

        <div className="strip" id="logistics">
          <Grid textAlign="center" columns={3}>
            <Grid.Column id="term">
              <Dropdown
                placeholder="Term"
                clearable
                options={terms}
                selection
              />
            </Grid.Column>
            <Grid.Column id="year">
              <Dropdown
                placeholder="Year"
                clearable
                options={this.getYears(2010)}
                selection
              />
            </Grid.Column>
            <Grid.Column id="professor">
              <Dropdown
                placeholder="Professor"
                clearable
                options={this.getProfessors()}
                selection
              />
            </Grid.Column>
            <Grid.Row />
          </Grid>
          <div class='rating'>
            <div>
              Hours spent per week:
            </div>
            <Button.Group size='large' toggle>
              <Button onClick={this.changeHours} active={this.state.hours === '1-4'}>1-4</Button>
              <Button onClick={this.changeHours} active={this.state.hours === '5-9'}>5-9</Button>
              <Button onClick={this.changeHours} active={this.state.hours === '10-14'}>10-14</Button>
              <Button onClick={this.changeHours} active={this.state.hours === '15-19'}>15-19</Button>
              <Button onClick={this.changeHours} active={this.state.hours === '20+'}>20+</Button>
            </Button.Group>
          </div>
          <div class='rating'>
            <div>
              Rating:
            </div>
            <Ratings
              rating={this.state.rating}
              widgetRatedColors={'gold'}
              changeRating={this.changeRating}
              widgetHoverColors={'gold'}
            >
              <Ratings.Widget/>
              <Ratings.Widget/>
              <Ratings.Widget/>
              <Ratings.Widget/>
              <Ratings.Widget />
            </Ratings>
          </div>
          <div class='rating'>
            <div>
              Difficulty:
            </div>
            <Ratings
              rating={this.state.difficulty}
              widgetRatedColors={this.getColor()}
              changeRating={this.changeDifficulty}
              widgetHoverColors={this.getColor()}
            >
              <Ratings.Widget/>
              <Ratings.Widget/>
              <Ratings.Widget/>
              <Ratings.Widget/>
              <Ratings.Widget />
            </Ratings>
          </div>
        </div>
      </div>

      // <div>
      //   <div id="logistics-container">
      //     <div className="date" id="term-taken">
      //       <h1>Select Term taken</h1>
      //       <Button.Group vertical floated="left" size="medium">
      //         <Button>Fall</Button>
      //         <Button>Spring</Button>
      //         <Button>Summer</Button>
      //         <Button>Winter</Button>
      //       </Button.Group>
      //     </div>
      //     <div className="date" id="year-taken">

      //     </div>
      //     <div className="date" id="proffesor">

      //     </div>
      //   </div>
      //   <div>
      //     <Rating icon="star" defaultRating={3} maxRating={5} />
      //   </div>
      // </div>
    );
  }
}

export default ReviewForm;
