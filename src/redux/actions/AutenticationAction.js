// import {SET_AUTHENTICATION_STATE } from '../Constants';
import { ActionTypes } from "../Constants"

export const setAuthenticationState = (authValue) => ({
  type: ActionTypes.SET_AUTHENTICATION_STATE,
  payload: authValue,
});

export const setUserAccessToken = (token) => ({
  type: ActionTypes.SET_USER_ACCESS_TOKEN,
  payload: token
})