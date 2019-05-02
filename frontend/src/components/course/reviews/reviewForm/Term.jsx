import React, {Component} from 'react'
import {Grid, Dropdown} from 'semantic-ui-react'

class Term extends Component {
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          year: '',
          professor: '',
          professors: ["Wade", "Geoffrey", "Angrave"],
        };
    }

    updateYear = (event, data) => {
        this.setState({year : data.value});
        this.props.sendYear(data.value);
    }

    updateTerm = (event, data) => {
        this.setState({term : data.value});
        this.props.sendTerm(data.value);
    }

    updateProfessor = (event, data) => {
        this.setState({term : data.value});
        this.props.sendProfessor(data.value); // props is passed in by the parent class
    }

    getYears = startYear => {
        let x = [];
        for (let i = startYear; i <= 2019; i++) {
            x.push({ key: i, text: parseInt(i), value: i });
        }
        return x;
    };

    getProfessors = () => {
        let i = -1;
        return this.state.professors.map(prof => {
            i++;
            return { key: i, text: prof, value: prof };
        });
    };


    render() {
        const terms = [
            { key: 1, text: "Fall", value: "Fall" },
            { key: 2, text: "Spring", value: "Spring" },
            { key: 3, text: "Summer", value: "Summer" },
            { key: 4, text: "Winter", value: "Winter" }
          ];
        return (
            <div className="strip" id="logistics">
            <p>
                Class logistics:
            </p>
            <Grid textAlign="center" columns={3}>
                <Grid.Column id="term">
                <Dropdown
                    placeholder="Term"
                    clearable
                    options={terms}
                    selection
                    onChange={this.updateTerm}
                />
                </Grid.Column>
                <Grid.Column id="year">
                <Dropdown
                    placeholder="Year"
                    clearable
                    options={this.getYears(2010)}
                    selection
                    onChange={this.updateYear}
                />
                </Grid.Column>
                <Grid.Column id="professor">
                <Dropdown
                    placeholder="Professor"
                    clearable
                    options={this.getProfessors()}
                    selection
                    onChange={this.updateProfessor}
                />
                </Grid.Column>
                <Grid.Row />
            </Grid>
            </div>
        )
    }
}

export default Term;