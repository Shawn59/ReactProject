import {actionConstant} from '../const'

const initialState = {};


const commonReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionConstant.ADD_CHIP:
            return {
                ...state,
                projects: action.payload,
            };

        case actionConstant.DELETE_CHIP:
            return {
                ...state,
                projects: action.payload,
            };

        default:
            return state;
    }
};

export default commonReducer;
