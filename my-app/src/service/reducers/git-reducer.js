import {actionConstant} from '../const'

const initialState = {
    projects: [],
    addProjects: [],
    loading: false,
};


const gitReducer = (state = [], action) => {
    switch (action.type) {

        case actionConstant.GET_GIT_PROJECTS_REQUEST:
            return {
                ...state,
                projects: action.payload,
                loading: false
            };

        case actionConstant.GET_GIT_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.payload,
                loading: true
            };
        case actionConstant.GET_GIT_PROJECTS_ERROR:
            return {
                ...state,
                projects: action.payload,
                loading: false
            };

        case actionConstant.GET_GIT_USERS_REQUEST:
            return {
                ...state,
                users: action.payload,
                loadingUsers: false
            };

        case actionConstant.GET_GIT_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loadingUsers: true
            };
        case actionConstant.GET_GIT_USERS_ERROR:
            return {
                ...state,
                users: action.payload,
                loadingUsers: false
            };

        case actionConstant.GET_GIT_USERS_FOR_PROJECT_REQUEST:
            return {
                ...state,
                usersForProject: action.payload,
                loadingUsers: false
            };

        case actionConstant.GET_GIT_USERS_FOR_PROJECT_SUCCESS:
            return {
                ...state,
                usersForProject: action.payload,
                loadingUsers: true
            };
        case actionConstant.GET_GIT_USERS_FOR_PROJECT_ERROR:
            return {
                ...state,
                usersForProject: action.payload,
                loadingUsers: false
            };

        default:
            return state;
    }
};

export default gitReducer;