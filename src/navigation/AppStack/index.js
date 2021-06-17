import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  AfterSplash,
  UploadVideo,
  Chat,
  Profile,
  Otp,
  SignUp,
  RecordVideo,
  Main,
  CompleteVideo,
  // OrdersListing,
  // OthersProfile,
  // TagProduct,
  // ProductInfo,
  // MyProducts,
  // Search,
} from '../../containers';

const AppStack = createStackNavigator();
const AppStackScreen = ({screenNavigate}) => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName="AfterSplash">
      <AppStack.Screen name="AfterSplash" component={AfterSplash} />
      <AppStack.Screen name="UploadVideo" component={UploadVideo} />
      <AppStack.Screen name="Chat" component={Chat} />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="RecordVideo" component={RecordVideo} />
      <AppStack.Screen name="Otp" component={Otp} />
      <AppStack.Screen name="SignUp" component={SignUp} />
      <AppStack.Screen name="Main" component={Main} />
      <AppStack.Screen name="CompleteVideo" component={CompleteVideo} />
      {/* <AppStack.Screen name="OthersProfile" component={OthersProfile} /> */}
      {/* <AppStack.Screen name="TagProduct" component={TagProduct} /> */}
      {/* <AppStack.Screen name="ProductInfo" component={ProductInfo} /> */}
      {/* <AppStack.Screen name="MyProducts" component={MyProducts} /> */}
      {/* <AppStack.Screen name="Search" component={Search} /> */}
      {/* <AppStack.Screen name="OrdersListing" component={OrdersListing} /> */}
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
