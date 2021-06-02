import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  MyProducts,
  Shop,
  TermsAndConditions,
  ReturnPolicy,
  WishList,
} from '../../containers';

import AppStack from '../AppStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={AppStack} />
      <Drawer.Screen name="My Products" component={MyProducts} />
      <Drawer.Screen name="Shop" component={Shop} />
      <Drawer.Screen
        name="Terms &amp; Conditions"
        component={TermsAndConditions}
      />
      <Drawer.Screen name="Return Policy" component={ReturnPolicy} />
      <Drawer.Screen name="Wish List" component={WishList} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
