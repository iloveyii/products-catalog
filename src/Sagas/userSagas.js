import { call, put } from 'redux-saga/effects';
import api from '../Api/users';
import { userLoggedInAction } from '../Actions/UserActions';

export function* userCreateSaga(action) {
    const user = yield call(api.users.signup, action.user);
    yield put(userCreateSuccessSaga(user));
}

export function* userCreateSuccessSaga(user) {

}

export function* userLoginSaga(action) {
    const user = yield call(api.user.login, action.credentials);
    localStorage.bookwormJWT = user.token;
    yield put(userLoggedInAction(user));
}