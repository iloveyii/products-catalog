import {USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS} from '../Types/Login';

const UserReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case 'User.Update':
            return action.payload.user;
        case USER_LOGIN:
            console.log('INSIDE USER_LOGIN', action)
            return { ...state,  serverErrors: {} };
        case USER_LOGIN_SUCCESS:
            return { ...state, ...action };
        case USER_LOGIN_FAIL:
            console.log('Inside USER_LOGIN_FAIL reducer', action.type);
            return Object.assign( {}, { ...state, serverErrors: action.serverErrors, news: 770 } );
        default:
            return state;
    }
};

export default UserReducer;