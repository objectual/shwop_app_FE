import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

const PurpleButton = props => {
  const {title, onPress} = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.purpleBtn}>
        <Text style={styles.BtnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PurpleButton;
