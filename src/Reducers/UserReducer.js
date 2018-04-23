const UserReducer = (state = '', action) => {
    console.log('UserReducer Inside', action);
    switch (action.type) {
        case 'User.Update':
            console.log('inside reducer user: ', state);
            return action.payload.user;
        default:
            return state;
    }
};

export default UserReducer;