import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import {Images} from '../../theme';

const Layout = props => {
  const {children} = props;

  const handleNavigation = screenName => {
    props.navigation.navigate(screenName);
  };

  const renderTabBar = (image, onPress) => (
    <TouchableOpacity onPress={onPress} style={{...styles.tabBarBtn}}>
      <Image
        resizeMode={'contain'}
        source={image}
        style={{...styles.tabBarImage}}
      />
    </TouchableOpacity>
  );

  const renderUploadVideoBtn = () => (
    <TouchableOpacity style={{...styles.uploadBtn}}>
      <View style={{...styles.uploadBtnView}}>
        <Image
          resizeMode={'contain'}
          source={Images.Upload_Video_Bottom_Tab}
          style={{...styles.uploadBtnImage}}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{...styles.container}}>
      {children}
      <View style={{...styles.bottomBar}}>
        {renderTabBar(Images.Home_Bottom_Tab, handleNavigation('Home'))}

        {renderTabBar(Images.Home_Bottom_Tab, handleNavigation('Search'))}

        {renderUploadVideoBtn()}

        {renderTabBar(Images.Home_Bottom_Tab, handleNavigation('Chat'))}

        {renderTabBar(Images.Home_Bottom_Tab, handleNavigation('Profile'))}
      </View>
    </View>
  );
};

Layout.defaultProps = {
  isLoading: false,
};

Layout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Layout;
