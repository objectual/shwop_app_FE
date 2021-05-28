import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const ReturnPolicy = props => {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.heading}}>Return Policy Screen</Text>
    </View>
  );
};

ReturnPolicy.defaultProps = {};

ReturnPolicy.propTypes = {};

export default ReturnPolicy;
