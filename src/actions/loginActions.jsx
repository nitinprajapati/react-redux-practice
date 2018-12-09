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

export const manualLogin = (formData) => {
    return {
        type: ACTIONS.LOGIN_BY_ID_AND_PASSWORD,
        payload: formData
    } 
}