import * as ACTIONS from './../actions/type';

const resgitration = {
    error: false,
    fetching: false,
    loaderType: 'line-scale',
    message: 'Registering. Please wait...',
    color: '#02a17c',
    error_message: 'Service is down. Please try again...',
    registered: true
};

const RegistrationResponse = (state, response) => {
    let res = {};
    if(response.data.status){
        res = {
            ...state,
            registered: true
        }
    }
    else {
        res = {
            ...state,
            error: true,
            error_message: response.data.message,
            fetching: false
        }
    }
    return res;
}

export default (state=resgitration, action) => {
    switch(action.type){
        case ACTIONS.SIGN_UP: 
            return {
                ...state,
                fetching: true
            };

        case ACTIONS.API_CALL_FAILURE_SIGNUP :  
            return {
                ...state,
                error: true,
                fetching: false
            }; 

        case ACTIONS.REGISTERED: 
            return RegistrationResponse(state, action.payload);


        default:;
    }
    return state;
};