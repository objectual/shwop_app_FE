import React, {useState, useRef} from 'react';
import {Text, ScrollView, View, Image, TouchableOpacity} from 'react-native';

import {nameRegex, validate} from '../../services/Validation';
import {Header, CustomTextInput} from '../../components';
import {Images, Metrics} from '../../theme';

import styles from './styles';

const SignUp = props => {
  const createRef = {
    fullNameInputRef: useRef(null),
    userNameInputRef: useRef(null),
    passwordInputRef: useRef(null),
    confirmpasswordInputRef: useRef(null),
  };
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [fullnameError, setFullnameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmpasswordError, setConfirmPasswordError] = useState('');

  let errors = {
    fullNameErr: 'Full name is required.',
    usernameError: 'Username is required.',
    passwordError: 'Password is required.',
    confirmpasswordError: 'Password is required.',
  };

  const handleValidation = async () => {
    if (!fullname) {
      setFullnameError('Full name is required.');
      setTimeout(() => {
        setFullnameError('');
      }, 3000);
    } else if (!username) {
      setUsernameError('Username is required.');
      setTimeout(() => {
        setUsernameError('');
      }, 3000);
    } else if (!password) {
      setPasswordError('Password is required.');
      setTimeout(() => {
        setPasswordError('');
      }, 3000);
    } else if (!confirmpassword) {
      setConfirmPasswordError('Confirm Password is required.');
      setTimeout(() => {
        setConfirmPasswordError('');
      }, 3000);
    }
  };

  const onSubmit = value => {
    if (value === 'onDone') {
      handleValidation();
    } else {
      value.current.focus();
    }
  };

  const onChangeInput = async (
    value,
    state,
    errorState,
    regex,
    errorMessage,
  ) => {
    let error = validate(value, regex, errorMessage);
    state(value);
    errorState(error);
  };

  const renderSignupFields = () => {
    return (
      <>
        <CustomTextInput
          returnKeyType="next"
          enablesReturnKeyAutomaticallly={true}
          placeholder="Full Name"
          editable={true}
          refrence={createRef.fullNameInputRef}
          value={fullname}
          onChangeInput={value =>
            onChangeInput(
              value,
              setFullname,
              setFullnameError,
              nameRegex,
              errors.fullNameErr,
            )
          }
          onSubmitRef={createRef.fullNameInputRef}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={fullnameError}
        />
        <CustomTextInput
          returnKeyType="next"
          enablesReturnKeyAutomaticallly={true}
          placeholder="Username"
          editable={true}
          refrence={createRef.userNameInputRef}
          value={username}
          onChangeInput={value =>
            onChangeInput(
              value,
              setUsername,
              setUsernameError,
              nameRegex,
              errors.usernameError,
            )
          }
          onSubmitRef={createRef.userNameInputRef}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={usernameError}
        />
        <CustomTextInput
          secureTextEntry={true}
          returnKeyType="done"
          enablesReturnKeyAutomaticallly={true}
          placeholder={'Password'}
          editable={true}
          refrence={createRef.passwordInputRef}
          value={password}
          onChangeInput={value => setPassword(value)}
          onSubmitRef={'onDone'}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={passwordError}
        />
        <CustomTextInput
          secureTextEntry={true}
          returnKeyType="done"
          enablesReturnKeyAutomaticallly={true}
          placeholder={'Confirm Password'}
          editable={true}
          refrence={createRef.confirmpasswordInputRef}
          value={confirmpassword}
          onChangeInput={value => setConfirmPassword(value)}
          onSubmitRef={'onDone'}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={confirmpasswordError}
        />
      </>
    );
  };

  return (
    <>
      <Header
        {...props}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        headerText={'Sign up'}
        leftBtnPress={() => props.navigation.goBack()}
        rightBtnPress={() => props.navigation.goBack()}
        headerTextStyle={styles.headerTextStyle}
      />
      <ScrollView style={styles.imageView}>{renderSignupFields()}</ScrollView>
    </>
  );
};

export default SignUp;
