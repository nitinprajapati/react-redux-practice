import axios from "axios";
import { call, put } from 'redux-saga/effects'
import * as ACTIONS from "../actions/type";

const addUser = (formData) => {
  return axios.post(`${ACTIONS.API_END_POINT}/register`, formData);
}

export function* signUpUser(payload) {    
    try {
        const user = yield call(addUser, payload);
        yield put({ type: ACTIONS.REGISTERED, payload:user})
    
    } catch (error) {
        yield put({ type: ACTIONS.API_CALL_FAILURE_SIGNUP, payload:error});
    }
}