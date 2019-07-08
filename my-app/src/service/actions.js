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

export function getGitUsers() {
    return (dispatch) => {
        // Момент запроса
        dispatch({
            type: actionConstant.GET_GIT_USERS_REQUEST,
        });

        fetch("http://gitlab.utip.org/api/v4/groups/" + ConfigJS.groupDevID +"/members?private_token=" + ConfigJS.adminToken)
            .then(response => response.json())
            .then((data) => {
                 dispatch({
                    type: actionConstant.GET_GIT_USERS_SUCCESS,
                    payload: data
                })
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

        fetch("http://gitlab.utip.org/api/v4/projects?private_token=" + ConfigJS.adminToken)
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

