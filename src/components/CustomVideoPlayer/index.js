import React, {useState, useRef} from 'react';
import Video from 'react-native-video';
import {View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';

import styles from './styles';

import {Metrics, Colors} from '../../theme';

const progressBarWidth = Metrics.screenWidth * 0.8;

const videoUrl =
  'https://static.videezy.com/system/resources/previews/000/043/977/original/DSC_8447_V1-0010.mp4';

const CustomVideoPlayer = props => {
  const videoRef = useRef();

  const [showControls, setShowControls] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleOnLoad = event => {
    setShowControls(false);
    setDuration(event.duration);
  };

  const handleOnProgress = event => {
    setProgress(event.currentTime / duration);
  };

  const handleOnReadyForDisplay = () => {
    setShowControls(true);
  };

  const handleOnEnd = () => {
    videoRef.current.seek(0.1);
    setProgress(0);
    setPaused(true);
  };

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  const handleProgressPress = event => {
    const position = event.nativeEvent.locationX;
    const _progress = (position / progressBarWidth) * duration;
    videoRef.current.seek(_progress);
  };

  return (
    <View style={{...styles.container}}>
      <Video
        paused={paused}
        source={{uri: videoUrl}}
        style={{...styles.videoPlayer}}
        resizeMode={'cover'}
        onLoad={handleOnLoad}
        onProgress={handleOnProgress}
        onEnd={handleOnEnd}
        onReadyForDisplay={handleOnReadyForDisplay}
        ref={videoRef}
      />

      {showControls && (
        <View style={{...styles.controlsContainer}}>
          <TouchableOpacity onPress={handlePlayPause}>
            <MaterialCommunityIcons
              name={paused ? 'play' : 'pause'}
              color={Colors.White}
              size={Metrics.ratio(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProgressPress}>
            <Progress.Bar
              progress={progress}
              color={Colors.Charade}
              unfilledColor={Colors.White}
              borderWidth={0}
              width={progressBarWidth}
              height={Metrics.ratio(6)}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CustomVideoPlayer;
