import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import {Images} from '../../theme';

const CustomRating = props => {
  const {containerStyle, starContainerStyle, starStyle, rating, onPress} =
    props;

  const handleRating = item => {
    onPress(item);
  };

  return (
    <View style={{...styles.container, ...containerStyle}}>
      {[1, 2, 3, 4, 5].map(item => (
        <TouchableOpacity
          style={{...styles.starContainer, ...starContainerStyle}}
          onPress={() => handleRating(item)}>
          <Image
            resizeMode={'contain'}
            source={item <= rating ? Images.star : Images.empty_star}
            style={{...styles.star, ...starStyle}}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

CustomRating.defaultProps = {
  containerStyle: {},
  starContainerStyle: {},
  starStyle: {},
  rating: 0,
  onPress: undefined,
};

CustomRating.propTypes = {
  containerStyle: PropTypes.object,
  starContainerStyle: PropTypes.object,
  starStyle: PropTypes.object,
  rating: PropTypes.number,
  onPress: PropTypes.func,
};

export default CustomRating;
