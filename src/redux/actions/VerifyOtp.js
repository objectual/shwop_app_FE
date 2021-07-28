import {VERIFY_OTP, LOGOUT} from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: VERIFY_OTP.REQUEST,
  };
}

export function success(data) {
  return {
    data,
    type: VERIFY_OTP.SUCCESS,
  };
}

export function failure(errorMessage) {
  return {
    errorMessage,
    type: VERIFY_OTP.FAILURE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
