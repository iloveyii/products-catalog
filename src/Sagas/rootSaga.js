import { USER_LOGIN } from '../Types/Login';
import { takeLatest} from 'redux-saga/effects';
import { userLoginSaga } from "./userSagas";


export default function* rootSaga() {
    yield takeLatest(USER_LOGIN, userLoginSaga);
}