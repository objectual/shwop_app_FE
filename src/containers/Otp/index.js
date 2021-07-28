import React, {useEffect, useState} from 'react';
import {Text, ScrollView, View, Image, Platform, Keyboard} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useDispatch, useSelector} from 'react-redux';
// import RNOtpVerify from 'react-native-otp-verify';

import {Header, GradientButton, OverlayLoader} from '../../components';
import {Images, Colors, Metrics} from '../../theme';
import {request as verify_otp_request} from '../../redux/actions/VerifyOtp';
import {storeUserDetails} from '../../redux/actions/UserDetails';
import util from '../../util';

import styles from './styles';

const Otp = props => {
  const {selectedPhoneNumber, selectedCallingCode} = props.route.params;

  const dispatch = useDispatch();

  const verifyOtpResponse = useSelector(state => state.verifyOtp);

  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    if (
      !verifyOtpResponse.isFetching &&
      !verifyOtpResponse.failure &&
      !verifyOtpResponse.errorMessage &&
      verifyOtpResponse?.data?.success
    ) {
      setIsLoading(false);
      dispatch(storeUserDetails(verifyOtpResponse?.data?.user));
      util.showCommonMessage({
        title: 'Message',
        message: verifyOtpResponse?.data?.msg,
        onPress: () => handleNavigation('Main'),
      });
    } else if (!verifyOtpResponse.isFetching) {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verifyOtpResponse]);

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const handleConfirm = () => {
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
      setIsLoading(true);
      let payload = {
        phoneNo: `${selectedCallingCode}${selectedPhoneNumber}`,
        code: code,
        gcm_id: '92uv-q3hqhvh-q38vhq',
        platform: Platform.OS,
      };
      dispatch(verify_otp_request(payload));
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
        rightBtnPress={() => props.navigation.goBack()}
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
