import {combineReducers} from 'redux';
import postReducer from './postsReducer';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';

const allReducers = combineReducers({
    posts: postReducer,
    login: loginReducer,
    signup: signUpReducer
});

export default allReducers;