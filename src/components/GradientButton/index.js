import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import styles from './styles';

import {Colors} from '../../theme';

const GradientButton = props => {
  const {containerStyle, gradientContainer, labelStyle, label, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, ...containerStyle}}>
      <LinearGradient
        style={{...styles.gradientContainer, ...gradientContainer}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0.1, 0.3, 0.4, 0.6, 0.8, 0.9]}
        colors={[
          Colors.Affair,
          Colors.Mulberry,
          Colors.Mulberry,
          Colors.Sunglo,
          Colors.Macaroni_And_Cheese,
          Colors.Cream_Brulee,
        ]}>
        <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

GradientButton.defaultProps = {
  gradientContainer: {},
  labelStyle: {},
  label: '',
  onPress: undefined,
};

GradientButton.propTypes = {
  gradientContainer: PropTypes.object,
  labelStyle: PropTypes.object,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default GradientButton;
