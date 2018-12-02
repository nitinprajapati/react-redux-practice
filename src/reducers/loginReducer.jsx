const loginInitialState = {
    login: false,
    logout: true,
    login_user_orofile: {}
};

const loggedIN = (action) => {
    loginInitialState.login = true;
    loginInitialState.logout = false;
    loginInitialState.login_user_orofile = action;
    return loginInitialState;
}

export default (state=loginInitialState, action) => {
    switch(action.type){
        case 'LOGGED_IN': state = loggedIN(action.action); break;
        default:;
    }
    return state;
};