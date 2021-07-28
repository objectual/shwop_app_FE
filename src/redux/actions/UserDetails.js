import * as types from './ActionTypes';

export function storeUserDetails(data = {}) {
  return {
    data,
    type: types.USER_DETAILS,
  };
}
