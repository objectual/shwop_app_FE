// Load the module
import React from 'react';
import Video from 'react-native-video';
import {Images} from '../../theme';
import styles from './styles';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

const VideoPlayer = () => {
  return (
    <Video
      source={{
        uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
      }} // Can be a URL or a local file.
      ref={ref => {}} // Store reference
      fullscreen={true}
      onBuffer={() => {}} // Callback when remote video is buffering
      onError={() => {}} // Callback when video cannot be loaded
      style={styles.backgroundVideo}
      resizeMode="cover"
      controls={true}
    />
  );
};

export default VideoPlayer;
