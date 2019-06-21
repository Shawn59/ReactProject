import React from 'react';

class ProjectPage extends React.Component {
    constructor (props) {
        super();
        this.state = {
            style: {
                color: 'blue'
            }
        };
    }
    render() {
        return (
            <div>
                <h3 style={this.state.style}>'Драсте проекты'</h3>
            </div>
        )
    }
}

export default ProjectPage;