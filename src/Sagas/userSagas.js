import { call, put } from 'redux-saga/effects';
import api from '../Api/users';
import { userLogInFailAction, userLogInSuccessAction} from '../Actions/UserActions';

export function* userCreateSaga(action) {
    const user = yield call(api.users.signup, action.user);
    yield put(userCreateSuccessSaga(user));
}

export function* userCreateSuccessSaga(user) {

}

export function* userLoginSaga(action) {
    try {
        const resp = yield call(api.user.login, action.credentials);
        if(resp.user.token) {
            localStorage.token = resp.user.token;
            yield put(userLogInSuccessAction(resp.user));
        } else {
            console.log('No usr token')
            yield put(userLogInFailAction(resp.user));
        }
    } catch (err) {
        console.log('INSIDE userLoginSaga catch err is: ', err);

        yield put(userLogInFailAction(err));
        console.log('Error in login: ', err);
        console.log('But continue');
    }
}