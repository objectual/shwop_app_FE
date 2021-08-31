import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';

import Drawer from './Drawer';

import {OverlayLoader} from '../components';
import {VERIFY_TOKEN} from '../config/WebServices';
import ApiSauce from '../services/ApiSauce';
import util from '../util';
import {logout} from '../redux/actions/Login';

const Navigation = () => {
  const userDetailsResponse = useSelector(state => state.userDetails);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userDetailsResponse?.data?.access_token) {
      const verifyToken = async () => {
        try {
          setIsLoading(true);
          await ApiSauce.post(
            VERIFY_TOKEN,
            {},
            userDetailsResponse?.data?.access_token,
          );
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          if (error === 'Access Denied. Compromised Authorized Token.') {
            handleFirebaseLogout();
          }
        }
      };
      verifyToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetailsResponse]);

  const handleFirebaseLogout = async () => {
    try {
      setIsLoading(true);
      await auth().signOut();
      dispatch(logout());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      util.showAlertWithDelay({
        title: 'Error',
        message: error?.message ? error?.message : error,
      });
    }
  };

  return (
    <NavigationContainer>
      <OverlayLoader isLoading={isLoading} />
      <Drawer />
    </NavigationContainer>
  );
};

export default Navigation;
