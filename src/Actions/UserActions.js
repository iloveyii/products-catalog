import { USER_LOGIN, USER_LOGIN_SUCCESS } from '../Types/Login';

export const UserUpdateAction = newUser => {
    console.log('Inside UserUpdateAction');
    return {
        type: 'User.Update',
        payload: {
            user: newUser
        }
    }
};

export const userLogInAction = user => ({
    type : USER_LOGIN,
    user
});

export const userLogInSuccessAction = token => {
    console.log('Got userLoggedInAction')
    console.log(token);
    return {
        type : USER_LOGIN_SUCCESS,
        token
    }
};
