const dd = {
    users: [
        {
            id: 1,
            name: 'Andre'
        },
        {
            id: 2,
            name: 'Sergo'
        }
    ]
};

const reducer = (state = dd, action) => {
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