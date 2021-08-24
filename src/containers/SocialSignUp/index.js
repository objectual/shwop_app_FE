import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  // TouchableOpacity,
  TextInput,
  // PermissionsAndroid,
  // Platform,
} from 'react-native';
// import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import auth from '@react-native-firebase/auth';

import {
  fullNameRegex,
  nameRegex,
  // passwordRegex,
  validate,
} from '../../services/Validation';
import {
  Header,
  CustomTextInput,
  CustomPhoneInput,
  PurpleButton,
  OverlayLoader,
} from '../../components';
import {Images, Colors} from '../../theme';
import util from '../../util';
// import {request as social_register_request} from '../../redux/actions/SocialRegister';

import styles from './styles';

const SocialSignUp = props => {
  const {name, email, profileImage} = props.route.params;

  // const dispatch = useDispatch();

  const socialRegisterResponse = useSelector(state => state.socialRegister);

  const phoneInputRef = useRef(null);
  const createRef = {
    fullNameInputRef: useRef(null),
    userNameInputRef: useRef(null),
    bioInputRef: useRef(null),
    // passwordInputRef: useRef(null),
    // confirmpasswordInputRef: useRef(null),
    // shwoopIdInputRef: useRef(null),
  };

  const [fullname, setFullname] = useState(name);
  const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmpassword, setConfirmPassword] = useState('');
  // const [shwoopId, setShwoopId] = useState('');
  const [bio, setBio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('SG');
  const [callingCode, setCallingCode] = useState('65');
  const [fullnameError, setFullnameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [confirmpasswordError, setConfirmPasswordError] = useState('');
  // const [shwoopIDError, setShwoopIdError] = useState('');
  const [imageError, setImageError] = useState('');
  const [bioError, setBioError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  // const [placeholderImage, setPlaceholderImage] = useState({uri: profileImage});
  const [placeholderImage] = useState({uri: profileImage});
  // const [secureText, setSecureText] = useState(true);
  // const [secureTextConfirm, setSecureTextConfirm] = useState(true);
  const [floatLabel, setFloatLabel] = useState(false);
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      !socialRegisterResponse.isFetching &&
      !socialRegisterResponse.failure &&
      !socialRegisterResponse.errorMessage &&
      socialRegisterResponse?.data?.success
    ) {
      setIsLoading(false);

      let phoneNumberWithoutZero =
        phoneInputRef.current?.getNumberAfterPossiblyEliminatingZero();

      util.showCommonMessage({
        title: 'Message',
        message: socialRegisterResponse?.data?.msg,
        onPress: () =>
          handleNavigation('Otp', {
            selectedPhoneNumber: `${callingCode}${phoneNumberWithoutZero?.number}`,
          }),
      });
    } else if (!socialRegisterResponse.isFetching) {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socialRegisterResponse]);

  let errors = {
    fullNameErr: 'Invaild full name.',
    usernameError: 'Invalid username.',
    // passwordError:
    //   'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
    // shwoopIDError: 'Shwoop Id is required.',
  };

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const handleValidation = async () => {
    if (!placeholderImage?.uri) {
      setImageError('Image is required.');
      setTimeout(() => {
        setImageError('');
      }, 3000);
    } else if (!fullname) {
      setFullnameError('Full name is required.');
      setTimeout(() => {
        setFullnameError('');
      }, 3000);
    } else if (!username) {
      setUsernameError('Username is required.');
      setTimeout(() => {
        setUsernameError('');
      }, 3000);
    }
    // else if (!password) {
    //   setPasswordError('Password is required.');
    //   setTimeout(() => {
    //     setPasswordError('');
    //   }, 3000);
    // } else if (!confirmpassword) {
    //   setConfirmPasswordError('Confirm Password is required.');
    //   setTimeout(() => {
    //     setConfirmPasswordError('');
    //   }, 3000);
    // } else if (confirmpassword !== password) {
    //   setConfirmPasswordError('Confirm Password should be same');
    //   setTimeout(() => {
    //     setConfirmPasswordError('');
    //   }, 3000);
    // }
    else if (!phoneNumber) {
      setPhoneError('Phone Number is required.');
      setTimeout(() => {
        setPhoneError('');
      }, 3000);
    } else if (!phoneInputRef.current?.isValidNumber(phoneNumber)) {
      setIsInvalidNumber(true);
      setTimeout(() => {
        setIsInvalidNumber(false);
      }, 3000);
    }
    // else if (!shwoopId) {
    //   setShwoopIdError('Shwoop Id is required.');
    //   setTimeout(() => {
    //     setShwoopIdError('');
    //   }, 3000);
    // }
    else if (!bio) {
      setBioError('Bio is required.');
      setTimeout(() => {
        setBioError('');
      }, 3000);
    } else if (
      placeholderImage?.uri &&
      fullname &&
      username &&
      phoneNumber &&
      phoneInputRef.current?.isValidNumber(phoneNumber) &&
      bio &&
      !imageError &&
      !fullnameError &&
      !usernameError &&
      !phoneError &&
      !bioError
    ) {
      handleRegister();
    }
  };

  const handleRegister = async () => {
    let phoneNumberWithoutZero =
      phoneInputRef.current?.getNumberAfterPossiblyEliminatingZero();

    let socialRegisterDetails = {
      email,
      name: fullname,
      username: username,
      about: bio,
      profileImage: placeholderImage.uri,
    };

    try {
      setIsLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(
        phoneNumberWithoutZero.formattedNumber,
      );
      handleNavigation('SocialOtp', {
        selectedPhoneNumber: phoneNumber,
        selectedCountryCode: countryCode,
        selectedCallingCode: callingCode,
        confirmation,
        socialRegisterDetails,
        isSocialLogin: false,
      });
      setIsLoading(false);
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error?.message,
      });
      setIsLoading(false);
    }

    // dispatch(social_register_request(payload));
  };

  // const handleSecureTextEntry = () => {
  //   setSecureText(!secureText);
  // };

  // const handleSecureTextEntryConfirm = () => {
  //   setSecureTextConfirm(!secureTextConfirm);
  // };

  const onChangeCountry = country => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const onChangeInput = (value, state, errorState, regex, errorMessage) => {
    let error = validate(value, regex, errorMessage);
    state(value);
    errorState(error);
  };

  const onSubmit = value => {
    if (value === 'onDone') {
      handleValidation();
    } else {
      value.current.focus();
    }
  };

  const onChangeTitle = text => bio.length <= 120 && setBio(text);

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
          floatingLabel
          onChangeText={value =>
            onChangeInput(
              value,
              setFullname,
              setFullnameError,
              fullNameRegex,
              errors.fullNameErr,
            )
          }
          onSubmitRef={createRef.userNameInputRef}
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
          floatingLabel
          refrence={createRef.userNameInputRef}
          value={username}
          onChangeText={value =>
            onChangeInput(
              value,
              setUsername,
              setUsernameError,
              nameRegex,
              errors.usernameError,
            )
          }
          onSubmitRef={createRef.bioInputRef}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={usernameError}
        />
        {/* <CustomTextInput
          inputRightIcon={Images.eyeShowPass}
          inputRightHideIcon={Images.eyeHidePass}
          secureTextEntry={secureText}
          onPressEye={handleSecureTextEntry}
          returnKeyType="done"
          enablesReturnKeyAutomaticallly={true}
          placeholder={'Password'}
          editable={true}
          refrence={createRef.passwordInputRef}
          floatingLabel
          value={password}
          onChangeText={value =>
            onChangeInput(
              value,
              setPassword,
              setPasswordError,
              passwordRegex,
              errors.passwordError,
            )
          }
          onSubmitRef={createRef.confirmpasswordInputRef}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={passwordError}
        /> */}
        {/* <CustomTextInput
          inputRightIcon={Images.eyeShowPass}
          inputRightHideIcon={Images.eyeHidePass}
          secureTextEntry={secureTextConfirm}
          onPressEye={handleSecureTextEntryConfirm}
          returnKeyType="done"
          enablesReturnKeyAutomaticallly={true}
          placeholder={'Confirm Password'}
          editable={true}
          floatingLabel
          refrence={createRef.confirmpasswordInputRef}
          value={confirmpassword}
          onChangeText={value =>
            onChangeInput(
              value,
              setConfirmPassword,
              setConfirmPasswordError,
              passwordRegex,
              confirmpasswordError,
            )
          }
          onSubmitRef={createRef.shwoopIdInputRef}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={confirmpasswordError}
        /> */}
        <CustomPhoneInput
          phoneInputRef={phoneInputRef}
          value={phoneNumber}
          defaultCode={countryCode}
          onChangeText={setPhoneNumber}
          isHelpText={true}
          isInvalidNumber={isInvalidNumber}
          onChangeCountry={onChangeCountry}
        />
        {phoneError ? <Text style={styles.errormsg}> {phoneError}</Text> : null}

        {/* <CustomTextInput
          returnKeyType="next"
          enablesReturnKeyAutomaticallly={true}
          placeholder="Shwoop ID : 2976154"
          editable={true}
          floatingLabel
          refrence={createRef.shwoopIdInputRef}
          value={shwoopId}
          onChangeText={value => setShwoopId(value)}
          onSubmitRef={createRef.userNameInputRef}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={shwoopIDError}
        /> */}
        <View>
          {floatLabel ? (
            <Text style={{...styles.labelTopText}}>Bio</Text>
          ) : null}
          <TextInput
            maxLength={120}
            value={bio}
            onChangeText={onChangeTitle}
            style={{...styles.titleTextInput}}
            placeholder={'Bio'}
            placeholderTextColor={Colors.Mercury}
            multiline={true}
            ref={createRef.bioInputRef}
            numberOfLines={10}
            onFocus={() => setFloatLabel(true)}
            onBlur={() => setFloatLabel(bio !== '')}
          />
          <Text
            style={{
              ...styles.titleCount,
            }}>{`Character ${bio.length}/120`}</Text>
        </View>
        {bioError ? <Text style={styles.errormsg}> {bioError}</Text> : null}
      </>
    );
  };

  // const pickImage = async () => {
  //   try {
  //     let granted;
  //     granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //       {
  //         title: 'Allow Shwoop App to access media permission',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (
  //       Platform.OS === 'android' &&
  //       granted !== PermissionsAndroid.RESULTS.GRANTED
  //     ) {
  //       util.showAlertWithDelay({
  //         title: 'Error',
  //         message: 'Storage permission denied',
  //       });
  //     } else {
  //       let options = {};
  //       launchImageLibrary(options, response => {
  //         if (response.didCancel) {
  //         } else if (response.error) {
  //         } else if (response.customButton) {
  //           util.showAlertWithDelay({
  //             title: 'Error',
  //             message: response.customButton,
  //           });
  //         } else {
  //           const image = {
  //             uri: response.assets[0].uri,
  //             type: response.assets[0].type,
  //             name: response.assets[0].fileName,
  //           };
  //           setPlaceholderImage({
  //             ...image,
  //           });
  //         }
  //       });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const selectImage = async () => {
  //   let granted;
  //   granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.CAMERA,
  //     {
  //       title: 'Allow Shwoop App to access camera permission',
  //       buttonNegative: 'Cancel',
  //       buttonPositive: 'OK',
  //     },
  //   );
  //   if (
  //     Platform.OS === 'android' &&
  //     granted !== PermissionsAndroid.RESULTS.GRANTED
  //   ) {
  //     util.showAlertWithDelay({
  //       title: 'Error',
  //       message: 'Camera permission denied',
  //     });
  //   } else {
  //     launchCamera(
  //       {
  //         mediaType: 'photo',
  //         includeBase64: false,
  //         maxHeight: 200,
  //         maxWidth: 200,
  //       },
  //       response => {
  //         if (response.didCancel) {
  //         } else if (response.error) {
  //         } else if (response.customButton) {
  //           util.showAlertWithDelay({
  //             title: 'Error',
  //             message: response.customButton,
  //           });
  //         } else {
  //           const image = {
  //             uri: response.assets[0].uri,
  //             type: response.assets[0].type,
  //             name: response.assets[0].fileName,
  //           };
  //           setPlaceholderImage({
  //             ...image,
  //           });
  //         }
  //       },
  //     );
  //   }
  // };

  return (
    <>
      <Header
        {...props}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        headerText={'Sign up'}
        leftBtnPress={() => props.navigation.goBack()}
        headerTextStyle={styles.headerTextStyle}
      />
      <ScrollView>
        <View style={{...styles.imageView}}>
          <View style={{...styles.uploadArea}}>
            <View style={{...styles.ImageUserView}}>
              <Image
                style={
                  placeholderImage.uri ? styles.image : styles.imageDefault
                }
                resizeMode={placeholderImage.uri ? 'cover' : 'contain'}
                source={
                  placeholderImage.uri ? placeholderImage : Images.userImg
                }
              />
            </View>
            {/* <TouchableOpacity style={{...styles.uploadBtn}}>
              <Image style={styles.upload} source={Images.upload} />
              <Text onPress={() => pickImage()} style={styles.BuyBtnText}>
                Upload Image
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectImage()}
              style={{...styles.buyBtn}}>
              <Image style={styles.upload} source={Images.camera} />
              <Text style={styles.BuyBtnText}>Take Image</Text>
            </TouchableOpacity> */}
            {/* {imageError ? (
              <Text style={styles.errormsg}> {imageError}</Text>
            ) : null} */}
          </View>
          {renderSignupFields()}
          {/* <View style={styles.tagArea}>
            <TextInput
              style={styles.inputTag}
              placeholder={'Social Media Link'}
              placeholderTextColor={Colors.Mercury}
            />
            <TouchableOpacity style={styles.purpleBtn}>
              <Text style={styles.BtnText}>ADD</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialLinkArea}>
            <Image
              resizeMode="contain"
              style={styles.facebookIcon}
              source={Images.facebookBlack}
            />
            <Text style={styles.fbTxt}>https://we.tl/t-Bks3OCTiyM</Text>
          </View>
          <View style={styles.socialLinkArea}>
            <Image
              resizeMode="contain"
              style={styles.facebookIcon}
              source={Images.twitterBlack}
            />
            <Text style={styles.fbTxt}>https://we.tl/t-Bks3OCTiyM</Text>
          </View> */}
        </View>
      </ScrollView>
      <PurpleButton onPress={() => handleValidation()} title="Save" />
      <OverlayLoader isLoading={isLoading} />
    </>
  );
};

export default SocialSignUp;
