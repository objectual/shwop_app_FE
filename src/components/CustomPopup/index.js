import React from 'react';
import {View, Text, Image} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';

import styles from './styles';

import {Images} from '../../theme';
import {GradientButton} from '../../components';

const CustomPopup = props => {
  const {
    containerStyle,
    imageStyle,
    headingStyle,
    highlightedHeadingStyle,
    descriptionStyle,
    visible,
    heading,
    highlightedHeading,
    description,
    btnLabel,
    onPress,
  } = props;

  return (
    <Spinner
      visible={visible}
      customIndicator={
        <View style={{...styles.container, ...containerStyle}}>
          <Image
            source={Images.your_take_is_live_popup}
            resizeMode={'contain'}
            style={{...styles.image, ...imageStyle}}
          />

          <Text style={{...styles.heading, ...headingStyle}}>
            {heading}{' '}
            <Text
              style={{
                ...styles.highlightedHeading,
                ...highlightedHeadingStyle,
              }}>
              {highlightedHeading}
            </Text>
          </Text>

          <Text style={{...styles.description, ...descriptionStyle}}>
            {description}
          </Text>

          <GradientButton
            containerStyle={{...styles.btnContainerStyle}}
            gradientContainer={{...styles.btnGradientContainer}}
            labelStyle={{...styles.btnLabelStyle}}
            label={btnLabel}
            onPress={onPress}
          />
        </View>
      }
    />
  );
};

CustomPopup.defaultProps = {
  containerStyle: {},
  imageStyle: {},
  headingStyle: {},
  highlightedHeadingStyle: {},
  descriptionStyle: {},
  visible: false,
  heading: '',
  highlightedHeading: '',
  description: '',
  btnLabel: '',
  onPress: undefined,
};

CustomPopup.propTypes = {
  containerStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  headingStyle: PropTypes.object,
  highlightedHeadingStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  visible: PropTypes.bool,
  heading: PropTypes.string,
  highlightedHeading: PropTypes.string,
  description: PropTypes.string,
  btnLabel: PropTypes.string,
  onPress: PropTypes.func,
};

export default CustomPopup;
