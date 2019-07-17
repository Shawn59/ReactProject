import {actionConstant} from './const'
// Action creater - для чистого кода и реиспользования
import ConfigJS from '../components/config/config';

export function getGitUsers() {
    return (dispatch) => {
        // Момент запроса
        dispatch({
            type: actionConstant.GET_GIT_USERS_REQUEST,
        });

        fetch(ConfigJS.apiHost + "get-users")
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

        fetch(ConfigJS.apiHost + "get-projects")
            .then(response => response.json())
            .then((data) => {
                if (data.status == 'success') {
                    return dispatch({
                        type: actionConstant.GET_GIT_PROJECTS_SUCCESS,
                        payload: data.value
                    })
                } else {
                    console.log('not get request projects =(');
                }
            }, (error) => {
                dispatch({
                    type: actionConstant.GET_GIT_PROJECTS_ERROR,
                    payload: error
                })
            })
    }
}

export function addGroup(projectId, userIds) {
    return (dispatch) => {
        // Момент запроса
        dispatch({
            type: actionConstant.ADD_GROUP_REQUEST,
        });
   /*     let xx = new XMLHttpRequest();
        xx.open('POST', ConfigJS.apiHost  + 'add-projects', true);
        xx.setRequestHeader('Content-Type', 'application/json');
        xx.send(JSON.stringify({users: 'dddfdfd'}));*/

        fetch(ConfigJS.apiHost + 'add-group',
            {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        project: projectId,
                        users: userIds
                    }),
            })
            .then(response => response.json())
            .then((data) => {
                dispatch({
                    type: actionConstant.ADD_GROUP_SUCCESS,
                   // payload: data
                })
            }, (error) => {
                dispatch({
                    type: actionConstant.ADD_GROUP_ERROR,
                    payload: error
                })
            })
    }
}

export function getGitUsersForProject(project_id) {
    // аргумент dispatch это на самом деле свойства store
    return (dispatch) => {
        // Момент запроса
        dispatch({
            type: actionConstant.GET_GIT_USERS_FOR_PROJECT_REQUEST,
        });

        fetch(ConfigJS.apiHost + "get-users-for-project?project_id=" + project_id)
            .then(response => response.json())
            .then((data) => {
                if (data.status == 'success') {
                    return dispatch({
                        type: actionConstant.GET_GIT_USERS_FOR_PROJECT_SUCCESS,
                        payload: data.value || []
                    })
                }
            }, (error) => {
                dispatch({
                    type: actionConstant.GET_GIT_USERS_FOR_PROJECT_ERROR,
                    payload: error
                })
            })
    }
}

