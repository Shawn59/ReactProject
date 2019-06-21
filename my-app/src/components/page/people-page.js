import React from 'react';

class PeoplePage extends React.Component {
    constructor (props) {
        super();
        this.state = {
            style: {
                color: 'red'
            }
        };
    }
    render() {
        return (
            <div>
                <h3 style={this.state.style}>'Драсте пиплы'</h3>
            </div>
        )
    }
}

export default PeoplePage;