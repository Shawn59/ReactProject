import {actionConstant} from './const'
// Action creater - для чистого кода и реиспользования
import ConfigJS from '../components/config/config';

/*export const getGitUsers = (newUsers) => {
     let g = 0;
    return {
        type: actionConstant.GET_GIT_USERS,
        payload: newUsers
    }
};*/

/*async function componentDidMount() {
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const json = await response.json();
    this.setState({ data: json });
}

async function getMembersForProjects(projects) {
    for (let i = 0; i < projects.length; i++) {

    }
    async () => {
       await fetch("http://gitlab.utip.org/api/v4/projects/127/members?private_token=" + ConfigJS.adminToken)
            .then(response => response.json())
            .then((data) => {
                let d = data;
            }, (error) => {

            })
    };
};*/

export function getGitUsers() {
    return (dispatch) => {
        // Момент запроса
        dispatch({
            type: actionConstant.GET_GIT_USERS_REQUEST,
        });

        /*fetch("http://gitlab.utip.org/api/v4/groups/" + ConfigJS.groupDevID +"/members?private_token=" + ConfigJS.adminToken)
            .then(response => response.json())
            .then((data) => {
                //getMembersForProjects(data);
                 dispatch({
                    type: actionConstant.GET_GIT_USERS_SUCCESS,
                    payload: data
                })
            }, (error) => {
                dispatch({
                    type: actionConstant.GET_GIT_USERS_ERROR,
                    payload: error
                })
            })*/

        fetch(ConfigJS.apiHost + "getusers")
            .then(response => response.json())
            .then((data) => {
                if (data.status == 'success') {
                    return dispatch({
                        type: actionConstant.GET_GIT_USERS_SUCCESS,
                        payload: data.value
                    })
                }
            }, (error) => {
                dispatch({
                    type: actionConstant.GET_GIT_USERS_ERROR,
                    payload: error
                })
            })
    }
}

export function getGitProjects() {
    return (dispatch) => {
        // Момент запроса
        dispatch({
            type: actionConstant.GET_GIT_PROJECTS_REQUEST,
        });

        /*fetch("http://gitlab.utip.org/api/v4/projects?private_token=" + ConfigJS.adminToken)
            .then(response => response.json())
            .then((data) => {
                dispatch({
                    type: actionConstant.GET_GIT_PROJECTS_SUCCESS,
                    payload: data
                })
            }, (error) => {
                dispatch({
                    type: actionConstant.GET_GIT_PROJECTS_ERROR,
                    payload: error
                })
            })*/

        fetch(ConfigJS.apiHost + "getgroups")
            .then(response => response.json())
            .then((data) => {
                if (data.status == 'success') {
                    return dispatch({
                        type: actionConstant.GET_GIT_PROJECTS_SUCCESS,
                        payload: data.value
                    })
                }
            }, (error) => {
                dispatch({
                    type: actionConstant.GET_GIT_PROJECTS_ERROR,
                    payload: error
                })
            })
    }
}

export function addGroups() {
    return (dispatch) => {
        // Момент запроса
        dispatch({
            type: actionConstant.ADD_GROUP_REQUEST,
        });

        fetch("http://gitlab.utip.org/api/v4/projects?private_token=" + ConfigJS.adminToken)
            .then(response => response.json())
            .then((data) => {
                dispatch({
                    type: actionConstant.ADD_GROUP_SUCCESS,
                    payload: data
                })
            }, (error) => {
                dispatch({
                    type: actionConstant.ADD_GROUP_ERROR,
                    payload: error
                })
            })
    }
}

