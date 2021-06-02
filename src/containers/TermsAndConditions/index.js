import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const TermsAndConditions = props => {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.heading}}>Terms &amp; Conditions Screen</Text>
    </View>
  );
};

TermsAndConditions.defaultProps = {};

TermsAndConditions.propTypes = {};

export default TermsAndConditions;
