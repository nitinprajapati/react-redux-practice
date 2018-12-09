import * as ACTIONS from './../actions/type';
const loginInitialState = {
    login: false,
    details: {},
    error: false,
    fetching: false,
    loaderType: 'line-scale',
    message: 'Loading posts. Please wait...',
    color: '#02a17c'
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
        case ACTIONS.LOGGED_IN: 
        case ACTIONS.LOGIN_BY_ID_AND_PASSWORD: 
            state = loggedIN(action.payload); break;

        case ACTIONS.INITIALIZING: 
            state = INITIALIZING(action.payload); break;

        case ACTIONS.LOGOUT: 
            state = logout(); break;

        case ACTIONS.API_CALL_FAILURE :  
            state =  {
                ...state,
                error: true,
                fetching: false
            }; break;
            
        case ACTIONS.API_CALLING: 
            return {
                ...state,
                fetching: true
            }

        default:;
    }
    return state;
};