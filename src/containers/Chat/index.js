import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Chat = props => {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.heading}}>Chat Screen</Text>
    </View>
  );
};

Chat.defaultProps = {};

Chat.propTypes = {};

export default Chat;
