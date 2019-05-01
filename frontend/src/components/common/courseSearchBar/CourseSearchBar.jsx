import _ from "lodash";
//import faker from "faker";
import React, { Component } from "react";
import { Search, Grid } from "semantic-ui-react";
import axios from "axios";

const defaultMessage = "Search for course";

// const source = _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, "$")
// }));

class CourseSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      value: defaultMessage,
      results: [],
      origData: []
    };
  }

  componentWillMount() {
    axios.get("http://localhost:9000/course").then(res => {
      console.log(res.data);
      this.setState({ origData: res.data });
    });
  }

  resetDefault = () => {
    if (this.state.value === defaultMessage) {
      this.setState({ value: "" });
    }
  };

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) => {
    window.location.href = "/courses/" + result.id;
    console.log("/" + result.id);
    this.setState({ value: result.title });
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title); // we would put our conditionals/ filters here

      this.setState({
        isLoading: false,
        results: _.filter(this.state.origData, isMatch) // uses the isMatch
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            size="huge"
            defaultValue="Search for course"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            {...this.props}
            onMouseDown={this.resetDefault}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default CourseSearchBar;
