import React, {useEffect, useState} from 'react';
import {View, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import Cookie from 'react-native-cookie';
import auth from '@react-native-firebase/auth';

import styles from './styles';

import {Colors} from '../../theme';
import {OverlayLoader} from '../../components';
import util from '../../util';

const MyWebView = props => {
  const {webViewLink} = props.route.params;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleClearCookies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const onNavigationStateChange = newNavState => {
    const {url} = newNavState;

    if (!url) {
      return;
    }

    if (url.includes('callback?code=')) {
      return handleCookies();
    }
  };

  const handleCookies = () => {
    setIsLoading(true);
    Cookie.get(webViewLink).then(cookie => {
      setIsLoading(false);
      let parsedData = JSON.parse(decodeURIComponent(cookie.user));

      setTimeout(() => {
        handleSocialLoginAndSignUp(parsedData);
      }, 3000);
    });
  };

  const handleSocialLoginAndSignUp = async parsedData => {
    if (parsedData.existing) {
      try {
        setIsLoading(true);
        const confirmation = await auth().signInWithPhoneNumber(
          `+${parsedData?.user?.profile?.phoneNo}`,
        );
        handleNavigation('SocialOtp', {
          selectedPhoneNumber: parsedData?.user?.profile?.phoneNo,
          confirmation,
          isSocialLogin: true,
        });
        setIsLoading(false);
      } catch (error) {
        util.showAlertWithDelay({
          title: 'Error',
          message: error?.message,
        });
        setIsLoading(false);
      }
    } else {
      handleNavigation('SocialSignUp', {
        email: parsedData?.user?.email,
        name: parsedData?.user?.profile?.name,
        profileImage: parsedData?.user?.profile?.profileImage,
      });
    }
  };

  const handleClearCookies = () => {
    Cookie.clear().then(success => {
      handleCookies();
    });
  };

  return (
    <View style={{...styles.container}}>
      <StatusBar
        translucent={false}
        backgroundColor={Colors.Concrete}
        barStyle="dark-content"
      />

      <OverlayLoader isLoading={isLoading} />

      <WebView
        source={{uri: webViewLink}}
        onNavigationStateChange={onNavigationStateChange}
        userAgent="Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
        originWhitelist={['https://*', 'http://*', 'file://*', 'sms://*']}
      />
    </View>
  );
};

MyWebView.defaultProps = {};

MyWebView.propTypes = {};

export default MyWebView;
