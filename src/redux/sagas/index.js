import {fork} from 'redux-saga/effects';

import login from './Login';
import register from './Register';
import verifyOtp from './VerifyOtp';

export default function* rootSaga() {
  yield fork(login);
  yield fork(register);
  yield fork(verifyOtp);
}
