import * as ACTIONS from './type';
export const signUp = (formData) => {
    return {
        type: ACTIONS.SIGN_UP,
        payload : formData
    }
}
