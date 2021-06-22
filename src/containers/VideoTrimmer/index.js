import React, {useRef, useState, useEffect} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {VideoPlayer} from 'react-native-video-processing';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import styles from './styles';

import {Metrics, Images} from '../../theme';
import util from '../../util';

const VideoTrimmer = props => {
  const videoPlayerRef = useRef(null);

  const [startTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [trimmerTimeline, setTrimmerTimeline] = useState([0, 0]);
  const [videoURL, setVideoURL] = useState(
    'file:///data/user/0/com.shwopp/cache/143068',
  );

  useEffect(() => {
    getVideoInfo();
  }, []);

  const onValuesChange = e => setTrimmerTimeline([...e]);

  const getVideoInfo = () => {
    videoPlayerRef.current
      .getVideoInfo()
      .then(info => {
        setEndTime(info.duration);
        setTrimmerTimeline([0, info.duration]);
      })
      .catch(console.log);
  };

  const trimVideo = () => {
    const options = {
      startTime: trimmerTimeline[0],
      endTime: trimmerTimeline[1],
      quality: VideoPlayer?.Constants?.quality?.QUALITY_1280x720,
      saveToCameraRoll: true,
      saveWithCurrentDate: true,
    };
    videoPlayerRef.current
      .trim(options)
      .then(newSource => {
        setVideoURL(`file://${newSource}`);
      })
      .catch(console.log);
  };

  const onPressBack = () => {
    util.showYesNoMessage({
      title: 'Warning',
      message: 'Your changes will be discarded.',
      onPressConfirm: props.navigation.goBack,
      onPressCancel: null,
    });
  };

  const renderCustomMarker = () => {
    return <View style={{...styles.markerContainer}} />;
  };

  return (
    <View style={{...styles.container}}>
      <View style={{...styles.headerContainer}}>
        <TouchableOpacity onPress={onPressBack}>
          <Image source={Images.back_arrow_nav} style={{...styles.backImage}} />
        </TouchableOpacity>

        <TouchableOpacity onPress={trimVideo} style={{...styles.saveButton}}>
          <Text style={{...styles.saveButtonText}}>Save</Text>
        </TouchableOpacity>
      </View>

      <VideoPlayer
        ref={videoPlayerRef}
        startTime={trimmerTimeline[0]}
        endTime={trimmerTimeline[1]}
        play={true}
        replay={true}
        rotate={false}
        source={videoURL}
        playerWidth={Metrics.screenWidth}
        playerHeight={Metrics.screenHeight}
        style={{...styles.videoPlayerContainer}}
        resizeMode={VideoPlayer.Constants.resizeMode.COVER}
      />

      <View style={{...styles.trimmerContainer}}>
        {endTime ? (
          <MultiSlider
            selectedStyle={{...styles.selectedStyle}}
            trackStyle={{...styles.trackStyle}}
            values={trimmerTimeline}
            sliderLength={Metrics.screenWidth * 0.94}
            onValuesChange={onValuesChange}
            min={startTime}
            max={endTime}
            allowOverlap={false}
            markerOffsetY={Metrics.ratio(25)}
            customMarker={currentValue => renderCustomMarker(currentValue)}
          />
        ) : null}
      </View>
    </View>
  );
};

export default VideoTrimmer;
