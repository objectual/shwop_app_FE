import {REGISTER, LOGOUT} from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: REGISTER.REQUEST,
  };
}

export function success(data) {
  return {
    data,
    type: REGISTER.SUCCESS,
  };
}

export function failure(errorMessage) {
  return {
    errorMessage,
    type: REGISTER.FAILURE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
