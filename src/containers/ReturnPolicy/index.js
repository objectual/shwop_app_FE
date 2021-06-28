import React from 'react';
import {View, Text, Image, StatusBar, ScrollView} from 'react-native';

import styles from './styles';

import {Header} from '../../components';
import {Images, Colors} from '../../theme';

const ReturnPolicy = props => {
  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  return (
    <View style={{...styles.container}}>
      <StatusBar
        translucent
        backgroundColor={Colors.Concrete}
        barStyle="dark-content"
      />

      <Header
        {...props}
        isDropShadow={false}
        leftIcon={Images.back_arrow_nav}
        rightIcon={Images.edit_product_info}
        isLeftIconImg={true}
        isRightIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        rightBtnPress={() => handleNavigation('EditReturnPolicy')}
        headerText={'Return Policy'}
      />

      <ScrollView>
        <View style={{...styles.formContainer}}>
          <Image
            resizeMode="contain"
            style={styles.terms_bg}
            source={Images.returnPolicy}
          />
          <View style={{...styles.descriptionContainer}}>
            <Text style={{...styles.descriptionText}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

ReturnPolicy.defaultProps = {};

ReturnPolicy.propTypes = {};

export default ReturnPolicy;
