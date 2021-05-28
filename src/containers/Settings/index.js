import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Settings = props => {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.heading}}>Settings Screen</Text>
    </View>
  );
};

Settings.defaultProps = {};

Settings.propTypes = {};

export default Settings;
