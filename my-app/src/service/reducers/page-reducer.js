import {actionConstant} from '../const'

const initialState = {
   users: [],
   loadingUsers: false,
   projects: [],
   loadingProjects: false,
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {

        //GET_GIT_USERS

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

        //GET_GIT_PROJECTS

        case actionConstant.GET_GIT_PROJECTS_REQUEST:
            return {
                ...state,
                projects: action.payload,
                loadingProjects: false
            };

        case actionConstant.GET_GIT_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.payload,
                loadingProjects: true
            };
        case actionConstant.GET_GIT_PROJECTS_ERROR:
            return {
                ...state,
                projects: action.payload,
                loadingProjects: false
            };

        //ADD_GROUP

        case actionConstant.ADD_GROUP_REQUEST:
            return {
                ...state,
                projects: action.payload,
                loadingProjects: false
            };

        case actionConstant.ADD_GROUP_SUCCESS:
            return {
                ...state,
                projects: action.payload,
                loadingProjects: true
            };
        case actionConstant.ADD_GROUP_ERROR:
            return {
                ...state,
                projects: action.payload,
                loadingProjects: false
            };

        default:
            return state;
    }
};

export default pageReducer;