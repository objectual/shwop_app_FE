import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  Platform,
  StatusBar,
} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

import {nameRegex, fullNameRegex, validate} from '../../services/Validation';
import {Header, CustomTextInput, PurpleButton} from '../../components';
import {Images, Colors} from '../../theme';
import {useKeyboardStatus} from '../../hooks';
import util from '../../util';

import styles from './styles';

const EditProfile = props => {
  const createRef = {
    fullNameInputRef: useRef(null),
    userNameInputRef: useRef(null),
  };
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [bio, setBio] = useState('');
  const [fullnameError, setFullnameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [imageError, setImageError] = useState('');
  const [bioError, setBioError] = useState('');
  const [placeholderImage, setPlaceholderImage] = useState({});
  const [floatLabel, setFloatLabel] = useState(false);

  const textInputRef = useRef();

  const [isOpen] = useKeyboardStatus();

  useEffect(() => {
    if (!isOpen) {
      textInputRef.current.blur();
    }
  }, [isOpen]);

  let errors = {
    fullNameErr: 'Full name is required.',
    usernameError: 'Username is required.',
  };

  const handleValidation = async () => {
    if (!fullname) {
      setFullnameError('Full name is required.');
      setTimeout(() => {
        setFullnameError('');
      }, 3000);
    } else if (!placeholderImage?.uri) {
      setImageError('Image is required.');
      setTimeout(() => {
        setImageError('');
      }, 3000);
    } else if (!username) {
      setUsernameError('Username is required.');
      setTimeout(() => {
        setUsernameError('');
      }, 3000);
    } else if (!bio) {
      setBioError('Bio is required.');
      setTimeout(() => {
        setBioError('');
      }, 3000);
    }
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
              fullnameError,
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
          refrence={createRef.userNameInputRef}
          value={username}
          floatingLabel
          onChangeText={value =>
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

        <View>
          {floatLabel ? (
            <Text style={{...styles.labelTopText}}>Bio</Text>
          ) : null}
          <TextInput
            value={bio}
            onChangeText={onChangeTitle}
            style={{...styles.titleTextInput}}
            placeholder={'Bio'}
            placeholderTextColor={Colors.Mercury}
            multiline={true}
            numberOfLines={9}
            ref={textInputRef}
            maxLength={120}
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

  const pickImage = async () => {
    try {
      let granted;
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Allow Shwoop App to access media permission',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (
        Platform.OS === 'android' &&
        granted !== PermissionsAndroid.RESULTS.GRANTED
      ) {
        util.showAlertWithDelay({
          title: 'Error',
          message: 'Storage permission denied',
        });
      } else {
        let options = {};
        launchImageLibrary(options, response => {
          if (response.didCancel) {
          } else if (response.error) {
          } else if (response.customButton) {
            util.showAlertWithDelay({
              title: 'Error',
              message: response.customButton,
            });
          } else {
            const image = {
              uri: response.assets[0].uri,
              type: response.assets[0].type,
              name: response.assets[0].fileName,
            };
            setPlaceholderImage({
              ...image,
            });
          }
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const selectImage = async () => {
    let granted;
    granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Allow Shwoop App to access camera permission',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (
      Platform.OS === 'android' &&
      granted !== PermissionsAndroid.RESULTS.GRANTED
    ) {
      util.showAlertWithDelay({
        title: 'Error',
        message: 'Camera permission denied',
      });
    } else {
      launchCamera(
        {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 200,
          maxWidth: 200,
        },
        response => {
          if (response.didCancel) {
          } else if (response.error) {
          } else if (response.customButton) {
            util.showAlertWithDelay({
              title: 'Error',
              message: response.customButton,
            });
          } else {
            const image = {
              uri: response.assets[0].uri,
              type: response.assets[0].type,
              name: response.assets[0].fileName,
            };
            setPlaceholderImage({
              ...image,
            });
          }
        },
      );
    }
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={Colors.Concrete}
        barStyle="dark-content"
      />

      <Header
        {...props}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        headerText={'Setup User Profile'}
        leftBtnPress={() => props.navigation.goBack()}
        rightBtnPress={() => props.navigation.goBack()}
        headerTextStyle={styles.headerTextStyle}
      />
      <ScrollView>
        <View style={styles.imageView}>
          <View style={styles.uploadArea}>
            <View style={styles.ImageUserView}>
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
            <TouchableOpacity style={styles.uploadBtn}>
              <Image style={styles.upload} source={Images.upload} />
              <Text onPress={() => pickImage()} style={styles.BuyBtnText}>
                Upload Image
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectImage()}
              style={styles.buyBtn}>
              <Image style={styles.upload} source={Images.camera} />
              <Text style={styles.BuyBtnText}>Take Image</Text>
            </TouchableOpacity>
            {imageError ? (
              <Text style={styles.errormsg}> {imageError}</Text>
            ) : null}
          </View>
          {renderSignupFields()}
        </View>
      </ScrollView>
      <PurpleButton onPress={() => handleValidation()} title="Save" />
    </>
  );
};

export default EditProfile;
