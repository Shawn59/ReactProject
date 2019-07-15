import React from 'react';

class UsersPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            style: {
                color: 'blue'
            }
        };
    }
    render() {
        return (
            <div>
                <h3 style={this.state.style}>'Драсте пользователи'</h3>
            </div>
        )
    }
}

export default UsersPage;