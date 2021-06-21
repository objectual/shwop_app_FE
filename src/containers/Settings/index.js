import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import styles from './styles';

import {Layout, Header} from '../../components';
import {Images, Colors} from '../../theme';

const Settings = props => {
  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
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
    <Layout {...props} isLogedIn={true}>
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
          onPress: () => {},
        })}

        {renderButton({
          label: 'Contact Us',
          onPress: () => {},
        })}

        <View style={{...styles.logoutContainer}}>
          <TouchableOpacity style={{...styles.logoutBtn}}>
            <Image
              resizeMode={'contain'}
              source={Images.logout_settings}
              style={{...styles.logoutBtnImage}}
            />
            <Text style={{...styles.logoutBtnText}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};

Settings.defaultProps = {};

Settings.propTypes = {};

export default Settings;
