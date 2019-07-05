import React from 'react';
import ConfigJS from '../config/config';

const Config = ConfigJS;

export default class ApiRest{

    constructor (props) {
        this.users = [];
    }

    getGitUsers = () => {
        //пиплы
        fetch("http://gitlab.utip.org/api/v4/groups/" + Config.groupDevID +"/members?private_token=" + Config.adminToken)
            .then(response => response.json())
            .then(data => this.users = data);
    };
};