import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

class Hours extends Component {
    state = {
        hours: '1-4'
    }

    changeHours = (event, data) => {
        this.setState({hours: data.children})
    }

    render () {
        return (
            <div class='rating strip'>
                <Button.Group size='large' toggle>
                    <Button onClick={this.changeHours} active={this.state.hours === '1-4'}>1-4</Button>
                    <Button onClick={this.changeHours} active={this.state.hours === '5-9'}>5-9</Button>
                    <Button onClick={this.changeHours} active={this.state.hours === '10-14'}>10-14</Button>
                    <Button onClick={this.changeHours} active={this.state.hours === '15-19'}>15-19</Button>
                    <Button onClick={this.changeHours} active={this.state.hours === '20+'}>20+</Button>
                </Button.Group>
            </div>
        )
    }
}

export default Hours