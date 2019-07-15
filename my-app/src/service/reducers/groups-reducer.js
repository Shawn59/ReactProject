import {actionConstant} from '../const'

const initialState = {
    projects: [],
    addProjects: [],
    loading: false,
};


const groupsReducer = (state = [], action) => {
    switch (action.type) {
        //ADD_GROUP

        case actionConstant.ADD_GROUP_REQUEST:
            return {
                ...state,
                group: action.payload,
                loadingProjects: false
            };

        case actionConstant.ADD_GROUP_SUCCESS:
            return {
                ...state,
                group: action.payload,
                loadingProjects: true
            };
        case actionConstant.ADD_GROUP_ERROR:
            return {
                ...state,
                group: action.payload,
                loadingProjects: false
            };

        default:
            return state;
    }
};

export default groupsReducer;

