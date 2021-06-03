import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import styles from './styles';
import DrawerContent from './DrawerContent';

import AppStack from '../AppStack';

import {
  MyProducts,
  Shop,
  TermsAndConditions,
  ReturnPolicy,
  WishList,
  Settings,
} from '../../containers';

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
        name="MyProducts"
        component={MyProducts}
        options={{...drawerScreenOptions}}
      />
      <Drawer.Screen
        name="Shop"
        component={Shop}
        options={{...drawerScreenOptions}}
      />
      <Drawer.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{...drawerScreenOptions}}
      />
      <Drawer.Screen
        name="ReturnPolicy"
        component={ReturnPolicy}
        options={{...drawerScreenOptions}}
      />
      <Drawer.Screen
        name="WishList"
        component={WishList}
        options={{...drawerScreenOptions}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{...drawerScreenOptions}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
