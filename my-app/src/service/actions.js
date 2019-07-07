
// Action creater - для чистого кода и реиспользования
 const getGitUsers = (newUsers) => {
     let g = 0;
    return {
        type: 'GET_GIT_USERS',
        payload: newUsers
    }
};

export {
    getGitUsers
};