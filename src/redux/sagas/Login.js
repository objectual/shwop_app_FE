import {take, put, call, fork} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import * as types from '../actions/ActionTypes';
import {success, failure} from '../actions/Login';
import {ErrorHelper} from '../../helpers';

import ApiSauce from '../../services/ApiSauce';

function callRequest(data) {
  return ApiSauce.post(data);
}

async function storeLoginResponce(response) {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(response));
  } catch (e) {}
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(types.LOGIN.REQUEST);

    try {
      const response = yield call(callRequest, payload);
      yield call(storeLoginResponce, response);
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
