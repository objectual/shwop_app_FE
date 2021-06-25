import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import {Colors, Images} from '../../theme';

import styles from './styles';

const CustomPhoneInput = props => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  const handlePhoneInput = text => {
    let validator = props.phoneInputTxt.current?.isValidNumber(text);
    props.handlePhoneInput(text, validator ? validator : false);
  };

  const renderDropdown = () => {
    return <Image style={{...styles.dropdownImage}} source={Images.polygon} />;
  };

  return (
    <View style={{...props.containerStyle}}>
      <PhoneInput
        ref={props.phoneInputTxt}
        defaultValue={value}
        placeholder="xxxxxxxx"
        defaultCode="SG"
        layout="first"
        placeholderTextColor={Colors.Mercury}
        containerStyle={{...styles.containerStyle}}
        flagButtonStyle={{...styles.flagButtonStyle}}
        textInputStyle={{...styles.textInputStyle}}
        codeTextStyle={{...styles.codeTextStyle}}
        textContainerStyle={{...styles.textContainerStyle}}
        onChangeText={text => {
          handlePhoneInput(text);
          setValue(text);
        }}
        renderDropdownImage={renderDropdown()}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        // withShadow
      />

      {props.isHelpText ? (
        <Text style={{...styles.verificationText}}>
          Verification code will be sent to you on the number you added above!
        </Text>
      ) : null}

      {props.phoneInputTxt.current?.isValidNumber(value) ? (
        <View style={{...styles.warningTextView}}>
          <Text style={{...styles.warningText}}>
            {'Please Enter Right Number'}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
export default CustomPhoneInput;
