import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const MyProducts = props => {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.heading}}>My Products Screen</Text>
    </View>
  );
};

MyProducts.defaultProps = {};

MyProducts.propTypes = {};

export default MyProducts;
