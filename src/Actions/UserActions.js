export const UserUpdateAction = newUser => {
    console.log('Inside UserUpdateAction');
    return {
        type: 'User.Update',
        payload: {
            user: newUser
        }
    }
};

export const userLoggedInAction = token => {
    console.log(token);
    return {
        type : 'User.LoggedIn',
        token
    }
}
