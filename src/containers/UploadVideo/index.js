import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput,
  PermissionsAndroid,
  Platform,
  Keyboard,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';

import styles from './styles';

import {
  Layout,
  Header,
  GradientButton,
  CardButton,
  CustomPopup,
} from '../../components';
import {Images, Colors} from '../../theme';
import util from '../../util';

const UploadVideo = props => {
  const textInputRef = useRef();

  const [title, setTitle] = useState('');
  const [showYourTakePopup, setShowYourTakePopup] = useState(false);
  const [floatLabel, setFloatLabel] = useState(false);

  const onChangeTitle = text => title.length <= 120 && setTitle(text);

  const handleNavigation = (screenName, params) => {
    setShowYourTakePopup(false);
    props.navigation.navigate(screenName, {...params});
  };

  const openGallery = async () => {
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
        let options = {
          title: 'Video Picker',
          mediaType: 'video',
          storageOptions: {
            skipBackup: true,
            path: 'images',
            includeBase64: true,
          },
        };
        launchImageLibrary(options, response => {
          if (response.didCancel) {
          } else if (response.error) {
          } else if (response.customButton) {
            util.showAlertWithDelay({
              title: 'Message',
              message: response.customButton,
            });
          } else {
            URIConverter(response?.assets[0]?.uri);
          }
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Converter and make copy 'content:// to file://'
  const URIConverter = async uri => {
    if (uri.startsWith('content://')) {
      const uriComponents = uri.split('/');
      const fileNameAndExtension = uriComponents[uriComponents.length - 1];
      const destPath = `${RNFS.TemporaryDirectoryPath}/${fileNameAndExtension}`;
      try {
        await RNFS.copyFile(uri, destPath);
        handleNavigation('CompleteVideo', {
          recordedVideoUri: `file://${destPath}`,
        });
      } catch (error) {
        console.log(error);
      }
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
        {...props}
        headerBgColor={Colors.White}
        isDropShadow={false}
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Add Video'}
      />

      <View style={{...styles.headerSeparator}} />

      <ScrollView style={{...styles.contentScrollView}}>
        <View style={{...styles.uploadBtnContainer}}>
          <CardButton
            onPress={openGallery}
            source={Images.upload_video_icon}
            label={'Upload Video'}
            containerStyle={{backgroundColor: Colors.White}}
            cardLabelStyle={{color: Colors.Affair}}
          />
          <CardButton
            onPress={() => handleNavigation('RecordVideo')}
            source={Images.edit_video_complete_video}
            label={'Record Video'}
            containerStyle={{backgroundColor: Colors.Affair}}
            cardLabelStyle={{color: Colors.White}}
          />
        </View>

        <View style={{...styles.formContainer}}>
          <View style={{...styles.titleContainer}}>
            {floatLabel ? (
              <Text style={{...styles.labelTopText}}>Title</Text>
            ) : null}
            <TextInput
              ref={textInputRef}
              maxLength={120}
              value={title}
              onChangeText={onChangeTitle}
              style={{...styles.titleTextInput}}
              placeholder={'Title'}
              placeholderTextColor={Colors.Mercury}
              multiline={true}
              numberOfLines={10}
              onFocus={() => setFloatLabel(true)}
              onBlur={() => setFloatLabel(title !== '')}
              onPressOut={Keyboard.dismiss}
            />
            <Text
              style={{
                ...styles.titleCount,
              }}>{`Character ${title.length}/120`}</Text>
          </View>

          <View style={{...styles.tagsContainer}}>
            <Text style={{...styles.tagsTitle}}>Tags</Text>
            <TouchableOpacity
              style={{...styles.tagsBtn}}
              onPress={() => handleNavigation('TagProduct')}>
              <Image
                source={Images.tag_upload_video}
                resizeMode={'contain'}
                style={{...styles.tagsBtnImage}}
              />
              <Text style={{...styles.tagsBtnText}}>Add a Tag</Text>
            </TouchableOpacity>
          </View>

          <View style={{...styles.socialContainer}}>
            <TouchableOpacity style={{...styles.socialBtnContainer}}>
              <View style={{...styles.socialBtnImageContainer}}>
                <Image
                  source={Images.instagram_upload_video}
                  resizeMode={'contain'}
                  style={{...styles.socialBtnImage}}
                />
              </View>
              <Text style={{...styles.socialBtnText}}>Share to Instagram</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.socialBtnContainer}}>
              <View style={{...styles.socialBtnImageContainer}}>
                <Image
                  source={Images.facebook_upload_video}
                  resizeMode={'contain'}
                  style={{...styles.socialBtnImage}}
                />
              </View>
              <Text style={{...styles.socialBtnText}}>Share to Facebook</Text>
            </TouchableOpacity>
          </View>

          <GradientButton
            label={'Post'}
            containerStyle={{...styles.gradientButtonContainer}}
            onPress={() => setShowYourTakePopup(true)}
          />
        </View>
      </ScrollView>

      <CustomPopup
        visible={showYourTakePopup}
        source={Images.your_take_is_live_popup}
        heading={'Your Take is'}
        highlightedHeading={'LIVE!'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        btnLabel={'Okay'}
        onPress={() => handleNavigation('Main')}
      />
    </Layout>
  );
};

UploadVideo.defaultProps = {};

UploadVideo.propTypes = {};

export default UploadVideo;
