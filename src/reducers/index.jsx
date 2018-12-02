import {combineReducers} from 'redux';
import postReducer from './postsReducer';
import loginReducer from './loginReducer';

const allReducers = combineReducers({
    posts: postReducer,
    login: loginReducer
});

export default allReducers;