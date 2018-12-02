export const LoggedIn = (loginDetails) => {
    return {
        type: 'LOGGED_IN',
        payload : loginDetails
    }
}

export const Initialize = (details) => {
    return {
        type: 'INITIALIZING',
        payload: details
    }
}

export const Logout = () => {
    return {
        type: 'LOGOUT'
    } 
}