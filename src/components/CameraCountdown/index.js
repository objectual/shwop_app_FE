import React from 'react';
import {View, Animated} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import PropTypes from 'prop-types';

import styles from './styles';

import {Metrics, Colors} from '../../theme';

const CameraCountdown = props => {
  const {duration, colors, isPlaying, containerStyle, countTextStyle} = props;

  return (
    <React.Fragment>
      {isPlaying ? (
        <View style={{...styles.container, ...containerStyle}}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            size={Metrics.ratio(150)}
            strokeWidth={Metrics.ratio(6)}
            duration={duration}
            colors={colors ? colors : Colors.Concrete}>
            {({remainingTime, animatedColor}) => (
              <Animated.Text
                style={{
                  ...styles.countText,
                  color: animatedColor,
                  ...countTextStyle,
                }}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
        </View>
      ) : null}
    </React.Fragment>
  );
};

CameraCountdown.defaultProps = {
  duration: 0,
  isPlaying: false,
};

CameraCountdown.propTypes = {
  duration: PropTypes.number,
  colors: PropTypes.string || PropTypes.array,
  isPlaying: PropTypes.bool,
  containerStyle: PropTypes.object,
  countTextStyle: PropTypes.object,
};

export default CameraCountdown;
