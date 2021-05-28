import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const UploadVideo = props => {
  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.heading}}>Upload Video Screen</Text>
    </View>
  );
};

UploadVideo.defaultProps = {};

UploadVideo.propTypes = {};

export default UploadVideo;
