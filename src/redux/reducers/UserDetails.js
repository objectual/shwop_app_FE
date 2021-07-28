import Immutable from 'seamless-immutable';
import * as types from '../actions/ActionTypes';

const initialState = Immutable({
  data: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_DETAILS:
      return Immutable.merge(state, {
        data: action.data,
      });
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
