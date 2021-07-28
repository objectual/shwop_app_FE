import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';

import styles from './styles';

import {
  Header,
  GradientButton,
  CustomTextInput,
  CustomPhoneInput,
} from '../../components';
import {Images, Colors} from '../../theme';
import {fullNameRegex, emailRegex, validate} from '../../services/Validation';

const ContactUs = props => {
  const createRef = {
    fullNameInputRef: useRef(null),
    phoneNumberInputRef: useRef(null),
    emailAddressInputRef: useRef(null),
    issueInputRef: useRef(null),
  };

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('SG');
  // const [callingCode, setCallingCode] = useState('65');
  const [emailAddress, setEmailAddress] = useState('');
  const [issue, setIssue] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailAddressError, setEmailAddressError] = useState('');
  const [issueError, setIssueError] = useState('');
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);

  const [floatLabel, setFloatLabel] = useState(false);

  const errors = {
    fullNameError: 'Title is required.',
    phoneNumberError: 'Phone number is required.',
    emailAddressError: 'Email address is required.',
    issueError: 'Issue is required.',
  };

  const onSubmit = value => {
    if (value === 'onDone') {
      handleValidation();
    } else {
      value?.current?.focus();
    }
  };

  const onChangeInput = (value, state, errorState, regex, errorMessage) => {
    let error = validate(value, regex, errorMessage);
    state(value);
    errorState(error);
  };

  const onChangeIssue = text => issue.length <= 120 && setIssue(text);

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
      setPhoneNumberError('Phone number is required.');
      setTimeout(() => {
        setPhoneNumberError('');
      }, 3000);
    } else if (
      !createRef.phoneNumberInputRef.current?.isValidNumber(phoneNumber)
    ) {
      setIsInvalidNumber(true);
      setTimeout(() => {
        setIsInvalidNumber(false);
      }, 3000);
    } else if (!emailAddress) {
      setEmailAddressError('Email address is required.');
      setTimeout(() => {
        setEmailAddressError('');
      }, 3000);
    } else if (!issue) {
      setIssueError('Issue is required.');
      setTimeout(() => {
        setIssueError('');
      }, 3000);
    }
  };

  return (
    <View style={{...styles.container}}>
      <StatusBar
        translucent
        backgroundColor={Colors.Concrete}
        barStyle="dark-content"
      />

      <Header
        {...props}
        isDropShadow={false}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Contact Us'}
      />

      <ScrollView>
        <View style={{...styles.formContainer}}>
          <Image
            resizeMode="contain"
            style={styles.terms_bg}
            source={Images.contact_us}
          />

          <CustomTextInput
            returnKeyType="next"
            enablesReturnKeyAutomaticallly={true}
            placeholder="Full Name"
            editable={true}
            refrence={createRef.fullNameInputRef}
            value={fullName}
            floatingLabel
            onChangeText={value =>
              onChangeInput(
                value,
                setFullName,
                setFullNameError,
                fullNameRegex,
                errors.fullNameError,
              )
            }
            onSubmitRef={createRef.emailAddressInputRef}
            onSubmit={onSubmitRef => {
              onSubmit(onSubmitRef);
            }}
            emailError={fullNameError}
          />

          <CustomPhoneInput
            containerStyle={{...styles.customPhoneInputContainer}}
            phoneInputRef={createRef.phoneNumberInputRef}
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
            returnKeyType="next"
            enablesReturnKeyAutomaticallly={true}
            placeholder="Email Address"
            editable={true}
            refrence={createRef.emailAddressInputRef}
            value={emailAddress}
            floatingLabel
            onChangeText={value =>
              onChangeInput(
                value,
                setEmailAddress,
                setEmailAddressError,
                emailRegex,
                errors.emailAddressError,
              )
            }
            onSubmitRef={createRef.issueInputRef}
            onSubmit={onSubmitRef => {
              onSubmit(onSubmitRef);
            }}
            emailError={emailAddressError}
          />

          <View>
            {floatLabel ? (
              <Text style={{...styles.labelTopText}}>Issue</Text>
            ) : null}
            <TextInput
              value={issue}
              onChangeText={onChangeIssue}
              style={{...styles.titleTextInput}}
              placeholder={'Issue'}
              placeholderTextColor={Colors.Mercury}
              ref={createRef.issueInputRef}
              multiline={true}
              numberOfLines={10}
              maxLength={120}
              onFocus={() => setFloatLabel(true)}
              onBlur={() => setFloatLabel(issue !== '')}
            />
            <Text
              style={{
                ...styles.titleCount,
              }}>{`Character ${issue.length}/120`}</Text>
          </View>
          {issueError ? (
            <Text style={styles.errormsg}> {issueError}</Text>
          ) : null}

          <GradientButton
            label={'Submit'}
            containerStyle={{...styles.gradientButtonContainer}}
            onPress={() => handleValidation()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

ContactUs.defaultProps = {};

ContactUs.propTypes = {};

export default ContactUs;
