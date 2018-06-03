import * as ActionsLogin  from '../Types';


export const userRead = user => ({
        type: ActionsLogin.USER_READ,
        user
});

export const userReadSuccess = user => ({
    type: ActionsLogin.USER_READ_SUCCESS,
    user
});

export const userReadFail = errors => ({
    type : ActionsLogin.USER_READ_FAIL,
    errors
});