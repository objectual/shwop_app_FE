import {SOCIAL_REGISTER, LOGOUT} from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: SOCIAL_REGISTER.REQUEST,
  };
}

export function success(data) {
  return {
    data,
    type: SOCIAL_REGISTER.SUCCESS,
  };
}

export function failure(errorMessage) {
  return {
    errorMessage,
    type: SOCIAL_REGISTER.FAILURE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
