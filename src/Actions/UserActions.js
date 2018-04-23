export const UserUpdateAction = newUser => {
    console.log('Inside UserUpdateAction');
    return {
        type: 'User.Update',
        payload: {
            user: newUser
        }
    }
};
