import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import {Colors} from '../../theme';

import styles from './styles';

const CustomTextInput = props => {
  const [floatLabel, setFloatLabel] = useState(false);
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
    onPressEye,
    floatingLabel,
  } = props;

  return (
    <View>
      <View
        style={[
          floatLabel ? styles.InputFloatView : styles.InputView,
          customInputStyle,
        ]}>
        {inputLeftIcon && (
          <Image
            style={styles.inputIcon}
            resizeMode="contain"
            source={inputLeftIcon}
          />
        )}

        {floatingLabel && floatLabel ? (
          <Text style={styles.labelTopText}>{placeholder}</Text>
        ) : null}

        <TextInput
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          enablesReturnKeyAutomaticallly={enablesReturnKeyAutomaticallly}
          style={[styles.textInputStyle, TextInputPaddingStyle]}
          placeholder={placeholder}
          editable={isEditable}
          ref={refrence}
          placeholderTextColor={Colors.Mercury}
          value={value}
          autoCapitalize={'none'}
          onFocus={() => setFloatLabel(true)}
          onBlur={() => {
            let isFloatLabel = value == '' || value == undefined ? false : true;
            setFloatLabel(isFloatLabel);
          }}
          onChangeText={onChangeText}
          onSubmitEditing={() => {
            onSubmit(onSubmitRef);
          }}
        />
        <TouchableOpacity onPress={onPressEye}>
          <Image
            style={
              floatingLabel && floatLabel
                ? styles.rightFloatIcon
                : styles.rightIcon
            }
            resizeMode="contain"
            source={secureTextEntry ? inputRightIcon : inputRightHideIcon}
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
  onPressEye: undefined,
  floatingLabel: undefined,
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
  onPressEye: PropTypes.func,
  enablesReturnKeyAutomaticallly: PropTypes.bool,
  inputLeftIcon: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  customInputStyle: PropTypes.object,
  TextInputPaddingStyle: PropTypes.object,
  CustomTextInputStyle: PropTypes.object,
  floatingLabel: PropTypes.bool,
};

export default CustomTextInput;
