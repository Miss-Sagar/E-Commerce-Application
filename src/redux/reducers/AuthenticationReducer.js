import {ActionTypes } from "../Constants";

const initialState = {
    userAuthentication: false,
    userAccessToken: ""
}

const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_AUTHENTICATION_STATE:
            return {
                ...state,
                userAuthentication: action.payload
            }
        case ActionTypes.SET_USER_ACCESS_TOKEN:
            return {
                ...state,
                userAccessToken: action.payload
            }
    
        default:
            return state;
            }
}

export default AuthenticationReducer;