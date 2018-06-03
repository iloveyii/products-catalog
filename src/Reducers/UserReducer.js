import { USER_LOGIN_SUCCESS } from '../Types/Login';

const UserReducer = (state = '', action) => {
    switch (action.type) {
        case 'User.Update':
            return action.payload.user;

        case USER_LOGIN_SUCCESS:
            return {state, token: action.token}
        default:
            return state;
    }
};

export default UserReducer;