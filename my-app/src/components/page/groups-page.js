import React from 'react';
import ConfigJS from '../config/config';
/*import Connect from '../config/connect'*/
const Config = ConfigJS;

let style = {

}

class GroupsPage extends React.Component {
    constructor (props) {
        super();
        this.state = {
            style: {
                color: 'red'
            },
            users: [],
            projects: [],
            groups: []
        };
        //this.GetPeople = this.GetPeople.bind(this);
        this.GetPeople();
    }

    GetPeople() {
            fetch(Config.apiHost + "class=Groups&method=getGroups")
                .then(response => response.json())
                .then((result) => {
                        this.setState({
                            groups: result
                        });
                },(error) => {
                this.setState({
                    groups: [],
                    error
                });
            });

        //пиплы
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
            });
    };

    render() {
        return (
            <div>
                <h3 style={this.state.style}>'Драсте пиплы'</h3>
                <div>
                    <span>Группы :</span>
                    <ul>
                        {this.state.groups.map(item => (
                            <li key={item.id}> {item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default GroupsPage;