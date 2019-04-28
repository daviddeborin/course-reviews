import React, { Head, Component } from "react";
import { Button, Grid, Dropdown, Menu } from "semantic-ui-react";
import "./ReviewForm.scss";
import StarRatings from './react-star-ratings';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: [],
      years: [],
      professors: ["Wade", "Geoffrey", "Angrave"],
      rating: 1
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

  changeRating = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

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
          <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={6}
          name='rating'
        />
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
