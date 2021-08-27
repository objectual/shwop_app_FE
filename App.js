import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StatusBar, Alert, BackHandler} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

import configureStore from './src/redux/store';
import Navigation from './src/navigation';
import {DataHelper} from './src/helpers';
import NetworkInfo from './src/services/NetworkInfo';
import {networkInfoListener} from './src/redux/actions/NetworkInfo';

const reducers = require('./src/redux/reducers').default;

export default class App extends Component {
  state = {
    isLoading: true,
    store: configureStore(reducers, newState => {
      this.setState({isLoading: false}, () => {
        DataHelper.setStore(this.state.store);
        this.onLoadingComplete();
      });
    }),
  };

  componentDidMount() {
    console.disableYellowBox = true;
    NetworkInfo.networkInfoListener(
      this.state.store.dispatch,
      networkInfoListener,
    );
    this.requestUserPermission();

    // FUTURE USE
    // messaging()
    //   .getInitialNotification()
    //   .then(remoteMessage => {
    //     console.log('on-open');
    //     console.log('remoteMessage', remoteMessage);
    //   });

    // FUTURE USE TEST
    // messaging().onNotificationDisplayed((notification) => {
    //   console.log(
    //     '🚀 ~ file: App.js ~ line 68 ~ App ~ componentDidMount ~ notification',
    //     notification,
    //   );
    // });

    // FUTURE USE TEST
    // messaging().onMessage(function (payload) {
    //   console.log('🚀 ~ file: App.js ~ line 75 ~ App ~ componentDidMount ~ payload', payload);
    // });
  }

  onLoadingComplete = () => {
    setJSExceptionHandler(this.errorHandler, true);
    setNativeExceptionHandler(this.nativeErrorCallback, false);
  };

  errorHandler = (e, isFatal) => {
    if (isFatal) {
      this.reporter(e);
      Alert.alert(
        'Unexpected error occurred',
        `
          Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
  
          We have reported this to our team ! Please close the app and start again!
          `,
        [
          {
            text: 'Close',
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ],
      );
    } else {
      // console.log(e); // So that we can see it in the ADB logs in case of Android if needed
    }
  };

  nativeErrorCallback = errorString => {
    Alert.alert('Native Exception', errorString);
    console.log(errorString, 'errorString errorString ');
  };

  reporter = error => {
    // Logic for reporting to devs
    // Example : Log issues to github issues using github apis.
    console.log(error); // sample
  };

  async getToken() {
    let fcmToken;
    if (!false) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  async requestPermission() {
    try {
      await messaging().requestPermission({
        alert: true,
        announcement: true,
        badge: true,
        carPlay: true,
        provisional: false,
        sound: true,
      });
      this.getToken();
    } catch (error) {
      console.log(error, 'Permission Rejected.');
    }
  }

  requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  };

  render() {
    SplashScreen.hide();
    const {store} = this.state;
    return (
      <Provider store={store}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
        <Navigation />
      </Provider>
    );
  }
}
