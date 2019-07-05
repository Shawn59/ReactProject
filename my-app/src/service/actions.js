
// Action creater - для чистого кода и реиспользования
 const getGitUsers = (newUsers) => (
    {
        type: 'GET_GIT_USERS',
        payload: newUsers
    });

export {
    getGitUsers
};