import {USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS} from '../Types/Login';

export const UserUpdateAction = newUser => {
    console.log('Inside UserUpdateAction');
    return {
        type: 'User.Update',
        payload: {
            user: newUser
        }
    }
};

export const userLogInAction = credentials => {
    console.log('inside action crdecntinls: ', credentials.email)
    return {
    type : USER_LOGIN,
    credentials
} };

export const userLogInSuccessAction = user => ({
    type : USER_LOGIN_SUCCESS,
    token : user.token
});

export const userLogInFailAction = serverErrors =>  {
    console.log('Inside userLogInFailAction', serverErrors);
    return {
        type: USER_LOGIN_FAIL,
        serverErrors: serverErrors
    }
};
