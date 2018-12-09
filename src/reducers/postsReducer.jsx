import * as ACTIONS from "./../actions/type";

const initialPosts = {
    data: [],
    error: false,
    fetching: false,
    loaderType: 'line-scale',
    message: 'Loading posts. Please wait...',
    color: '#02a17c'
};

export default (state=initialPosts, actions) => {
    switch(actions.type){
        case ACTIONS.POSTS_RECIEVED :  
            return  {
                ...state,
                data: actions.payload.data,
                fetching: false
            };
            
        case ACTIONS.API_CALL_FAILURE :  
            return  {
                ...state,
                error: true,
                fetching: false
            };

        case ACTIONS.API_CALLING: 
            return {
                ...state,
                fetching: true
            }

        default: return state;
    }
}

