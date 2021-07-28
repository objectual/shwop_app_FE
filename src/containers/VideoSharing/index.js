import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import Video from 'react-native-video';
import Share from 'react-native-share';
import RNFetchBlob from 'react-native-fetch-blob';
// import { createThumbnail } from "react-native-create-thumbnail";

import styles from './styles';

import {Colors, Images} from '../../theme';
import {Header, OverlayLoader, CardButton} from '../../components';
import util from '../../util';

const VideoSharing = props => {
  const {videoUrl, shareType} = props.route.params;
  const [isLoading, setIsLoading] = useState(false);

  const handleOnLoad = event => {
    setIsLoading(false);
  };

  const handleOnLoadStart = () => {
    setIsLoading(true);
  };

  const handleOnBuffer = ({isBuffering}) => {
    setIsLoading(!isBuffering);
  };

  const handleShare = async ({packageName, shareOptions}) => {
    try {
      setIsLoading(true);
      const {isInstalled} = await Share.isPackageInstalled(packageName);

      if (isInstalled) {
        const shareResponse = await Share.shareSingle(shareOptions);
        setIsLoading(false);
      } else {
        util.showAlertWithDelay({
          title: 'Error',
          message: 'You do not have the application.',
        });
        setIsLoading(false);
      }
    } catch (error) {
      util.showAlertWithDelay({title: 'Error', message: error?.error});
      setIsLoading(false);
      console.log({error});
    }
  };

  const onPressInstaStory = async () => {
    try {
      setIsLoading(true);

      // const thumbnail = await createThumbnail({ url: videoUrl, timeStamp: 10000 });
      // console.log(thumbnail.path);

      let res = await RNFetchBlob.fetch('GET', videoUrl);
      let base64Str = res.base64();
      let {headers} = res.info();

      const shareOptions = {
        social: Share.Social.INSTAGRAM_STORIES,
        backgroundImage: `data:${headers['content-type']};base64,${base64Str}`,
        backgroundBottomColor: '#fefefe',
        backgroundTopColor: '#906df4',
      };

      handleShare({packageName: 'com.instagram.android', shareOptions});
    } catch (error) {
      util.showAlertWithDelay({title: 'Error', message: error?.message});
      setIsLoading(false);
      console.log({error});
    }
  };

  const onPressInstaFeed = async () => {
    try {
      setIsLoading(true);

      // const thumbnail = await createThumbnail({ url: videoUrl, timeStamp: 10000 });
      // console.log(thumbnail.path);

      let res = await RNFetchBlob.fetch('GET', videoUrl);
      let base64Str = res.base64();
      let {headers} = res.info();

      const shareOptions = {
        social: Share.Social.INSTAGRAM,
        title: 'Dummy Title',
        message: 'Dummy text message here...',
        url: `data:${headers['content-type']};base64,${base64Str}`,
      };

      handleShare({packageName: 'com.instagram.android', shareOptions});
    } catch (error) {
      util.showAlertWithDelay({title: 'Error', message: error?.message});
      setIsLoading(false);
      console.log({error});
    }
  };

  return (
    <View style={{...styles.container}}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />
      <Header
        isLeftIconImg={true}
        leftIcon={Images.back_arrow_nav}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={`Post to ${shareType}`}
        headerBgColor={Colors.White}
        isDropShadow={false}
      />

      <View style={{...styles.headerSeparator}} />

      <View style={{...styles.videoContainer}}>
        {videoUrl ? (
          <Video
            volume={0}
            paused={!isLoading}
            source={{uri: videoUrl}}
            style={{...styles.videoStyle}}
            resizeMode={'cover'}
            onLoad={handleOnLoad}
            onLoadStart={handleOnLoadStart}
            onBuffer={handleOnBuffer}
          />
        ) : null}
      </View>

      <View style={{...styles.buttonsRow}}>
        <CardButton
          source={Images.story_video_sharing}
          label={'Story'}
          onPress={onPressInstaStory}
          containerStyle={{backgroundColor: Colors.White}}
          cardLabelStyle={{color: Colors.Affair}}
        />
        <CardButton
          source={Images.feed_video_sharing}
          label={'Feed'}
          onPress={onPressInstaFeed}
          cardImageStyle={{...styles.cardImageStyle}}
          containerStyle={{backgroundColor: Colors.Affair}}
          cardLabelStyle={{color: Colors.White}}
        />
      </View>

      <OverlayLoader isLoading={isLoading} />
    </View>
  );
};

VideoSharing.defaultProps = {};

VideoSharing.propTypes = {};

export default VideoSharing;
