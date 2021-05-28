import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Profile = props => {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.heading}}>Profile Screen</Text>
    </View>
  );
};

Profile.defaultProps = {};

Profile.propTypes = {};

export default Profile;
