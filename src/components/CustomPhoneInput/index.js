import React from 'react';
import {Text, View, Image, Keyboard} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import PropTypes from 'prop-types';

import {Colors, Images} from '../../theme';

import styles from './styles';

const CustomPhoneInput = props => {
  const {
    phoneInputRef,
    value,
    onChangeText,
    containerStyle,
    isHelpText,
    isInvalidNumber,
    defaultCode,
    onChangeCountry,
    onChangeFormattedText,
    disabled,
  } = props;

  const renderDropdown = () => {
    return <Image style={{...styles.dropdownImage}} source={Images.polygon} />;
  };

  return (
    <View style={{...containerStyle}}>
      <PhoneInput
        ref={phoneInputRef}
        disabled={disabled}
        defaultValue={value}
        placeholder="xxxxxxxx"
        defaultCode={defaultCode}
        textInputProps={{onPressOut: Keyboard.dismiss}}
        layout="first"
        placeholderTextColor={Colors.Mercury}
        containerStyle={{
          ...styles.containerStyle,
          backgroundColor: disabled ? Colors.Concrete : Colors.White,
        }}
        flagButtonStyle={{...styles.flagButtonStyle}}
        textInputStyle={{...styles.textInputStyle}}
        codeTextStyle={{...styles.codeTextStyle}}
        textContainerStyle={{
          ...styles.textContainerStyle,
          backgroundColor: disabled ? Colors.Concrete : Colors.White,
        }}
        renderDropdownImage={renderDropdown()}
        onChangeText={onChangeText}
        onChangeCountry={onChangeCountry}
        onChangeFormattedText={onChangeFormattedText}
      />

      {isHelpText ? (
        <Text style={{...styles.verificationText}}>
          Verification code will be sent to you on the number you added above!
        </Text>
      ) : null}

      {isInvalidNumber ? (
        <View style={{...styles.warningTextView}}>
          <Text style={{...styles.warningText}}>
            {'Please enter a valid phone number.'}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

CustomPhoneInput.defaultProps = {
  value: '',
  onChangeText: undefined,
  containerStyle: {},
  isHelpText: false,
  isInvalidNumber: false,
  defaultCode: 'SG',
  onChangeCountry: undefined,
  onChangeFormattedText: undefined,
  disabled: false,
};

CustomPhoneInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  containerStyle: PropTypes.object,
  isHelpText: PropTypes.bool,
  isInvalidNumber: PropTypes.bool,
  defaultCode: PropTypes.string,
  onChangeCountry: PropTypes.func,
  onChangeFormattedText: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CustomPhoneInput;
