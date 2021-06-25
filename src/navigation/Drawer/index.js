import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import styles from './styles';
import DrawerContent from './DrawerContent';

import AppStack from '../AppStack';

import {Shop, WishList} from '../../containers';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const drawerScreenOptions = {
    headerShown: false,
    unmountOnBlur: true,
    gestureEnabled: false,
  };

  return (
    <Drawer.Navigator
      initialRouteName={'Home'}
      drawerContent={props => <DrawerContent {...props} />}
      overlayColor="transparent"
      drawerStyle={{...styles.drawerStyle}}>
      <Drawer.Screen
        name="Home"
        component={AppStack}
        options={{...drawerScreenOptions}}
      />
      <Drawer.Screen
        name="Shop"
        component={Shop}
        options={{...drawerScreenOptions}}
      />
      <Drawer.Screen
        name="WishList"
        component={WishList}
        options={{...drawerScreenOptions}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
