import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Shop = props => {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.heading}}>Shop Screen</Text>
    </View>
  );
};

Shop.defaultProps = {};

Shop.propTypes = {};

export default Shop;
