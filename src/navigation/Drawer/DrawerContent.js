import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import styles from './styles';
import DrawerItems from './DrawerItems';

import {Images} from '../../theme';

const DrawerContent = props => {
  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  return (
    <View style={{...styles.container}}>
      <DrawerContentScrollView>
        <View style={{...styles.profileSectionContainer}}>
          <View style={{...styles.profileImageContainer}}>
            <Image
              source={Images.user}
              resizeMode={'contain'}
              style={{...styles.profileImage}}
            />
          </View>
          <View style={{...styles.profileInfoView}}>
            <Text style={{...styles.profileName}}>{'Emma Norman'}</Text>
            <Text style={{...styles.profileUserName}}>{'@emmanor'}</Text>
          </View>
        </View>

        <View style={{...styles.drawerItemContainer}}>
          {DrawerItems.map(item => (
            <TouchableOpacity
              key={item.screenName}
              onPress={() => handleNavigation(item.screenName)}
              style={{...styles.drawerItem}}>
              <Image
                source={item.image}
                resizeMode={'contain'}
                style={{...styles.drawerItemIcon}}
              />
              <Text style={{...styles.drawerItemLabel}}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{...styles.footerSec}}>
          <TouchableOpacity
            onPress={() => props.navigation.closeDrawer()}
            style={{...styles.backBtn}}>
            <Image
              source={Images.back_drawer}
              resizeMode={'contain'}
              style={{...styles.backBtnImage}}
            />
            <Text style={{...styles.backBtnText}}>{'Back'}</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
