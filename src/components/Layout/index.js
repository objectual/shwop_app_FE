import React, {useRef, useEffect, useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

import {Images, Metrics, Colors} from '../../theme';
import {useKeyboardStatus} from '../../hooks';
import {
  CustomModalize,
  CustomPhoneInput,
  GradientButton,
  OverlayLoader,
} from '../../components';
import {GOOGLE, FACEBOOK} from '../../config/WebServices';
// import {request as login_request} from '../../redux/actions/Login';
import util from '../../util';

import styles from './styles';

const Layout = props => {
  const {children, isModalizeOpen} = props;

  // const dispatch = useDispatch();
  const [isOpen] = useKeyboardStatus();
  const isFocused = useIsFocused();

  const userDetailsResponse = useSelector(state => state.userDetails);
  // const loginResponse = useSelector(state => state.login);

  const modalizeRef = useRef(null);
  const phoneInputRef = useRef(null);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('SG');
  const [callingCode, setCallingCode] = useState('65');
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);
  const [modalTopOffset, setModalTopOffset] = useState(
    Metrics.screenHeight * 0.4,
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isFocused) {
      setPhoneNumber('');
      setCountryCode('SG');
      setCallingCode('65');
    }
  }, [isFocused]);

  useEffect(() => {
    if (userDetailsResponse?.data?.access_token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userDetailsResponse]);

  // useEffect(() => {
  //   if (
  //     !loginResponse.isFetching &&
  //     !loginResponse.failure &&
  //     !loginResponse.errorMessage &&
  //     loginResponse?.data?.success
  //   ) {
  //     setIsLoading(false);

  //     let phoneNumberWithoutZero =
  //       phoneInputRef.current?.getNumberAfterPossiblyEliminatingZero();

  //     handleNavigation('Otp', {
  //       selectedPhoneNumber: `${callingCode}${phoneNumberWithoutZero?.number}`,
  //     });
  //   } else if (!loginResponse.isFetching) {
  //     setIsLoading(false);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loginResponse]);

  useEffect(() => {
    if (isOpen) {
      setModalTopOffset(Metrics.screenHeight * 0.1);
    } else {
      setModalTopOffset(Metrics.screenHeight * 0.4);
    }
  }, [isOpen]);

  const closeModalize = () => {
    modalizeRef.current?.close();
  };

  const openModalize = () => {
    modalizeRef.current?.open();
  };

  const handleNavigation = (screenName, params) => {
    closeModalize();
    props.navigation.navigate(screenName, {...params});
  };

  const onChangeCountry = country => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const handleContinue = () => {
    if (phoneInputRef.current?.isValidNumber(phoneNumber)) {
      let phoneNo =
        phoneInputRef.current?.getNumberAfterPossiblyEliminatingZero();
      signInWithPhoneNumber(phoneNo.formattedNumber);
    } else {
      setIsInvalidNumber(true);
      setTimeout(() => {
        setIsInvalidNumber(false);
      }, 3000);
    }
  };

  const signInWithPhoneNumber = async phoneNo => {
    try {
      setIsLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(phoneNo);
      handleNavigation('Otp', {
        selectedPhoneNumber: phoneNumber,
        selectedCountryCode: countryCode,
        selectedCallingCode: callingCode,
        confirmation,
      });
      setIsLoading(false);
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error?.message,
      });
      setIsLoading(false);
    }
  };

  const renderTabBar = (image, screenName) => (
    <TouchableOpacity
      onPress={() => handleNavigation(screenName)}
      style={{...styles.tabBarBtn}}>
      <Image
        resizeMode={'contain'}
        source={image}
        style={{...styles.tabBarImage}}
      />
    </TouchableOpacity>
  );

  const renderUploadVideoBtn = () => (
    <TouchableOpacity
      onPress={() =>
        isLoggedIn ? handleNavigation('UploadVideo') : openModalize()
      }
      style={{...styles.uploadBtn}}>
      <View style={{...styles.uploadBtnView}}>
        <Image
          resizeMode={'contain'}
          source={Images.Upload_Video_Bottom_Tab}
          style={{...styles.uploadBtnImage}}
        />
      </View>
    </TouchableOpacity>
  );

  const renderHeaderComponent = () => {
    return (
      <View style={{...styles.headerComponentContainer}}>
        <Text style={{...styles.headerText}}>{"Let's Get Started"}</Text>
        <TouchableOpacity onPress={closeModalize} style={{...styles.closeBtn}}>
          <MaterialCommunityIcons
            name="close"
            size={Metrics.ratio(10)}
            color={Colors.Charade}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderAuthModal = () => {
    return (
      <View style={styles.loginArea}>
        <View>
          <CustomPhoneInput
            phoneInputRef={phoneInputRef}
            value={phoneNumber}
            defaultCode={countryCode}
            onChangeText={setPhoneNumber}
            isHelpText={true}
            isInvalidNumber={isInvalidNumber}
            onChangeCountry={onChangeCountry}
          />
        </View>
        <GradientButton
          label={'Continue'}
          containerStyle={{...styles.gradientButtonContainer}}
          onPress={handleContinue}
        />
        <View style={styles.Orarea}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
        </View>
        <View style={styles.socialView}>
          <TouchableOpacity
            onPress={() =>
              handleNavigation('MyWebView', {webViewLink: FACEBOOK})
            }>
            <Image style={styles.socialImg} source={Images.facebook} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleNavigation('MyWebView', {webViewLink: GOOGLE})
            }>
            <Image style={styles.socialImg} source={Images.google} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{...styles.container}}>
      {children}
      {!isLoggedIn && (
        <CustomModalize
          modalizeType={'children'}
          modalizeRef={modalizeRef}
          modalTopOffset={modalTopOffset}
          headerComponent={renderHeaderComponent()}
          onOpened={() => isModalizeOpen(true)}
          onClosed={() => isModalizeOpen(false)}>
          {renderAuthModal()}
        </CustomModalize>
      )}

      {!isOpen && (
        <View style={{...styles.bottomBar}}>
          {renderTabBar(Images.Home_Bottom_Tab, 'Main')}
          {renderTabBar(Images.Search_Bottom_Tab, 'Search')}
          {renderUploadVideoBtn()}
          {renderTabBar(Images.Chat_Bottom_Tab, 'Chat')}
          {renderTabBar(Images.Profile_Bottom_Tab, 'Profile')}
        </View>
      )}

      <OverlayLoader isLoading={isLoading} />
    </View>
  );
};

Layout.defaultProps = {
  isModalizeOpen: () => {},
};

Layout.propTypes = {
  isModalizeOpen: PropTypes.func,
};

export default Layout;
