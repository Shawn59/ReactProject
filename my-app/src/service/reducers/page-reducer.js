const initialState = {
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

const pageReducer = (state = initialState, action) => {
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

export default pageReducer;