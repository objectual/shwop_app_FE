import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Home,
  Search,
  UploadVideo,
  Chat,
  Profile,
  Otp,
  SignUp,
} from '../../containers';

const AppStack = createStackNavigator();
const AppStackScreen = ({screenNavigate}) => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName="Home">
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Search" component={Search} />
      <AppStack.Screen name="UploadVideo" component={UploadVideo} />
      <AppStack.Screen name="Chat" component={Chat} />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="otp" component={Otp} />
      <AppStack.Screen name="signup" component={SignUp} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
