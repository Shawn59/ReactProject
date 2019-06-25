import React from 'react';
import ConfigJS from '../config/config'

class GroupsPage extends React.Component {
    constructor (props) {
        super();
        this.state = {
            style: {
                color: 'red'
            },
            users: [],
            projects: [],
        };
        this.GetPeople();
    }

    GetPeople() {
        var mysql = require('mysql');

        console.log('Get connection ...');

        var conn = mysql.createPool({
            database: 'assestment',
            host: "localhost",
            user: "root",
            password: "",
            connectionLimit: 50
        });

        conn.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
        const Config = ConfigJS;
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
            </div>
        )
    }
}

export default GroupsPage;