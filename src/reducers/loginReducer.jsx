import * as ACTIONS from './../actions/type';
const loginInitialState = {
    login: false,
    details: {}
};

const loggedIN = (action) => {
    window.localStorage.setItem('user', JSON.stringify(action));
    window.location.href = window.location.origin;
}

const INITIALIZING = (details) => {
   loginInitialState.login = true;
   loginInitialState.details = details;
   return loginInitialState;
}

const InitState = () => {
    let user = localStorage.getItem('user');
    if(user){
        user = JSON.parse(user);
        INITIALIZING(user);
    }
};

const logout = () => {
    localStorage.removeItem('user');
    return {
        login: false,
        details: {}
    }
}

InitState();

export default (state=loginInitialState, action) => {
    switch(action.type){
        case ACTIONS.LOGGED_IN: state = loggedIN(action.payload); break;
        case ACTIONS.INITIALIZING: state = INITIALIZING(action.payload); break;
        case ACTIONS.LOGOUT: state = logout(); break;
        default:;
    }
    return state;
};