import * as types from './ActionTypes';

export function networkInfoListener(isConnected = false) {
  return {
    type: types.NETWORK_INFO,
    isConnected,
  };
}
