import * as ACTIONS from './type';
export const fetchPosts = (posts) => {
    return {
        type: ACTIONS.FETCHING_POSTS,
        payload : posts
    }
}