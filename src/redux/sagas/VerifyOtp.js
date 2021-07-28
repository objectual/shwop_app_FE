import {take, put, call, fork} from 'redux-saga/effects';

import * as types from '../actions/ActionTypes';
import {success, failure} from '../actions/VerifyOtp';
import {ErrorHelper} from '../../helpers';
import {VERIFY_OTP} from '../../config/WebServices';

import ApiSauce from '../../services/ApiSauce';

function callRequest(data) {
  return ApiSauce.post(VERIFY_OTP, data);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(types.VERIFY_OTP.REQUEST);

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
