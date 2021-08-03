import {combineReducers} from 'redux';

import login from './Login';
import register from './Register';
import networkInfo from './NetworkInfo';
import verifyOtp from './VerifyOtp';
import userDetails from './UserDetails';
import socialRegister from './SocialRegister';

export default combineReducers({
  login,
  register,
  networkInfo,
  verifyOtp,
  userDetails,
  socialRegister,
});
