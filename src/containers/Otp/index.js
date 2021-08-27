import React, {useEffect, useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  Platform,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
// import RNOtpVerify from 'react-native-otp-verify';
import auth from '@react-native-firebase/auth';

import {Header, GradientButton, OverlayLoader} from '../../components';
import {Images, Colors, Metrics} from '../../theme';
// import {request as verify_otp_request} from '../../redux/actions/VerifyOtp';
import {storeUserDetails} from '../../redux/actions/UserDetails';
// import {clearAuthData} from '../../redux/actions/Login';
import util from '../../util';
import {IS_EXISTS} from '../../config/WebServices';
import ApiSauce from '../../services/ApiSauce';

import styles from './styles';

const Otp = props => {
  const {
    selectedPhoneNumber,
    selectedCountryCode,
    selectedCallingCode,
    confirmation,
  } = props.route.params;

  let resendOtpTimerInterval;

  const dispatch = useDispatch();

  // const verifyOtpResponse = useSelector(state => state.verifyOtp);

  // const [user, setUser] = useState();
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(30);

  // FOR FUTURE USE
  // useEffect(() => {
  //   RNOtpVerify.getOtp()
  //     .then(p => {
  //       RNOtpVerify.addListener(message => {
  //         try {
  //           if (message) {
  //             const messageArray = message.split('\n');
  //           }
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  //   return () => {
  //     RNOtpVerify.removeListener();
  //   };
  // }, []);

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  useEffect(() => {
    startResendOtpTimer();

    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resendButtonDisabledTime]);

  // useEffect(() => {
  //   if (
  //     !verifyOtpResponse.isFetching &&
  //     !verifyOtpResponse.failure &&
  //     !verifyOtpResponse.errorMessage &&
  //     verifyOtpResponse?.data?.success
  //   ) {
  //     setIsLoading(false);

  //     dispatch(storeUserDetails(verifyOtpResponse?.data?.user));
  //     dispatch(clearAuthData());

  //     util.showCommonMessage({
  //       title: 'Message',
  //       message: verifyOtpResponse?.data?.msg,
  //       onPress: () =>
  //         props.navigation.reset({
  //           index: 0,
  //           routes: [{name: 'Main'}],
  //         }),
  //     });
  //   } else if (!verifyOtpResponse.isFetching) {
  //     setIsLoading(false);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [verifyOtpResponse]);

  // const onAuthStateChanged = _user => {
  //   console.log(_user, '_user');
  //   setUser(_user);
  // };

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  const resendOtp = async () => {
    let phoneWithAreaCode;

    if (selectedPhoneNumber.charAt(0) === '0') {
      phoneWithAreaCode = selectedPhoneNumber.replace(
        /^0+/,
        `+${selectedCallingCode}`,
      );
    } else {
      phoneWithAreaCode = `+${selectedCallingCode}${selectedPhoneNumber}`;
    }

    try {
      setIsLoading(true);
      await auth().signInWithPhoneNumber(phoneWithAreaCode, true);
      setIsLoading(false);
      setResendButtonDisabledTime(30);
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error?.message,
      });
      setIsLoading(false);
    }
  };

  const handleConfirm = async () => {
    if (!code) {
      setCodeError('Code is required.');
      setTimeout(() => {
        setCodeError('');
      }, 3000);
    } else if (code.length < 6) {
      setCodeError('Invalid code. Please enter a 6 digit code.');
      setTimeout(() => {
        setCodeError('');
      }, 3000);
    } else {
      try {
        setIsLoading(true);
        await confirmation.confirm(code);
        isUserExists();
      } catch (error) {
        util.showAlertWithDelay({
          title: 'Error',
          message: error?.message,
        });
        setIsLoading(false);
      }
    }
  };

  const isUserExists = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    const accessToken = await auth().currentUser.getIdToken();

    let payload = {
      token: accessToken,
      gcm_id: fcmToken,
      platform: Platform.OS,
    };

    try {
      const result = await ApiSauce.post(IS_EXISTS, payload);
      setIsLoading(false);
      if (result?.isExists) {
        dispatch(storeUserDetails(result?.user));
        util.showCommonMessage({
          title: 'Message',
          message: result?.msg,
          onPress: () =>
            props.navigation.reset({
              index: 0,
              routes: [{name: 'Main'}],
            }),
        });
      } else {
        handleNavigation('SignUp', {
          selectedPhoneNumber,
          selectedCountryCode,
          selectedCallingCode,
          firebaseToken: accessToken,
        });
      }
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header
        {...props}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        headerText={'One Time Password'}
        leftBtnPress={() => props.navigation.goBack()}
        headerTextStyle={styles.headerTextStyle}
      />
      <ScrollView style={{...styles.imageView}}>
        <View style={{...styles.verificationView}}>
          <Image
            resizeMode="contain"
            style={styles.verification_bg}
            source={Images.verification}
          />
          <Text style={styles.verificationTitle}>Enter Verification Code</Text>
          <Text style={styles.verificationText}>
            Enter Verification Code which is sent on your mobile
          </Text>
          <View style={{...styles.otpView}}>
            <SmoothPinCodeInput
              placeholder="X"
              codeLength={6}
              cellSize={Metrics.ratio(40)}
              cellStyle={{...styles.cellViewStyle}}
              cellStyleFocused={{...styles.cellViewFocused}}
              textStyle={{...styles.txtStyle}}
              textStyleFocused={{
                color: Colors.Affair,
              }}
              value={code}
              onTextChange={_code => setCode(_code)}
              onFulfill={() => Keyboard.dismiss()}
            />
            <Text style={{...styles.codeErrorText}}>{codeError}</Text>
          </View>
          {resendButtonDisabledTime > 0 ? (
            <View>
              <Text style={{...styles.resendMsg}}>
                Resend OTP in{' '}
                <Text
                  style={{
                    ...styles.resendMsgTime,
                  }}>{`${resendButtonDisabledTime}s`}</Text>
              </Text>
            </View>
          ) : (
            <TouchableOpacity onPress={resendOtp}>
              <Text style={{...styles.resendBtnText}}>Resend OTP</Text>
            </TouchableOpacity>
          )}
          <GradientButton
            label={'Confirm'}
            containerStyle={{...styles.gradientButtonContainer}}
            onPress={handleConfirm}
          />
        </View>
        <OverlayLoader isLoading={isLoading} />
      </ScrollView>
    </>
  );
};

export default Otp;
