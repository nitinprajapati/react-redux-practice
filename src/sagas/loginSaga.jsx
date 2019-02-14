import axios from "axios";
import { call, put } from 'redux-saga/effects'
import * as ACTIONS from "../actions/type";

const authenticateUser = (formData) => {
  return axios.post('/ac', formData.payload);
}

export function* validateUser(payload) {    
    try {
        const user = yield call(authenticateUser, payload);
        yield put({ type: ACTIONS.LOGIN_VALIDATED, payload:user})
    
    } catch (error) {
        yield put({ type: ACTIONS.API_CALL_FAILURE, payload:error});
    }
}