import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const WishList = props => {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.heading}}>Wish List Screen</Text>
    </View>
  );
};

WishList.defaultProps = {};

WishList.propTypes = {};

export default WishList;
