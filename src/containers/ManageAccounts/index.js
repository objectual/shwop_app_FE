import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './styles';

import {
  Layout,
  Header,
  CustomTextInput,
  CustomPhoneInput,
} from '../../components';
import {Metrics, Images, Colors} from '../../theme';
import {useKeyboardStatus} from '../../hooks';
import {
  fullNameRegex,
  passwordRegex,
  validate,
} from '../../services/Validation';

const ManageAccounts = props => {
  const [isOpen] = useKeyboardStatus();

  const createRef = {
    fullNameRef: useRef(null),
    phoneNumberRef: useRef(null),
    passwordRef: useRef(null),
    confirmPasswordRef: useRef(null),
  };

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('SG');
  // const [callingCode, setCallingCode] = useState('65');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const [fullNameError, setFullNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);

  const onSubmit = value => {
    if (value === 'onDone') {
      handleValidation();
    } else {
      value.current.focus();
    }
  };

  const handleSecureTextEntry = () => {
    setSecureText(!secureText);
  };

  const onChangeInput = (value, state, errorState, regex, errorMessage) => {
    let error = validate(value, regex, errorMessage);
    state(value);
    errorState(error);
  };

  const onChangeCountry = country => {
    setCountryCode(country.cca2);
    // setCallingCode(country.callingCode[0]);
  };

  const handleValidation = async () => {
    if (!fullName) {
      setFullNameError('Full name is required.');
      setTimeout(() => {
        setFullNameError('');
      }, 3000);
    } else if (!phoneNumber) {
      setPhoneNumberError('Phone Number is required.');
      setTimeout(() => {
        setPhoneNumberError('');
      }, 3000);
    } else if (!createRef.phoneNumberRef.current?.isValidNumber(phoneNumber)) {
      setIsInvalidNumber(true);
      setTimeout(() => {
        setIsInvalidNumber(false);
      }, 3000);
    } else if (!password) {
      setPasswordError('Password is required.');
      setTimeout(() => {
        setPasswordError('');
      }, 3000);
    } else if (!confirmPassword) {
      confirmPasswordError('Confirm Password is required.');
      setTimeout(() => {
        confirmPasswordError('');
      }, 3000);
    } else if (confirmPassword !== password) {
      confirmPasswordError('Confirm Password should be same');
      setTimeout(() => {
        confirmPasswordError('');
      }, 3000);
    }
  };

  return (
    <Layout {...props}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />

      <Header
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Manage Accounts'}
        headerBgColor={Colors.White}
        isDropShadow={false}
      />

      <View style={{...styles.headerSeparator}} />

      <View style={{...styles.mainContainer}}>
        <ScrollView>
          <View style={{...styles.formContainer}}>
            <CustomTextInput
              returnKeyType="next"
              enablesReturnKeyAutomaticallly={true}
              placeholder="Full Name"
              editable={true}
              refrence={createRef.fullNameRef}
              value={fullName}
              floatingLabel
              onChangeText={value => {
                onChangeInput(
                  value,
                  setFullName,
                  setFullNameError,
                  fullNameRegex,
                  fullNameError,
                );
              }}
              onSubmitRef={createRef.passwordRef}
              onSubmit={onSubmitRef => {
                onSubmit(onSubmitRef);
              }}
              emailError={fullNameError}
            />

            <CustomPhoneInput
              containerStyle={{...styles.customPhoneInputcontainer}}
              phoneInputRef={createRef.phoneNumberRef}
              value={phoneNumber}
              defaultCode={countryCode}
              onChangeText={setPhoneNumber}
              isHelpText={false}
              isInvalidNumber={isInvalidNumber}
              onChangeCountry={onChangeCountry}
            />
            {phoneNumberError ? (
              <Text style={styles.errormsg}> {phoneNumberError}</Text>
            ) : null}

            <CustomTextInput
              enablesReturnKeyAutomaticallly={true}
              inputRightIcon={Images.eyeShowPass}
              inputRightHideIcon={Images.eyeHidePass}
              secureTextEntry={secureText}
              onPressEye={handleSecureTextEntry}
              returnKeyType="next"
              placeholder="Password"
              editable={true}
              refrence={createRef.passwordRef}
              value={password}
              floatingLabel
              onChangeText={value => {
                onChangeInput(
                  value,
                  setPassword,
                  setPasswordError,
                  passwordRegex,
                  passwordError,
                );
              }}
              onSubmitRef={createRef.confirmPasswordRef}
              onSubmit={onSubmitRef => {
                onSubmit(onSubmitRef);
              }}
              emailError={passwordError}
            />

            <CustomTextInput
              returnKeyType="done"
              enablesReturnKeyAutomaticallly={true}
              inputRightIcon={Images.eyeShowPass}
              inputRightHideIcon={Images.eyeHidePass}
              secureTextEntry={secureText}
              onPressEye={handleSecureTextEntry}
              placeholder="Confirm Password"
              editable={true}
              refrence={createRef.confirmPasswordRef}
              value={confirmPassword}
              floatingLabel
              onChangeText={value => {
                onChangeInput(
                  value,
                  setConfirmPassword,
                  setConfirmPasswordError,
                  passwordRegex,
                  confirmPasswordError,
                );
              }}
              onSubmitRef={createRef.confirmPasswordRef}
              onSubmit={onSubmitRef => {
                onSubmit(onSubmitRef);
              }}
              emailError={confirmPasswordError}
            />
          </View>
        </ScrollView>
        <View
          style={{
            marginBottom: isOpen ? Metrics.ratio(8) : Metrics.ratio(90),
            marginHorizontal: Metrics.ratio(16),
          }}>
          <TouchableOpacity style={{...styles.saveBtn}}>
            <Text style={{...styles.saveBtnText}}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

ManageAccounts.defaultProps = {};

ManageAccounts.propTypes = {};

export default ManageAccounts;
