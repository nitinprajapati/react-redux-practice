import { all, takeEvery } from 'redux-saga/effects';
import * as ACTIONS from "../actions/type";
import {fetchPosts} from './postSaga';
import {validateUser} from './loginSaga';
import {signUpUser} from './signUpSaga';

export function* watcherSaga() {
    yield all([
        takeEvery(ACTIONS.API_CALLING, fetchPosts),
        takeEvery(ACTIONS.LOGIN_BY_ID_AND_PASSWORD, validateUser),
        takeEvery(ACTIONS.SIGN_UP, signUpUser)
    ]);
}