const reducer = (state = [], action) => {

    switch (action.type) {
        case 'GET_GIT_USERS':
            return {
                users: action.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default reducer;