// Load the module
import React, {useState} from 'react';
import Video from 'react-native-video';
import {TouchableOpacity, View} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {Metrics, Colors} from '../../theme';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

const CustomVideoPlayer = () => {
  const [isPause, setPauseStatus] = useState(true);
  return (
    <>
      <View style={styles.playbtnArea}>
        <TouchableOpacity onPress={() => setPauseStatus(false)}>
          <MaterialCommunityIcons
            name="pause"
            size={Metrics.ratio(16)}
            color={Colors.White}
          />
        </TouchableOpacity>
      </View>
      <VideoPlayer
        source={{
          uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
        }} // Can be a URL or a local file.
        style={styles.backgroundVideo}
        resizeMode="cover"
        disableVolume={true}
        disableBack={true}
        disableFullscreen={true}
        seekColor="#2F2E41"
        seekBarBackground="#fff"
        videoStyle={{}}
        // style = {{}}
      />
       {/* <Video
        source={{
          uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
        }} // Can be a URL or a local file.
        style={styles.backgroundVideo} 
        resizeMode="cover"
        controls={true}
        // style = {{}}
      /> */}
    </>
  );
};

export default CustomVideoPlayer;
