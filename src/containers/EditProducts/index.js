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
import {useSelector} from 'react-redux';

import {fullNameRegex, numberRegex, validate} from '../../services/Validation';
import {
  Header,
  CustomTextInput,
  GradientButton,
  Layout,
  OverlayLoader,
  CustomTagInput,
} from '../../components';
import {Images, Colors, Metrics} from '../../theme';
import util from '../../util';
import {CATEGORIES, PRODUCT} from '../../config/WebServices';
import ApiSauce from '../../services/ApiSauce';

import styles from './styles';

const EditProducts = props => {
  const {productId} = props.route.params;

  const userDetailsResponse = useSelector(state => state.userDetails);

  const createRef = {
    titleInputRef: useRef(null),
    categoryInputRef: useRef(null),
    subCategoryInputRef: useRef(null),
    priceInputRef: useRef(null),
    descriptionInputRef: useRef(null),
    quantityInputRef: useRef(null),
  };
  const [floatLabel, setFloatLabel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [productDetails, setProductDetails] = useState();

  const [uploadImage, setUploadImage] = useState([]);
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('');
  const [refundable, setRefundable] = useState('');
  const [quantity, setQuantity] = useState('');
  const [tagList, setTagList] = useState([]);
  const [tagText, setTagText] = useState('');
  const [bio, setBio] = useState('');

  const [imageError, setImageError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [subCategoryError, setSubCategoryError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [currencyError, setCurrencyError] = useState('');
  const [refundableError, setRefundableError] = useState('');
  const [quantityError, setQuantityError] = useState('');
  const [tagError, setTagError] = useState('');
  const [bioError, setBioError] = useState('');

  const [disconnectedImages, setDisconnectedImages] = useState([]);
  const [disconnectedTags, setDisconnectedTags] = useState([]);

  useEffect(() => {
    getCategoriesAndSubcategories();
    getProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (bio) {
      setFloatLabel(true);
    }
  }, [bio]);

  // GET CATEGORIES AND SUB_CATEGORIES
  const getCategoriesAndSubcategories = async () => {
    try {
      setIsLoading(true);
      const result = await ApiSauce.get(CATEGORIES);
      setIsLoading(false);
      if (result?.data?.length) {
        const formatedCategories = result.data.map(element => {
          return {
            label: element.name,
            value: element.id,
            subCategory: element.subCategory,
          };
        });
        setCategories([...formatedCategories]);
      }
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
    }
  };

  // GET PRODUCTS DETAILS //
  const getProductDetails = async () => {
    try {
      setIsLoading(true);
      const result = await ApiSauce.get(
        PRODUCT(productId),
        userDetailsResponse.data.access_token,
      );
      setIsLoading(false);

      if (result.data) {
        setProductDetails(result.data);

        setUploadImage(result?.data?.images);
        setTitle(result?.data?.title);
        setCategory(result?.data?.categories[0]?.categoryId);
        setSubCategory(result?.data?.categories[0]?.id);
        setPrice(`${result?.data?.baseCost}`);
        setCurrency(result?.data?.currency);
        setRefundable(result?.data?.refundable ? 'yes' : 'no');
        setQuantity(`${result?.data?.quantity}`);
        const tags = result?.data?.tags?.map(({name}) => name);
        setTagList([...tags]);
        setBio(result?.data?.description);
      }
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
    }
  };

  // DELETE PRODUCT //
  const deleteProduct = async () => {
    try {
      setIsLoading(true);
      const result = await ApiSauce.delete(
        PRODUCT(productId),
        userDetailsResponse.data.access_token,
      );
      setIsLoading(false);
      if (result?.success) {
        props.navigation.navigate('MyProducts');
      }
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
      console.log(error);
    }
  };

  let errors = {
    titleError: 'Title is required.',
    priceError: 'Price is required and should be a number.',
    quantityError: 'Quantity is required and should be a number.',
  };

  const handleDeleteImage = (item, index) => {
    let newUploadImge = [...uploadImage];
    let splicedImage = newUploadImge.splice(index, 1);
    setDisconnectedImages([...disconnectedImages, ...splicedImage]);
    setUploadImage([...newUploadImge]);
  };

  const handleValidation = async () => {
    if (!uploadImage?.length) {
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
    } else if (!currency) {
      setCurrencyError('Currency is required.');
      setTimeout(() => {
        setCurrencyError('');
      }, 3000);
    } else if (!refundable) {
      setRefundableError('Refundable is required.');
      setTimeout(() => {
        setRefundableError('');
      }, 3000);
    } else if (!quantity) {
      setQuantityError('Quantity is required.');
      setTimeout(() => {
        setQuantityError('');
      }, 3000);
    } else if (!tagList?.length) {
      setTagError('At least one tag is required');
      setTimeout(() => {
        setTagError('');
      }, 3000);
    } else if (!bio) {
      setBioError('Description is required.');
      setTimeout(() => {
        setBioError('');
      }, 3000);
    } else if (
      uploadImage?.length &&
      title &&
      category &&
      subCategory &&
      price &&
      currency &&
      refundable &&
      quantity &&
      tagList?.length &&
      bio &&
      !imageError &&
      !titleError &&
      !categoryError &&
      !subCategoryError &&
      !priceError &&
      !currencyError &&
      !refundableError &&
      !quantityError &&
      !tagError &&
      !bioError
    ) {
      handleCreateProduct();
    }
  };

  // HANDLE CREATE PRODUCT //
  const handleCreateProduct = async () => {
    setIsLoading(true);
    let formDataPayload = new FormData();

    // Backend needs to seprate list for removing images
    const _disconnectedImages = disconnectedImages.filter(val => {
      if (val.cloudinaryId) {
        delete val.createdAt;
        delete val.path;
        delete val.type;
        delete val.updatedAt;
        return true;
      }
    });
    formDataPayload.append(
      'disconnectedImages',
      JSON.stringify(_disconnectedImages),
    );
    uploadImage.map(image => {
      if (!image.cloudinaryId) {
        formDataPayload.append('images', {
          uri: image.path,
          name: image.path.split('/').pop(),
          type: image.mime,
        });
      }
    });

    // Backend needs to seprate list for removing categories
    if (productDetails.categories[0].id !== subCategory) {
      formDataPayload.append('categories', JSON.stringify([{id: subCategory}]));
      formDataPayload.append(
        'disconnectedCategories',
        JSON.stringify([{id: productDetails.categories[0].id}]),
      );
    }

    // Backend needs to seprate list for removing tags
    const _disconnectedTags = productDetails.tags.filter(({name}) =>
      disconnectedTags.includes(name),
    );
    const newDisconnectedTags = _disconnectedTags.map(({name}) => name);
    formDataPayload.append(
      'disconnectedTags',
      JSON.stringify(newDisconnectedTags),
    );
    const previousTagList = productDetails.tags.map(({name}) => name);
    const newTagList = tagList.filter(name => !previousTagList.includes(name));
    formDataPayload.append('tags', JSON.stringify(newTagList));

    // Other fields
    formDataPayload.append('title', title);
    formDataPayload.append('baseCost', price);
    formDataPayload.append('currency', currency);
    formDataPayload.append('refundable', refundable === 'yes');
    formDataPayload.append('quantity', quantity);
    formDataPayload.append('description', bio);

    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    try {
      const result = await ApiSauce.put(
        PRODUCT(productId),
        formDataPayload,
        userDetailsResponse.data.access_token,
        headers,
      );
      util.showCommonMessage({
        title: 'Message',
        message: result.msg,
        onPress: () => props.navigation.goBack(),
      });
      setIsLoading(false);
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
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

  const onChangeCategory = (value, index) => {
    setCategory(value);
    if (index) {
      const formatedSubCategories = categories[index - 1]?.subCategory?.map(
        element => {
          return {
            label: element.name,
            value: element.id,
          };
        },
      );
      setSubCategories(formatedSubCategories);
    } else {
      setSubCategory('');
      setSubCategories([]);
    }
  };

  const onChangeTag = text => setTagText(text);

  const handleAddTag = () => {
    if (tagText) {
      tagList.push(tagText.trim());
      setTagList([...tagList]);
      setTagText('');
    }
  };

  const handleRemoveTag = index => {
    let splicedTag = tagList.splice(index, 1);
    setDisconnectedTags([...disconnectedTags, ...splicedTag]);
    setTagList([...tagList]);
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
      console.log(err);
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
              fullNameRegex,
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
                ...styles.pickerSelectInputAndroid,
              },
              placeholder: {
                ...styles.pickerSelectPlaceholder,
              },
            }}
            placeholder={{label: 'Category', value: null}}
            useNativeAndroidPickerStyle={false}
            disabled={false}
            value={category}
            onValueChange={onChangeCategory}
            items={[...categories]}
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
                ...styles.pickerSelectInputAndroid,
              },
              placeholder: {
                ...styles.pickerSelectPlaceholder,
              },
            }}
            placeholder={{label: 'Sub Category', value: null}}
            useNativeAndroidPickerStyle={false}
            disabled={false}
            value={subCategory}
            onValueChange={value => setSubCategory(value)}
            items={[...subCategories]}
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
          onSubmitRef={createRef.quantityInputRef}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={priceError}
          keyboardType={'number-pad'}
        />

        <View style={{...styles.pickerContainer}}>
          {currency ? (
            <Text style={{...styles.labelTopText}}>Refundable</Text>
          ) : null}
          <RNPickerSelect
            style={{
              inputAndroid: {
                ...styles.pickerSelectInputAndroid,
              },
              placeholder: {
                ...styles.pickerSelectPlaceholder,
              },
            }}
            placeholder={{label: 'Currency', value: null}}
            useNativeAndroidPickerStyle={false}
            disabled={false}
            value={currency}
            onValueChange={value => setCurrency(value)}
            items={[{label: 'Dollar', value: 'dollar'}]}
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
          {currencyError ? (
            <Text style={styles.errormsg}> {currencyError}</Text>
          ) : null}
        </View>

        <View style={{...styles.pickerContainer}}>
          {refundable ? (
            <Text style={{...styles.labelTopText}}>Refundable</Text>
          ) : null}
          <RNPickerSelect
            style={{
              inputAndroid: {
                ...styles.pickerSelectInputAndroid,
              },
              placeholder: {
                ...styles.pickerSelectPlaceholder,
              },
            }}
            placeholder={{label: 'Refundable', value: null}}
            useNativeAndroidPickerStyle={false}
            disabled={false}
            value={refundable}
            onValueChange={value => setRefundable(value)}
            items={[
              {label: 'Yes', value: 'yes'},
              {label: 'No', value: 'no'},
            ]}
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
          {refundableError ? (
            <Text style={styles.errormsg}> {refundableError}</Text>
          ) : null}
        </View>

        <CustomTextInput
          returnKeyType="next"
          enablesReturnKeyAutomaticallly={true}
          placeholder="Quantity"
          editable={true}
          refrence={createRef.quantityInputRef}
          value={quantity}
          floatingLabel
          onChangeText={value =>
            onChangeInput(
              value,
              setQuantity,
              setQuantityError,
              numberRegex,
              errors.quantityError,
            )
          }
          onSubmitRef={createRef.descriptionInputRef}
          onSubmit={onSubmitRef => {
            onSubmit(onSubmitRef);
          }}
          emailError={quantityError}
          keyboardType={'number-pad'}
        />

        <CustomTagInput
          value={tagText}
          list={tagList}
          removeTag={handleRemoveTag}
          addTag={handleAddTag}
          onChangeText={onChangeTag}
          onSubmitEditing={handleAddTag}
          errorText={tagError}
          placeholder={'Add tag here...'}
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
            ref={createRef.descriptionInputRef}
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

  return (
    <Layout {...props}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />
      <Header
        {...props}
        leftIcon={Images.back_arrow_nav}
        rightIcon={Images.delete_product_info}
        isLeftIconImg={true}
        isRightIconImg={true}
        headerText={'Edit Product'}
        leftBtnPress={() => props.navigation.goBack()}
        rightBtnPress={() => deleteProduct()}
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
                <Image
                  style={{...styles.upload}}
                  resizeMode={'contain'}
                  source={Images.camera}
                />
                <Text style={{...styles.BuyBtnText}}>Take Image</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{...styles.uploadBtn}}>
                <Image
                  style={{...styles.upload}}
                  resizeMode={'contain'}
                  source={Images.upload}
                />
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
          label={'Save'}
          containerStyle={{...styles.gradientButtonContainer}}
          onPress={() => handleValidation()}
        />
      </ScrollView>
      <OverlayLoader isLoading={isLoading} />
    </Layout>
  );
};

export default EditProducts;
