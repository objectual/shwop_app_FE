import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import {Layout, Header, OverlayLoader} from '../../components';
import {Images, Colors} from '../../theme';
import ApiSauce from '../../services/ApiSauce';
import {LOGOUT} from '../../config/WebServices';
import util from '../../util';
import {logout} from '../../redux/actions/Login';

const Settings = props => {
  const userDetailsResponse = useSelector(state => state.userDetails);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const fcmToken = await AsyncStorage.getItem('fcmToken');
      const payload = {gcm_id: fcmToken};
      await auth().signOut();
      const userLogOut = await ApiSauce.post(
        LOGOUT,
        payload,
        userDetailsResponse.data.access_token,
      );
      util.showAlertWithDelay({
        title: 'Message',
        message: userLogOut.msg,
      });

      dispatch(logout());

      setIsLoading(false);
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error?.message ? error?.message : error,
      });
      setIsLoading(false);
    }
  };

  const renderButton = ({label, onPress}) => {
    return (
      <TouchableOpacity style={{...styles.button}} onPress={onPress}>
        <Text style={{...styles.buttonText}}>{label}</Text>
        <Image
          source={Images.right_arrow_settings}
          resizeMode={'contain'}
          style={{...styles.buttonImage}}
        />
      </TouchableOpacity>
    );
  };

  const renderManageItem = ({label, value}) => {
    return (
      <View style={{...styles.manageItem}}>
        <Text style={{...styles.manageItemLabel}}>{label}</Text>
        <Text style={{...styles.manageItemValue}}>{value}</Text>
      </View>
    );
  };

  const renderBlockUser = ({image, name, userName, onPress}) => {
    return (
      <View style={{...styles.userContainer}}>
        <View style={{...styles.userDetailContainer}}>
          <Image
            resizeMode={'contain'}
            source={image}
            style={{...styles.userImage}}
          />
          <View style={{...styles.userNameContainer}}>
            <Text style={{...styles.userFullName}}>{name}</Text>
            <Text style={{...styles.userName}}>{userName}</Text>
          </View>
        </View>
        <TouchableOpacity style={{...styles.unblockBtn}} onPress={onPress}>
          <Text style={{...styles.unblockBtnText}}>Unblock</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Layout {...props}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />

      <Header
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Settings'}
        headerBgColor={Colors.White}
        isDropShadow={false}
      />

      <View style={{...styles.headerSeparator}} />

      <ScrollView>
        {renderButton({
          label: 'Edit Profile',
          onPress: () => handleNavigation('EditProfile'),
        })}

        {renderButton({
          label: 'Notification',
          onPress: () => handleNavigation('Notification'),
        })}

        {renderButton({
          label: 'Invite Friends',
          onPress: () => {},
        })}

        <View style={{...styles.card}}>
          <View style={{...styles.cardRow}}>
            <View style={{...styles.cardHeadingRow}}>
              <Text style={{...styles.cardHeadingText}}>Manage Accounts</Text>
              <Image
                resizeMode={'contain'}
                source={Images.down_arrow_settings}
                style={{...styles.cardHeadingImage}}
              />
            </View>
            <TouchableOpacity
              onPress={() => handleNavigation('ManageAccounts')}>
              <Image
                resizeMode={'contain'}
                source={Images.edit_btn}
                style={{...styles.cardRightImage}}
              />
            </TouchableOpacity>
          </View>

          {renderManageItem({
            label: 'Email Address',
            value: 'emmanor@mailer.com',
          })}

          {renderManageItem({
            label: 'Phone Number',
            value: '+65-123-4567981',
          })}

          {renderManageItem({
            label: 'Password',
            value: '***********',
          })}
        </View>

        <View style={{...styles.card}}>
          <View style={{...styles.cardRow}}>
            <View style={{...styles.cardHeadingRow}}>
              <Text style={{...styles.cardHeadingText}}>Blocked Accounts</Text>
              <Image
                resizeMode={'contain'}
                source={Images.down_arrow_settings}
                style={{...styles.cardHeadingImage}}
              />
            </View>
          </View>
          {renderBlockUser({
            image: Images.user,
            name: 'Natalia Doe',
            userName: '@nataliadoe',
            onPress: () => {},
          })}
          {renderBlockUser({
            image: Images.user,
            name: 'Natalia Doe',
            userName: '@nataliadoe',
            onPress: () => {},
          })}
          {renderBlockUser({
            image: Images.user,
            name: 'Natalia Doe',
            userName: '@nataliadoe',
            onPress: () => {},
          })}
          {renderBlockUser({
            image: Images.user,
            name: 'Natalia Doe',
            userName: '@nataliadoe',
            onPress: () => {},
          })}
        </View>

        {renderButton({
          label: 'About Us',
          onPress: () => handleNavigation('AboutUs'),
        })}

        {renderButton({
          label: 'Contact Us',
          onPress: () => handleNavigation('ContactUs'),
        })}

        <View style={{...styles.logoutContainer}}>
          {userDetailsResponse?.data?.access_token ? (
            <TouchableOpacity
              onPress={handleLogout}
              style={{...styles.logoutBtn}}>
              <Image
                resizeMode={'contain'}
                source={Images.logout_settings}
                style={{...styles.logoutBtnImage}}
              />
              <Text style={{...styles.logoutBtnText}}>Logout</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </ScrollView>

      <OverlayLoader isLoading={isLoading} />
    </Layout>
  );
};

Settings.defaultProps = {};

Settings.propTypes = {};

export default Settings;
