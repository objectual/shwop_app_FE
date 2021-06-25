import React, {useState, useRef, useEffect} from 'react';
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
import RNPickerSelect from 'react-native-picker-select';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {nameRegex, numberRegex, validate} from '../../services/Validation';
import {
  Header,
  CustomTextInput,
  GradientButton,
  Layout,
} from '../../components';
import {Images, Colors, Metrics, Fonts} from '../../theme';
import {useKeyboardStatus} from '../../hooks';
import util from '../../util';

import styles from './styles';

const AddProducts = props => {
  const createRef = {
    titleInputRef: useRef(null),
    categoryInputRef: useRef(null),
    subCategoryInputRef: useRef(null),
    priceInputRef: useRef(null),
    descriptionInputRef: useRef(null),
  };
  const [floatLabel, setFloatLabel] = useState(false);
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [bio, setBio] = useState('');
  const [titleError, setTitleError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [subCategoryError, setSubCategoryError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [imageError, setImageError] = useState('');
  const [bioError, setBioError] = useState('');
  const [uploadImage, setUploadImage] = useState([]);

  const textInputRef = useRef();

  const [isOpen] = useKeyboardStatus();

  useEffect(() => {
    if (!isOpen) {
      textInputRef.current.blur();
    }
  }, [isOpen]);

  console.log(uploadImage, 'uploadImage');

  let errors = {
    titleError: 'Title is required.',
    priceError: 'Price is required.',
  };

  const handleDeleteImage = (item, index) => {
    let newUploadImge = [...uploadImage];
    newUploadImge.splice(index, 1);
    setUploadImage([...newUploadImge]);
  };
  const handleValidation = async () => {
    if (uploadImage.length === 0) {
      setImageError('Image is required.');
      setTimeout(() => {
        setImageError('');
      }, 3000);
    } else if (!title) {
      setTitleError('Title is required.');
      setTimeout(() => {
        setTitleError('');
      }, 3000);
    } else if (!category) {
      setCategoryError('Category is required.');
      setTimeout(() => {
        setCategoryError('');
      }, 3000);
    } else if (!subCategory) {
      setSubCategoryError('Sub Category is required.');
      setTimeout(() => {
        setSubCategoryError('');
      }, 3000);
    } else if (!price) {
      setPriceError('Price is required.');
      setTimeout(() => {
        setPriceError('');
      }, 3000);
    } else if (!bio) {
      setBioError('Description is required.');
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
  const placeholder = {
    label: 'Category',
    value: null,
  };

  const placeholdersubCategory = {
    label: 'Sub Category',
    value: null,
  };

  const onChangeTitle = text => bio.length <= 120 && setBio(text);

  const renderAddProductFields = () => {
    return (
      <View style={{...styles.fieldsContainer}}>
        <CustomTextInput
          returnKeyType="next"
          enablesReturnKeyAutomaticallly={true}
          placeholder="Title"
          editable={true}
          refrence={createRef.titleInputRef}
          value={title}
          floatingLabel
          onChangeText={value =>
            onChangeInput(
              value,
              setTitle,
              setTitleError,
              nameRegex,
              errors.titleError,
            )
          }
          onSubmitRef={createRef.priceInputRef}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={titleError}
        />
        <View style={{...styles.pickerContainer}}>
          {category ? (
            <Text style={{...styles.labelTopText}}>Category</Text>
          ) : null}
          <RNPickerSelect
            style={{
              inputAndroid: {
                color: Colors.Black,
                fontSize: Metrics.ratio(13),
                fontFamily: Fonts.type.NunitoLight,
                borderColor: Colors.Mercury,
                borderWidth: 1,
                borderRadius: Metrics.ratio(30),
                paddingHorizontal: Metrics.ratio(20),
              },
              placeholder: {
                color: Colors.Mercury,
                fontFamily: Fonts.type.Nunito,
                fontSize: Metrics.ratio(13),
              },
            }}
            placeholder={placeholder}
            useNativeAndroidPickerStyle={false}
            disabled={false}
            value={category?.label}
            onValueChange={(itemValue, itemIndex) => {
              setCategory(itemValue);
            }}
            items={[{label: 'Name', value: 'Name'}]}
            Icon={() => (
              <View
                style={{
                  ...styles.pickerView,
                }}>
                <Image
                  style={{...styles.picker_arrow}}
                  resizeMode="contain"
                  source={Images.picker_arrow}
                />
              </View>
            )}
          />
          {categoryError ? (
            <Text style={styles.errormsg}> {categoryError}</Text>
          ) : null}
        </View>
        <View style={{...styles.pickerContainer}}>
          {subCategory ? (
            <Text style={{...styles.labelTopText}}>Sub Category</Text>
          ) : null}
          <RNPickerSelect
            style={{
              inputAndroid: {
                color: Colors.Black,
                fontSize: Metrics.ratio(13),
                fontFamily: Fonts.type.NunitoLight,
                borderColor: Colors.Mercury,
                borderWidth: 1,
                borderRadius: Metrics.ratio(30),
                paddingHorizontal: Metrics.ratio(20),
              },
              placeholder: {
                color: Colors.Mercury,
                fontFamily: Fonts.type.Nunito,
                fontSize: Metrics.ratio(13),
              },
            }}
            placeholder={placeholdersubCategory}
            useNativeAndroidPickerStyle={false}
            disabled={false}
            value={subCategory?.label}
            onValueChange={(itemValue, itemIndex) => {
              setSubCategory(itemValue);
            }}
            items={[{label: 'Name', value: 'Name'}]}
            Icon={() => (
              <View
                style={{
                  ...styles.pickerView,
                }}>
                <Image
                  style={{...styles.picker_arrow}}
                  resizeMode="contain"
                  source={Images.picker_arrow}
                />
              </View>
            )}
          />
          {subCategoryError ? (
            <Text style={styles.errormsg}> {subCategoryError}</Text>
          ) : null}
        </View>
        <CustomTextInput
          returnKeyType="next"
          enablesReturnKeyAutomaticallly={true}
          placeholder="Price"
          editable={true}
          refrence={createRef.priceInputRef}
          value={price}
          floatingLabel
          onChangeText={value =>
            onChangeInput(
              value,
              setPrice,
              setPriceError,
              numberRegex,
              errors.priceError,
            )
          }
          onSubmitRef={createRef.descriptionInputRef}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={priceError}
        />

        <View>
          {floatLabel ? (
            <Text style={{...styles.labelTopText}}>Description</Text>
          ) : null}
          <TextInput
            value={bio}
            onChangeText={onChangeTitle}
            style={{...styles.titleTextInput}}
            placeholder={'Description'}
            placeholderTextColor={Colors.Mercury}
            multiline={true}
            ref={textInputRef}
            numberOfLines={10}
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
      </View>
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
        ImagePicker.openPicker({
          multiple: true,
          mediaType: 'photo',
        }).then(images => {
          setUploadImage([...images, ...uploadImage]);
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
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        setUploadImage([...uploadImage, image]);
      });
    }
  };

  return (
    <Layout {...props} isLogedIn={true}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />
      <Header
        {...props}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        headerText={'Add Product'}
        leftBtnPress={() => props.navigation.goBack()}
        rightBtnPress={() => props.navigation.goBack()}
        headerTextStyle={styles.headerTextStyle}
        isDropShadow={false}
        headerBgColor={Colors.White}
      />
      <ScrollView>
        <View style={{...styles.imageView}}>
          <View style={{...styles.uploadArea}}>
            <View>
              <TouchableOpacity
                onPress={() => selectImage()}
                style={{...styles.buyBtn}}>
                <Image style={{...styles.upload}} source={Images.camera} />
                <Text style={{...styles.BuyBtnText}}>Take Image</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{...styles.uploadBtn}}>
                <Image style={{...styles.upload}} source={Images.upload} />
                <Text
                  onPress={() => pickImage()}
                  style={{...styles.BuyBtnText}}>
                  Upload Image(s)
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{...styles.imgMainContainer}}>
            {uploadImage.map((item, index) => {
              return (
                <View style={{...styles.ImageUserView}}>
                  <Image
                    style={{...styles.image}}
                    resizeMode="cover"
                    source={{uri: item.path}}
                  />
                  <TouchableOpacity
                    onPress={() => handleDeleteImage(item, index)}
                    style={styles.close}>
                    <MaterialCommunityIcons
                      name="close"
                      size={Metrics.ratio(11)}
                      color={Colors.Black}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          {imageError ? (
            <Text style={{...styles.errormsg}}> {imageError}</Text>
          ) : null}
          {renderAddProductFields()}
        </View>
        <GradientButton
          label={'Add Product'}
          containerStyle={{...styles.gradientButtonContainer}}
          onPress={() => handleValidation()}
        />
      </ScrollView>
    </Layout>
  );
};

export default AddProducts;
