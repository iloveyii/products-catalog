const UserReducer = (state = '', action) => {
    switch (action.type) {
        case 'User.Update':
            return action.payload.user;
        default:
            return state;
    }
};

export default UserReducer;