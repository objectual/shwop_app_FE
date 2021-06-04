import React, {useRef, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

import {Images, Metrics, Colors} from '../../theme';
import {CustomModalize, CustomPhoneInput} from '../../components';

import styles from './styles';

const Layout = props => {
  const {children} = props;
  const modalizeRef = useRef(null);
  const phoneInput = useRef(null);
  const [authorize, setAuthorize] = useState(false);
  const [signup, setSignup] = useState(false);

  const renderLogin = () => (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <TouchableOpacity style={styles.close}>
        <MaterialCommunityIcons
          name="close"
          size={Metrics.ratio(15)}
          color={Colors.Black}
        />
      </TouchableOpacity>
    </View>
  );

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
        <Text style={styles.verificationTxt}>
          Verification code will be sent to you on the number you added above!
        </Text>
        <TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.1, 0.3, 0.4, 0.6, 0.8, 0.9]}
            colors={[
              '#8A49A1',
              '#C1558B',
              '#C1558B',
              '#E56969',
              '#FFC273',
              '#FFDF9E',
            ]}
            style={styles.loginBtn}>
            <Text style={styles.loginBtnTxt}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
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
        <Text style={styles.verificationTxt}>
          Verification code will be sent to you on the number you added above!
        </Text>
        <TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.1, 0.3, 0.4, 0.6, 0.8, 0.9]}
            colors={[
              '#8A49A1',
              '#C1558B',
              '#C1558B',
              '#E56969',
              '#FFC273',
              '#FFDF9E',
            ]}
            style={styles.loginBtn}>
            <Text style={styles.loginBtnTxt}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
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
