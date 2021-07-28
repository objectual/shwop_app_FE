import React, {useRef, useEffect, useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Images, Metrics, Colors} from '../../theme';
import {useKeyboardStatus} from '../../hooks';
import {
  CustomModalize,
  CustomPhoneInput,
  GradientButton,
} from '../../components';

import styles from './styles';

const Layout = props => {
  const {children, isModalizeOpen} = props;

  const [isOpen] = useKeyboardStatus();
  const isFocused = useIsFocused();

  const userDetailsResponse = useSelector(state => state.userDetails);

  const modalizeRef = useRef(null);
  const loginPhoneInputRef = useRef(null);
  const signUpPhoneInputRef = useRef(null);

  const [showSignUp, setShowSignUp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('SG');
  const [callingCode, setCallingCode] = useState('65');
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);
  const [modalTopOffset, setModalTopOffset] = useState(
    Metrics.screenHeight * 0.25,
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isFocused) {
      setShowSignUp(false);
      setPhoneNumber('');
      setCountryCode('SG');
      setCallingCode('65');
    }
  }, [isFocused]);

  useEffect(() => {
    if (userDetailsResponse.data.access_token) {
      setIsLoggedIn(true);
    }
  }, [userDetailsResponse]);

  useEffect(() => {
    if (isOpen) {
      setModalTopOffset(Metrics.screenHeight * 0.1);
    } else {
      setModalTopOffset(Metrics.screenHeight * 0.25);
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
    setShowSignUp(false);
    props.navigation.navigate(screenName, {...params});
  };

  const onChangeCountry = country => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const handleSignUp = () => {
    if (signUpPhoneInputRef.current?.isValidNumber(phoneNumber)) {
      handleNavigation('SignUp', {
        selectedPhoneNumber: phoneNumber,
        selectedCountryCode: countryCode,
        selectedCallingCode: callingCode,
      });
    } else {
      setIsInvalidNumber(true);
      setTimeout(() => {
        setIsInvalidNumber(false);
      }, 3000);
    }
  };

  const handleLogin = () => {
    if (loginPhoneInputRef.current?.isValidNumber(phoneNumber)) {
      let phoneNumberWithoutZero =
        loginPhoneInputRef.current?.getNumberAfterPossiblyEliminatingZero();

      handleNavigation('Otp', {
        selectedPhoneNumber: phoneNumberWithoutZero.number,
        selectedCountryCode: countryCode,
        selectedCallingCode: callingCode,
      });
    } else {
      setIsInvalidNumber(true);
      setTimeout(() => {
        setIsInvalidNumber(false);
      }, 3000);
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
        <Text style={{...styles.headerText}}>
          {!showSignUp ? 'Login With Number' : 'Sign Up With Number'}
        </Text>
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

  const renderLoginPop = () => {
    return (
      <View style={styles.loginArea}>
        <View>
          <CustomPhoneInput
            phoneInputRef={loginPhoneInputRef}
            value={phoneNumber}
            defaultCode={countryCode}
            onChangeText={setPhoneNumber}
            isHelpText={true}
            isInvalidNumber={isInvalidNumber}
            onChangeCountry={onChangeCountry}
          />
        </View>
        <GradientButton
          label={'Login'}
          containerStyle={{...styles.gradientButtonContainer}}
          onPress={handleLogin}
        />
        <View style={styles.Orarea}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
        </View>
        <View style={styles.socialView}>
          <TouchableOpacity>
            <Image style={styles.socialImg} source={Images.facebook} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.socialImg} source={Images.google} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.socialImg} source={Images.instagram} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.socialImg} source={Images.twitter} />
          </TouchableOpacity>
        </View>
        <View style={styles.RegisterTag}>
          <Text style={styles.RegisterHere}>Don't have an account?</Text>
        </View>

        <View style={styles.RegisterTag}>
          <TouchableOpacity onPress={() => setShowSignUp(true)}>
            <Text style={styles.RegisterHereLink}>Sign Up Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderSignUpPop = () => {
    return (
      <View style={styles.loginArea}>
        <View>
          <CustomPhoneInput
            phoneInputRef={signUpPhoneInputRef}
            value={phoneNumber}
            defaultCode={countryCode}
            onChangeText={setPhoneNumber}
            isHelpText={true}
            isInvalidNumber={isInvalidNumber}
            onChangeCountry={onChangeCountry}
          />
        </View>
        <GradientButton
          label={'Sign Up'}
          containerStyle={{...styles.gradientButtonContainer}}
          onPress={handleSignUp}
        />
        <View style={styles.Orarea}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
        </View>
        <View style={styles.socialView}>
          <TouchableOpacity>
            <Image style={styles.socialImg} source={Images.facebook} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.socialImg} source={Images.google} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.socialImg} source={Images.instagram} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.socialImg} source={Images.twitter} />
          </TouchableOpacity>
        </View>
        <View style={styles.RegisterTag}>
          <Text style={styles.RegisterHere}>Don't have an account?</Text>
        </View>

        <View style={styles.RegisterTag}>
          <TouchableOpacity onPress={() => setShowSignUp(false)}>
            <Text style={styles.RegisterHereLink}>Sign In Here</Text>
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
          {!showSignUp ? renderLoginPop() : renderSignUpPop()}
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
    </View>
  );
};

Layout.defaultProps = {
  isLoading: false,
  isLoggedIn: false,
  isModalizeOpen: () => {},
};

Layout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isModalizeOpen: PropTypes.func,
};

export default Layout;
