import {LOGIN, LOGOUT, CLEAR_AUTH_DATA} from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: LOGIN.REQUEST,
  };
}

export function success(data) {
  return {
    data,
    type: LOGIN.SUCCESS,
  };
}

export function failure(errorMessage) {
  return {
    errorMessage,
    type: LOGIN.FAILURE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function clearAuthData() {
  return {
    type: CLEAR_AUTH_DATA,
  };
}
