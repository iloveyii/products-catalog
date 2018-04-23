const UserReducer = (state = '', action) => {
    if(action.type === 'updateUser') {
        console.log('inside reducer user: ' , state);
        return action.payload.user;
    }
    return state;
};

export default UserReducer;