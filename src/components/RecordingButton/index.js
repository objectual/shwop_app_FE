import React, {useState, useEffect} from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const RecordingButton = props => {
  const {onPress, label, isRecording} = props;
  const [animated] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(1));

  useEffect(() => {
    if (isRecording) {
      start();
    } else {
      stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecording]);

  const start = () => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(animated, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  const stop = () => {
    Animated.loop(
      Animated.parallel([Animated.timing(animated), Animated.timing(opacity)]),
    ).stop();
  };

  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.label}}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        {isRecording ? (
          <Animated.View
            style={{
              ...styles.outerCircle,
              opacity: opacity,
              transform: [
                {
                  scale: animated,
                },
              ],
            }}>
            <View style={{...styles.innerCircle}} />
          </Animated.View>
        ) : (
          <View style={{...styles.outerCircle}}>
            <View style={{...styles.innerCircle}} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

RecordingButton.defaultProps = {
  onPress: undefined,
  label: '',
  isRecording: false,
};

RecordingButton.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  isRecording: PropTypes.bool,
};

export default RecordingButton;
