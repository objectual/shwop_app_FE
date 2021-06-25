import React from 'react';
import {View, Text, Image, StatusBar, ScrollView} from 'react-native';

import styles from './styles';

import {Header} from '../../components';
import {Images, Colors} from '../../theme';

const AboutUs = props => {
  return (
    <View style={{...styles.container}}>
      <StatusBar
        translucent
        backgroundColor={Colors.Concrete}
        barStyle="dark-content"
      />
      <Header
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'About Us'}
        isDropShadow={false}
      />

      <ScrollView>
        <View style={{...styles.formContainer}}>
          <Image
            resizeMode="contain"
            style={styles.terms_bg}
            source={Images.about_us}
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

AboutUs.defaultProps = {};

AboutUs.propTypes = {};

export default AboutUs;
