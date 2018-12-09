import { call, put, takeLatest } from 'redux-saga/effects'
import * as ACTIONS from "./../actions/type";
import axios from "axios";

export function* watcherSaga() {
  yield takeLatest(ACTIONS.API_CALLING, fetchPosts);
}

const fetchData = () => {
  return axios({
    method: "get",
    url: 'https://jsonplaceholder.typicode.com/posts'
  });
}

function* fetchPosts() {    
    try {
        const posts = yield call(fetchData);
        yield put({ type: ACTIONS.POSTS_RECIEVED, payload:posts})
    
    } catch (error) {
        yield put({ type: ACTIONS.API_CALL_FAILURE, payload:error});
    }
}