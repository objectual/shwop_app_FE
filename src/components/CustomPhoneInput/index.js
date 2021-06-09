import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import {Colors, Images, Metrics} from '../../theme';
import {Fonts} from '../../theme';

import styles from './styles';

const CustomPhoneInput = props => {
  let [formattedValue, setFormattedValue] = useState('');
  const [value, setValue] = useState('');
  console.log(formattedValue, 'formattedValueformattedValue');
  const handlePhoneInput = text => {
    let validator = props.phoneInputTxt.current?.isValidNumber(text);
    props.handlePhoneInput(text, validator ? validator : false);
  };

  const renderDropdown = () => {
    return <Image style={styles.polygon} source={Images.polygon} />;
  };

  return (
    <View style={styles.countryInput}>
      <PhoneInput
        ref={props.phoneInputTxt}
        defaultValue={value}
        placeholder="xxxxxxxx"
        defaultCode="SG"
        layout="first"
        containerStyle={{
          paddingVertical: Metrics.ratio(0),
          fontSize: Fonts.size.fifteen,
          fontFamily: Fonts.type.NunitoLight,
          borderRadius: Metrics.ratio(30),
          overflow: 'hidden',
          borderColor: Colors.Mercury,
          borderWidth: Metrics.ratio(1),
          height: Metrics.ratio(50),
        }}
        flagButtonStyle={{
          padding: Metrics.ratio(0),
          margin: Metrics.ratio(0),
          paddingRight: Metrics.ratio(40),
          width: Metrics.ratio(100),
        }}
        textInputStyle={{
          borderColor: Colors.Mercury,
          borderLeftWidth: Metrics.ratio(1),
          paddingLeft: Metrics.ratio(10),
          marginTop: Metrics.ratio(5),
          marginBottom: Metrics.ratio(5),
        }}
        codeTextStyle={{
          position: 'absolute',
          left: Metrics.ratio(-60),
          color: '#E1E1E1',
        }}
        placeholderTextColor="#E1E1E1"
        textContainerStyle={{
          backgroundColor: '#fff',
          paddingVertical: Metrics.ratio(0),
          paddingLeft: Metrics.ratio(0),
        }}
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
      <Text style={styles.verificationTxt}>
        Verification code will be sent to you on the number you added above!
      </Text>
      {props.phoneInputTxt.current?.isValidNumber(value) ? (
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: Metrics.ratio(10),
              marginHorizontal: 5,
              marginVertical: 5,
            }}>
            {'Please Enter Right Number'}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
export default CustomPhoneInput;
