import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import {RNCamera} from 'react-native-camera';
import * as Progress from 'react-native-progress';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import {RecordingButton, CustomModalize} from '../../components';

import {Images, Colors, Metrics, Fonts} from '../../theme';

const progressBarWidth = Metrics.screenWidth * 0.8;
let _progress = -1;

const RecordVideo = props => {
  const cameraRef = useRef(null);
  const modalizeRef = useRef(null);

  const [timeline, setTimeline] = useState(15);
  const [cameraType, setCameraType] = useState('back');
  const [flashMode, setFlashMode] = useState('off');
  const [progress, setProgress] = useState(0);
  const [videoTimings] = useState([15, 60, 90]);
  const [timer] = useState([5, 10, 15]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideoUri, setRecordedVideoUri] = useState(false);

  const handleCameraType = () =>
    setCameraType(cameraType === 'back' ? 'front' : 'back');

  const startRecording = async () => {
    if (cameraRef) {
      setIsRecording(true);

      const interval = setInterval(() => {
        _progress += 1;
        console.log(_progress, '_progress');
        setProgress(_progress);
      }, 1000);

      const {uri} = await cameraRef.current.recordAsync({
        maxDuration: timeline,
      });

      clearInterval(interval);
      _progress = -1;

      setIsRecording(false);
      setRecordedVideoUri(uri);
    }
  };

  const handleTimeline = item => {
    setTimeline(item);
    setProgress(0);
    _progress = -1;
  };

  const closeModalize = () => {
    modalizeRef.current?.close();
  };

  const openModalize = () => {
    modalizeRef.current?.open();
  };

  const renderHeaderComponent = () => {
    return (
      <View style={{...styles.headerComponentContainer}}>
        <Text style={{...styles.headerText}}>{'Set Timer'}</Text>
        <TouchableOpacity onPress={closeModalize} style={{...styles.closeBtn}}>
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
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={Images.back_arrow_nav}
              style={{...styles.backBtnImage}}
            />
          </TouchableOpacity>
        </View>

        <View style={{...styles.headerRightContainer}}>
          <TouchableOpacity style={{...styles.saveBtn}}>
            <Text style={{...styles.saveBtnText}}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{...styles.actionButtonsContainer}}>
        {!isRecording && !recordedVideoUri && (
          <TouchableOpacity style={{...styles.actionButton}} onPress={() => {}}>
            <Image
              source={Images.timer_recorder}
              resizeMode={'contain'}
              style={{...styles.actionButtonImage}}
            />
            <Text style={{...styles.actionButtonText}}>Timer</Text>
          </TouchableOpacity>
        )}
        {recordedVideoUri && (
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
        )}
      </View>

      <View style={{...styles.cameraContainer}}>
        <RNCamera
          ref={cameraRef}
          style={{...styles.camera}}
          type={cameraType}
          flashMode={flashMode}
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
            <TouchableOpacity
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
        modalTopOffset={Metrics.screenHeight * 0.6}
        headerComponent={renderHeaderComponent()}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
            flexDirection: 'column',
            width: Metrics.screenWidth,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: Metrics.ratio(24),
              // marginBottom: Metrics.ratio(16),
            }}>
            {timer.map(item => (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.Snuff,
                  width: Metrics.ratio(35),
                  height: Metrics.ratio(35),
                  borderRadius: Metrics.ratio(35),
                  marginHorizontal: Metrics.ratio(16),
                }}>
                <Text
                  style={{
                    fontSize: Metrics.ratio(20),
                    color: Colors.Affair,
                    fontFamily: Fonts.type.NunitoBold,
                  }}>{`${item}s`}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </CustomModalize>
    </View>
  );
};

RecordVideo.defaultProps = {};

RecordVideo.propTypes = {};

export default RecordVideo;
