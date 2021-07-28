import {combineReducers} from 'redux';

import login from './Login';
import register from './Register';
import networkInfo from './NetworkInfo';
import verifyOtp from './VerifyOtp';
import userDetails from './UserDetails';

export default combineReducers({
  login,
  register,
  networkInfo,
  verifyOtp,
  userDetails,
});
