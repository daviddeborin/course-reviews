import React, {Component} from 'react'
import {Grid, Dropdown} from 'semantic-ui-react'

class Term extends Component {
    constructor(props) {
        super(props);
        this.state = {
          terms: [],
          years: [],
          professors: ["Wade", "Geoffrey", "Angrave"],
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


    render() {
        const terms = [
            { key: 1, text: "Fall", value: 1 },
            { key: 2, text: "Spring", value: 2 },
            { key: 3, text: "Summer", value: 3 },
            { key: 4, text: "Winter", value: 4 }
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
            </div>
        )
    }
}

export default Term