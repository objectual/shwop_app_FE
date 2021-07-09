import React, {useState} from 'react';
import {ActivityIndicator, View, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import {Colors, Metrics} from '../../theme';

const VideoModal = props => {
  const {visible, source, poster, onPressClose} = props;

  const [isLoading, setIsLoading] = useState(true);

  const onReadyForDisplay = () => {
    setIsLoading(false);
  };

  const onEnd = () => {
    setIsLoading(false);
  };

  return (
    <Spinner
      visible={visible}
      customIndicator={
        <View style={{...styles.container}}>
          <Video
            source={source}
            style={{...styles.videoContainer}}
            resizeMode={'cover'}
            onReadyForDisplay={onReadyForDisplay}
            onEnd={onEnd}
            poster={poster}
            posterResizeMode={'cover'}
          />

          <TouchableOpacity onPress={onPressClose} style={{...styles.closeBtn}}>
            <MaterialCommunityIcons
              name={'close'}
              size={Metrics.ratio(25)}
              color={Colors.White}
            />
          </TouchableOpacity>

          {isLoading && (
            <ActivityIndicator
              size="small"
              color={Colors.Affair}
              style={{...styles.activityIndicator}}
            />
          )}
        </View>
      }
    />
  );
};

VideoModal.defaultProps = {
  isLoading: false,
};

VideoModal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default VideoModal;
