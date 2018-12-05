import * as ACTIONS from './type';
export const LoggedIn = (loginDetails) => {
    return {
        type: ACTIONS.LOGGED_IN,
        payload : loginDetails
    }
}

export const Initialize = (details) => {
    return {
        type: ACTIONS.INITIALIZING,
        payload: details
    }
}

export const Logout = () => {
    return {
        type: ACTIONS.LOGOUT
    } 
}