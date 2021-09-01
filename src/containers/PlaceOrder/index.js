import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import {StackActions} from '@react-navigation/native';

import styles from './styles';

import {
  Header,
  GradientButton,
  CustomTextInput,
  CustomPhoneInput,
  ProductCard,
  CustomPopup,
} from '../../components';
import {Images, Colors} from '../../theme';
import {fullNameRegex, emailRegex, validate} from '../../services/Validation';

const PlaceOrder = props => {
  const createRef = {
    fullNameInputRef: useRef(null),
    phoneNumberInputRef: useRef(null),
    emailAddressInputRef: useRef(null),
    otherInfoInputRef: useRef(null),
  };

  const [stocks, setStocks] = useState(0);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('SG');
  // const [callingCode, setCallingCode] = useState('65');
  const [emailAddress, setEmailAddress] = useState('');
  const [otherInfo, setOtherInfo] = useState('');

  const [fullNameError, setFullNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailAddressError, setEmailAddressError] = useState('');
  const [otherInfoError, setOtherInfoError] = useState('');
  const [showYourTakePopup, setShowYourTakePopup] = useState(false);
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);

  const [floatLabel, setFloatLabel] = useState(false);

  const errors = {
    fullNameError: 'Title is required.',
    phoneNumberError: 'Phone number is required.',
    emailAddressError: 'Email address is required.',
    otherInfoError: 'Issue is required.',
  };

  const handleReplaceNavigation = (screenName, params) => {
    props.navigation.dispatch(StackActions.replace(screenName, {...params}));
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

  const onChangeOtherInfo = text =>
    otherInfo.length <= 120 && setOtherInfo(text);

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
    } else if (!otherInfo) {
      setOtherInfoError('Issue is required.');
      setTimeout(() => {
        setOtherInfoError('');
      }, 3000);
    }
  };

  return (
    <View style={{...styles.container}}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />

      <Header
        {...props}
        isDropShadow={false}
        headerBgColor={Colors.White}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Place Order'}
      />

      <View style={{...styles.headerSeparator}} />

      <ScrollView>
        <View style={{...styles.orderContainer}}>
          <Text style={{...styles.orderHeading}}>Your Order</Text>

          <ProductCard
            image={Images.FollowCardImg}
            title={'Nike New Era Shoes'}
            brand={'Nike Corporation'}
            isRating={true}
            isPrice={true}
            price={32.18}
            rating={3}
            isStock={true}
            stocks={stocks}
            onPressDeccStock={() => setStocks(stocks - 1)}
            onPressIncStock={() => setStocks(stocks + 1)}
          />
        </View>

        <View style={{...styles.formContainer}}>
          <Text style={{...styles.detailHeading}}>Order Details</Text>

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

          <View>
            {floatLabel ? (
              <Text style={{...styles.labelTopText}}>Other Information</Text>
            ) : null}
            <TextInput
              value={otherInfo}
              onChangeText={onChangeOtherInfo}
              style={{...styles.titleTextInput}}
              placeholder={'Other Information'}
              placeholderTextColor={Colors.Mercury}
              ref={createRef.otherInfoInputRef}
              multiline={true}
              numberOfLines={10}
              maxLength={120}
              onFocus={() => setFloatLabel(true)}
              onBlur={() => setFloatLabel(otherInfo !== '')}
              onPressOut={Keyboard.dismiss}
            />
            <Text
              style={{
                ...styles.titleCount,
              }}>{`Character ${otherInfo.length}/120`}</Text>
          </View>
          {otherInfoError ? (
            <Text style={styles.errormsg}> {otherInfoError}</Text>
          ) : null}

          <GradientButton
            label={'Place Order'}
            containerStyle={{...styles.gradientButtonContainer}}
            // onPress={() => handleValidation()}
            onPress={() => setShowYourTakePopup(true)}
          />
        </View>
      </ScrollView>

      <CustomPopup
        visible={showYourTakePopup}
        source={Images.order_placed}
        imageStyle={{...styles.imageStyle}}
        heading={'Your Order Has Been'}
        highlightedHeading={'Placed'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        btnLabel={'Shwoop Again'}
        btnContainerStyle={{...styles.btnContainerStyle}}
        btnGradientContainerStyle={{...styles.btnGradientContainerStyle}}
        onPress={() => handleReplaceNavigation('Main')}
      />
    </View>
  );
};

PlaceOrder.defaultProps = {};

PlaceOrder.propTypes = {};

export default PlaceOrder;
