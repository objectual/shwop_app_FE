import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

import {Images, Metrics, Colors} from '../../theme';
import {
  CustomModalize,
  CustomPhoneInput,
  GradientButton,
} from '../../components';

import styles from './styles';

const Layout = props => {
  const {children} = props;
  const modalizeRef = useRef(null);
  const phoneInput = useRef(null);
  const [authorize, setAuthorize] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleOnClosedModalize = () => {
    modalizeRef.current?.close();
  };

  const onOpen = () => {
    setAuthorize(true);
    modalizeRef.current?.open();
  };

  const handleNavigation = screenName => {
    props.navigation.navigate(screenName);
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
    <TouchableOpacity onPress={onOpen} style={{...styles.uploadBtn}}>
      <View style={{...styles.uploadBtnView}}>
        <Image
          resizeMode={'contain'}
          source={Images.Upload_Video_Bottom_Tab}
          style={{...styles.uploadBtnImage}}
        />
      </View>
    </TouchableOpacity>
  );

  const handlePhoneInput = (value, validate) => {
    console.log('value , validate', value, validate);
  };

  const renderLoginPop = () => {
    return (
      <View style={styles.loginArea}>
        <View>
          <CustomPhoneInput
            handlePhoneInput={handlePhoneInput}
            phoneInputTxt={phoneInput}
          />
        </View>
        <GradientButton
          label={'Login'}
          containerStyle={{...styles.gradientButtonContainer}}
          onPress={() => props.navigation.navigate('Otp')}
        />
        <View style={styles.Orarea}>
          <View style={styles.line}></View>
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
          <TouchableOpacity onPress={() => setSignup(true)}>
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
            handlePhoneInput={handlePhoneInput}
            phoneInputTxt={phoneInput}
          />
        </View>
        <GradientButton
          label={'Sign Up'}
          containerStyle={{...styles.gradientButtonContainer}}
          onPress={() => props.navigation.navigate('SignUp')}
        />
        <View style={styles.Orarea}>
          <View style={styles.line}></View>
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
          <TouchableOpacity onPress={() => setSignup(false)}>
            <Text style={styles.RegisterHereLink}>Sign In Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{...styles.container}}>
      {children}
      <CustomModalize
        modalizeRef={modalizeRef}
        headerText={!signup ? 'Login With Number ' : 'Sign Up With Number '}
        modalTopOffset={Metrics.ratio(190)}
        onClosed={handleOnClosedModalize}>
        {!signup ? renderLoginPop() : renderSignUpPop()}
      </CustomModalize>

      <View style={{...styles.bottomBar}}>
        {renderTabBar(Images.Home_Bottom_Tab, 'Home')}
        {renderTabBar(Images.Search_Bottom_Tab, 'Search')}
        {renderUploadVideoBtn()}
        {renderTabBar(Images.Chat_Bottom_Tab, 'Chat')}
        {renderTabBar(Images.Profile_Bottom_Tab, 'Profile')}
      </View>
    </View>
  );
};

Layout.defaultProps = {
  isLoading: false,
};

Layout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Layout;
