import {take, put, call, fork} from 'redux-saga/effects';

import * as types from '../actions/ActionTypes';
import {success, failure} from '../actions/SocialRegister';
import {ErrorHelper} from '../../helpers';
import {SOCIAL_REGISTER} from '../../config/WebServices';

import ApiSauce from '../../services/ApiSauce';

function callRequest(data) {
  return ApiSauce.post(SOCIAL_REGISTER, data);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(types.SOCIAL_REGISTER.REQUEST);

    try {
      const response = yield call(callRequest, payload);
      yield put(success(response));
    } catch (err) {
      yield put(failure(err));
      ErrorHelper.handleErrors(err, true);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
