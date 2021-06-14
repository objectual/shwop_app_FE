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
  RecordVideo,
  Main,
  CompleteVideo,
  OthersProfile,
  TagProduct,
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
      <AppStack.Screen name="RecordVideo" component={RecordVideo} />
      <AppStack.Screen name="Otp" component={Otp} />
      <AppStack.Screen name="SignUp" component={SignUp} />
      <AppStack.Screen name="Main" component={Main} />
      <AppStack.Screen name="CompleteVideo" component={CompleteVideo} />
      {/* <AppStack.Screen name="OthersProfile" component={OthersProfile} /> */}
      <AppStack.Screen name="TagProduct" component={TagProduct} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
