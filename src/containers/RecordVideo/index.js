import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import * as Progress from 'react-native-progress';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';

import styles from './styles';

import {
  RecordingButton,
  CustomModalize,
  CameraCountdown,
} from '../../components';
import {Images, Colors, Metrics, Fonts} from '../../theme';
import util from '../../util';

const progressBarWidth = Metrics.screenWidth * 0.8;
let _progress = 0;

const RecordVideo = props => {
  const cameraRef = useRef(null);
  const modalizeRef = useRef(null);

  const [videoTimings] = useState([15, 60, 90]);
  const [timer] = useState([5, 10, 15]);
  const [selectedTimer, setSelectedTimer] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [timeline, setTimeline] = useState(15);
  const [cameraType, setCameraType] = useState('back');
  const [flashMode, setFlashMode] = useState('off');
  const [progress, setProgress] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideoUri, setRecordedVideoUri] = useState(false);

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const handleCameraType = () =>
    setCameraType(cameraType === 'back' ? 'front' : 'back');

  const startRecording = () => {
    if (cameraRef) {
      setShowTimer(selectedTimer ? true : false);
      setTimeout(async () => {
        setIsRecording(true);
        setShowTimer(false);

        const interval = setInterval(() => {
          _progress += 1;
          setProgress(_progress);
        }, 1000);

        const {uri} = await cameraRef.current.recordAsync({
          maxDuration: timeline,
        });

        clearInterval(interval);
        _progress = 0;

        setIsRecording(false);
        setRecordedVideoUri(uri);
      }, selectedTimer * 1000);
    }
  };

  const handleTimeline = item => {
    setTimeline(item);
    setProgress(0);
    _progress = 0;
  };

  const closeModalize = () => {
    modalizeRef.current?.close();
  };

  const openModalize = () => {
    modalizeRef.current?.open();
  };

  const handleCloseBtn = () => {
    setSelectedTimer(0);
    closeModalize();
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
        console.log(error, 'error');
      }
    }
  };

  const onPressBack = () => {
    if (recordedVideoUri) {
      util.showYesNoMessage({
        title: 'Warning',
        message: 'Your video will be discarded.',
        onPressConfirm: props.navigation.goBack,
        onPressCancel: null,
      });
    } else {
      props.navigation.goBack();
    }
  };

  const renderHeaderComponent = () => {
    return (
      <View style={{...styles.headerComponentContainer}}>
        <Text style={{...styles.headerText}}>{'Set Timer'}</Text>
        <TouchableOpacity onPress={handleCloseBtn} style={{...styles.closeBtn}}>
          <MaterialCommunityIcons
            name="close"
            size={Metrics.ratio(10)}
            color={Colors.Charade}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{...styles.container}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />

      <View style={{...styles.headerContainer}}>
        <View style={{...styles.headerLeftContainer}}>
          <TouchableOpacity onPress={onPressBack}>
            <Image
              source={Images.back_arrow_nav}
              style={{...styles.backBtnImage}}
            />
          </TouchableOpacity>
        </View>

        <View style={{...styles.headerRightContainer}}>
          {recordedVideoUri && (
            <TouchableOpacity
              style={{...styles.saveBtn}}
              onPress={() =>
                handleNavigation('CompleteVideo', {recordedVideoUri})
              }>
              <Text style={{...styles.saveBtnText}}>Save</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={{...styles.actionButtonsContainer}}>
        {!isRecording && !recordedVideoUri && (
          <React.Fragment>
            <TouchableOpacity
              style={{...styles.actionButton}}
              onPress={openModalize}>
              <Image
                source={Images.timer_recorder}
                resizeMode={'contain'}
                style={{...styles.actionButtonImage}}
              />
              <Text style={{...styles.actionButtonText}}>Timer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.actionButton}}
              onPress={() =>
                setFlashMode(flashMode === 'torch' ? 'off' : 'torch')
              }>
              <Image
                source={
                  flashMode === 'torch'
                    ? Images.flash_light_off_recorder
                    : Images.flash_light_on_recorder
                }
                resizeMode={'contain'}
                style={{...styles.actionButtonImage}}
              />
              <Text style={{...styles.actionButtonText}}>Timer</Text>
            </TouchableOpacity>
          </React.Fragment>
        )}
        {/* {recordedVideoUri && (
          <React.Fragment>
            <TouchableOpacity style={{...styles.actionButton}}>
              <Image
                source={Images.speed_recorder}
                resizeMode={'contain'}
                style={{...styles.actionButtonImage}}
              />
              <Text style={{...styles.actionButtonText}}>Speed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.actionButton}}>
              <Image
                source={Images.filters_recorder}
                resizeMode={'contain'}
                style={{...styles.actionButtonImage}}
              />
              <Text style={{...styles.actionButtonText}}>Filters</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.actionButton}}>
              <Image
                source={Images.beautify_recorder}
                resizeMode={'contain'}
                style={{...styles.actionButtonImage}}
              />
              <Text style={{...styles.actionButtonText}}>Beautify</Text>
            </TouchableOpacity>
          </React.Fragment>
        )} */}
      </View>

      <View style={{...styles.cameraContainer}}>
        <RNCamera
          ref={cameraRef}
          style={{...styles.camera}}
          type={cameraType}
          flashMode={flashMode}
          captureAudi={true}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
      </View>

      {!recordedVideoUri && (
        <View style={{...styles.recorderContainer}}>
          {!isRecording && (
            <TouchableOpacity onPress={handleCameraType}>
              <Image
                source={Images.swap_camera_recorder}
                resizeMode={'contain'}
                style={{...styles.swapCameraImage}}
              />
            </TouchableOpacity>
          )}

          <RecordingButton
            onPress={() => (isRecording ? null : startRecording())}
            isRecording={isRecording}
            label={isRecording ? '' : 'Tap to shoot'}
          />

          {!isRecording && (
            <TouchableOpacity onPress={openGallery}>
              <Image
                source={Images.image_gallery_recorder}
                resizeMode={'contain'}
                style={{...styles.flashImage}}
              />
            </TouchableOpacity>
          )}
        </View>
      )}

      <View style={{...styles.timelineContainer}}>
        <View style={{...styles.timelineTimerContainer}}>
          <Text style={{...styles.timelineTimerText}}>
            {moment.utc(progress * 1000).format('mm:ss')}
          </Text>
          <Text style={{...styles.timelineTimerText}}>
            {moment.utc(timeline * 1000).format('mm:ss')}
          </Text>
        </View>

        <Progress.Bar
          progress={progress / timeline}
          color={Colors.Charade}
          unfilledColor={Colors.White}
          borderWidth={0}
          width={progressBarWidth}
          height={Metrics.ratio(6)}
        />
      </View>

      {!recordedVideoUri && !isRecording && (
        <View style={{...styles.videoTimingsContainer}}>
          {videoTimings.map(item => (
            <TouchableOpacity
              key={item}
              onPress={() => handleTimeline(item)}
              style={{...styles.videoTimingItem}}>
              <Text
                style={{
                  ...styles.videoTimingText,
                  fontFamily:
                    item === timeline
                      ? Fonts.type.NunitoBold
                      : Fonts.type.NunitoLight,
                }}>{`${item}s`}</Text>
              {item === timeline && (
                <View style={{...styles.videoTimingActive}} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}

      <CustomModalize
        modalizeType={'children'}
        modalizeRef={modalizeRef}
        modalTopOffset={Metrics.screenHeight * 0.65}
        headerComponent={renderHeaderComponent()}>
        <View style={{...styles.timerContainer}}>
          <View style={{...styles.timerItemsRow}}>
            {timer.map(item => (
              <TouchableOpacity
                onPress={() => setSelectedTimer(item)}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  ...styles.timerItem,
                  borderWidth: item === selectedTimer ? Metrics.ratio(1) : 0,
                }}>
                <Text style={{...styles.timerItemText}}>{`${item}s`}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity onPress={closeModalize} style={{...styles.doneBtn}}>
            <Text style={{...styles.doneBtnText}}>Done</Text>
          </TouchableOpacity>
        </View>
      </CustomModalize>
      <CameraCountdown duration={selectedTimer} isPlaying={showTimer} />
    </View>
  );
};

RecordVideo.defaultProps = {};

RecordVideo.propTypes = {};

export default RecordVideo;
