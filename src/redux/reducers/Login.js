import Immutable from 'seamless-immutable';
import * as types from '../actions/ActionTypes';

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: '',
  data: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN.REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
      });
    case types.LOGIN.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.data,
      });
    case types.LOGIN.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        errorMessage: action.errorMessage,
      });
    case types.LOGOUT:
      return initialState;
    case types.CLEAR_AUTH_DATA:
      return initialState;
    default:
      return state;
  }
};
