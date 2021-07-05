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
  TagProduct,
  MyProducts,
  ProductInfo,
  AddProducts,
  EditProducts,
  Search,
  OrdersListing,
  // AddTermsAndConditions,
  TermsAndConditions,
  EditTermsAndConditions,
  // AddReturnPolicy,
  ReturnPolicy,
  // EditReturnPolicy,
  // Settings,
  // ManageAccounts,
  // EditProfile,
  // Notification,
  // AboutUs,
  // ContactUs,
  // VideoPlaying,
  // VideoSharing,
  // VideoTrimmer,
  // OthersProfile,
  // FollowingAndFollowers,
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
      <AppStack.Screen name="TagProduct" component={TagProduct} />
      <AppStack.Screen name="MyProducts" component={MyProducts} />
      <AppStack.Screen name="ProductInfo" component={ProductInfo} />
      <AppStack.Screen name="AddProducts" component={AddProducts} />
      <AppStack.Screen name="EditProducts" component={EditProducts} />
      <AppStack.Screen name="Search" component={Search} />
      <AppStack.Screen name="OrdersListing" component={OrdersListing} />
      {/* <AppStack.Screen
        name="AddTermsAndConditions"
        component={AddTermsAndConditions}
      /> */}
      <AppStack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
      />
      <AppStack.Screen
        name="EditTermsAndConditions"
        component={EditTermsAndConditions}
      />
      {/* <AppStack.Screen name="AddReturnPolicy" component={AddReturnPolicy} /> */}
      <AppStack.Screen name="ReturnPolicy" component={ReturnPolicy} />
      {/* <AppStack.Screen name="EditReturnPolicy" component={EditReturnPolicy} /> */}
      {/* <AppStack.Screen name="Settings" component={Settings} /> */}
      {/* <AppStack.Screen name="ManageAccounts" component={ManageAccounts} /> */}
      {/* <AppStack.Screen name="EditProfile" component={EditProfile} /> */}
      {/* <AppStack.Screen name="Notification" component={Notification} /> */}
      {/* <AppStack.Screen name="AboutUs" component={AboutUs} /> */}
      {/* <AppStack.Screen name="ContactUs" component={ContactUs} /> */}
      {/* <AppStack.Screen name="VideoPlaying" component={VideoPlaying} /> */}
      {/* <AppStack.Screen name="VideoSharing" component={VideoSharing} /> */}
      {/* <AppStack.Screen name="OthersProfile" component={OthersProfile} /> */}
      {/* <AppStack.Screen name="VideoTrimmer" component={VideoTrimmer} /> */}
      {/* <AppStack.Screen
        name="FollowingAndFollowers"
        component={FollowingAndFollowers}
      /> */}
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
