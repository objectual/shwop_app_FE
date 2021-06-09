import React from 'react';
import {StatusBar, View, Text, TouchableOpacity, Image} from 'react-native';

import {Images, Metrics, Fonts} from '../../theme';

import styles from './styles';

import {Layout} from '../../components';

const Main = props => {
  return (
    <Layout {...props}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <View style={styles.headerMain}>
        <TouchableOpacity style={styles.TouchableMenu}>
          <View style={styles.backarrowView}>
            <Image
              source={Images.menuBlack}
              style={styles.iconImage}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.centerView}>
          <Text>asdsad</Text>
        </View>
        <TouchableOpacity
          // onPress={()=>}
          style={styles.TouchableMenu}>
          <Image
            source={Images.filterBlack}
            style={[styles.iconImage]}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.MainContainer}>
        <Text>asdsad</Text>
      </View>
    </Layout>
  );
};

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
