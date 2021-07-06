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
    btnContainerStyle,
    btnGradientContainerStyle,
    visible,
    source,
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
            source={source}
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
            containerStyle={{...styles.btnContainerStyle, ...btnContainerStyle}}
            gradientContainer={{
              ...styles.btnGradientContainer,
              ...btnGradientContainerStyle,
            }}
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
  btnContainerStyle: {},
  btnGradientContainerStyle: {},
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
  btnContainerStyle: PropTypes.object,
  btnGradientContainerStyle: PropTypes.object,
  visible: PropTypes.bool,
  source: PropTypes.number,
  heading: PropTypes.string,
  highlightedHeading: PropTypes.string,
  description: PropTypes.string,
  btnLabel: PropTypes.string,
  onPress: PropTypes.func,
};

export default CustomPopup;
