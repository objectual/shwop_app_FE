import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const CustomTextInput = props => {
  const {
    refrence,
    returnKeyType,
    placeholder,
    topLabelText,
    isEditable,
    value,
    onChangeText,
    emailError,
    onSubmitRef,
    onSubmit,
    enablesReturnKeyAutomaticallly,
    inputLeftIcon,
    inputRightIcon,
    inputRightHideIcon,
    customInputStyle,
    TextInputPaddingStyle,
    secureTextEntry,
  } = props;

  return (
    <View>
      <View style={[styles.InputView, customInputStyle]}>
        {inputLeftIcon && (
          <Image
            style={styles.inputIcon}
            resizeMode="contain"
            source={inputLeftIcon}
          />
        )}
        <Text style={styles.labelTopText}>{topLabelText}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          enablesReturnKeyAutomaticallly={enablesReturnKeyAutomaticallly}
          style={[styles.textInputStyle, TextInputPaddingStyle]}
          placeholder={placeholder}
          editable={isEditable}
          ref={refrence}
          value={value}
          autoCapitalize={'none'}
          onChangeText={onChangeText}
          onSubmitEditing={() => {
            onSubmit(onSubmitRef);
          }}
        />
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={styles.rightIcon}
            resizeMode="contain"
            source={
              secureTextEntry === true ? inputRightIcon : inputRightHideIcon
            }
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.errormsg}> {emailError}</Text>
    </View>
  );
};

CustomTextInput.defaultProps = {
  returnKeyType: undefined,
  isEditable: undefined,
  value: undefined,
  placeholder: undefined,
  topLabelText: undefined,
  onChangeText: undefined,
  emailError: undefined,
  refrence: undefined,
  onSubmitRef: undefined,
  onSubmit: undefined,
  enablesReturnKeyAutomaticallly: undefined,
  inputLeftIcon: undefined,
  secureTextEntry: undefined,
  customInputStyle: undefined,
  TextInputPaddingStyle: undefined,
  CustomTextInputStyle: undefined,
};

CustomTextInput.propTypes = {
  returnKeyType: PropTypes.string,
  isEditable: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  topLabelText: PropTypes.string,
  onChangeText: PropTypes.func,
  emailError: PropTypes.string,
  refrence: PropTypes.object,
  onSubmitRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onSubmit: PropTypes.func,
  enablesReturnKeyAutomaticallly: PropTypes.bool,
  inputLeftIcon: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  customInputStyle: PropTypes.object,
  TextInputPaddingStyle: PropTypes.object,
  CustomTextInputStyle: PropTypes.object,
};

export default CustomTextInput;
