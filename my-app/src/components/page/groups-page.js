import React from 'react';
import ConfigJS from '../config/config';
/*import Connect from '../config/connect'*/

class GroupsPage extends React.Component {
    constructor (props) {
        super();
        this.state = {
            style: {
                color: 'red'
            },
            users: [],
            projects: [],
            api: ''
        };
        this.GetPeople();
    }

    GetPeople() {
            /*fetch("http://reactproject.lh/server/apiEngine")
                .then(response => response.json())
                .then(data => this.setState({api: data}));*/

        const Config = ConfigJS;
       /* //пиплы
        fetch("http://gitlab.utip.org/api/v4/groups/" + Config.groupDevID +"/members?private_token=" + Config.adminToken)
            .then(response => response.json())
            .then(data => this.setState({users: data}));
        // проекты
        fetch("http://gitlab.utip.org/api/v4/projects?private_token=" + Config.adminToken)
            .then(response => response.json())
            .then(data => {
                let projectList = data.map((item) => {
                    return {
                        id: item.id,
                        name: item.name
                    };
                });
                this.setState({projects: projectList});
            });*/
    };

    render() {
        return (
            <div>
                <h3 style={this.state.style}>'Драсте пиплы'</h3>
            </div>
        )
    }
}

export default GroupsPage;