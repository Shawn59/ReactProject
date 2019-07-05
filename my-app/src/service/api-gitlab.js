import React from 'react';

export default class GitlabApi {

}
const getUsers = () => {
    //пиплы
    fetch("http://gitlab.utip.org/api/v4/groups/" + Config.groupDevID +"/members?private_token=" + Config.adminToken)
        .then(response => response.json())
        .then(data => this.users = data);
};