import * as ACTIONS from './type';
export const fetchPosts = (posts) => {
    return {
        type: ACTIONS.API_CALLING,
        payload : posts
    }
}