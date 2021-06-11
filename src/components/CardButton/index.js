import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CardButton = props => {
  const {
    containerStyle,
    cardImageStyle,
    cardLabelStyle,
    onPress,
    source,
    label,
  } = props;

  return (
    <TouchableOpacity
      style={{...styles.container, ...containerStyle}}
      onPress={onPress}>
      <Image
        source={source}
        resizeMode={'contain'}
        style={{...styles.cardImage, ...cardImageStyle}}
      />
      <Text style={{...styles.cardLabel, ...cardLabelStyle}}>{label}</Text>
    </TouchableOpacity>
  );
};

CardButton.defaultProps = {
  containerStyle: {},
  cardImageStyle: {},
  cardLabelStyle: {},
  onPress: undefined,
  label: '',
};

CardButton.propTypes = {
  containerStyle: PropTypes.object,
  cardImageStyle: PropTypes.object,
  cardLabelStyle: PropTypes.object,
  onPress: PropTypes.func,
  source: PropTypes.object || PropTypes.number,
  label: PropTypes.string,
};

export default CardButton;
