import Immutable from 'seamless-immutable';
import * as types from '../actions/ActionTypes';

const initialState = Immutable({
  data: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.NETWORK_INFO:
      return Immutable.merge(state, {
        data: {isConnected: action.isConnected},
      });
    default:
      return state;
  }
};
