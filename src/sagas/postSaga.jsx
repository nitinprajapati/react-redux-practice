import axios from "axios";
import { call, put } from 'redux-saga/effects'
import * as ACTIONS from "../actions/type";

const fetchData = () => {
  return axios({
    method: "get",
    url: 'https://jsonplaceholder.typicode.com/posts'
  });
}

export function* fetchPosts() {    
    try {
        const posts = yield call(fetchData);
        yield put({ type: ACTIONS.POSTS_RECIEVED, payload:posts})
    
    } catch (error) {
        yield put({ type: ACTIONS.API_CALL_FAILURE, payload:error});
    }
}