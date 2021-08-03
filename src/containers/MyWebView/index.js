import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import Cookie from 'react-native-cookie';

import styles from './styles';

import {Colors} from '../../theme';

const MyWebView = props => {
  const {webViewLink} = props.route.params;

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
    Cookie.get(webViewLink).then(cookie => {
      let parsedData = JSON.parse(decodeURIComponent(cookie.user));

      setTimeout(() => {
        if (parsedData.existing) {
          handleNavigation('Otp', {
            selectedPhoneNumber: parsedData?.user?.profile?.phoneNo,
          });
        } else {
          handleNavigation('SocialSignUp', {
            email: parsedData?.user?.email,
            name: parsedData?.user?.profile?.name,
            profileImage: parsedData?.user?.profile?.profileImage,
          });
        }
      }, 6000);
    });
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
