import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import Video from 'react-native-video';

import styles from './styles';

import {Colors, Images} from '../../theme';
import util from '../../util';
import {Header, OverlayLoader, CardButton} from '../../components';

const CompleteVideo = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [video, setVideo] = useState(false);

  useEffect(() => {
    const {recordedVideoUri} = props.route.params;
    setVideo(recordedVideoUri);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const handleOnLoad = event => {
    setIsLoading(false);
  };

  const handleOnLoadStart = () => {
    setIsLoading(true);
  };

  const handleOnBuffer = ({isBuffering}) => {
    setIsLoading(!isBuffering);
  };

  const onPressBack = () => {
    util.showYesNoMessage({
      title: 'Warning',
      message: 'Your video will be discarded.',
      onPressConfirm: () => handleNavigation('UploadVideo', {discarded: true}),
      onPressCancel: null,
    });
  };

  return (
    <View style={{...styles.container}}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />
      <Header
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={onPressBack}
        headerText={'Complete Video'}
        headerBgColor={Colors.White}
        isDropShadow={false}
      />

      <View style={{...styles.headerSeparator}} />

      <View style={{...styles.videoContainer}}>
        {video && (
          <Video
            volume={0}
            paused={!isLoading}
            source={{uri: video}}
            style={{...styles.videoStyle}}
            resizeMode={'cover'}
            onLoad={handleOnLoad}
            onLoadStart={handleOnLoadStart}
            onBuffer={handleOnBuffer}
          />
        )}
      </View>

      <View style={{...styles.buttonsRow}}>
        <CardButton
          source={Images.tag_products_complete_video}
          label={'Tag Products'}
          onPress={() => handleNavigation('TagProduct')}
          containerStyle={{backgroundColor: Colors.White}}
          cardLabelStyle={{color: Colors.Affair}}
        />
        <CardButton
          source={Images.edit_video_complete_video}
          label={'Edit Video'}
          containerStyle={{backgroundColor: Colors.Affair}}
          cardLabelStyle={{color: Colors.White}}
        />
      </View>

      <OverlayLoader isLoading={isLoading} />
    </View>
  );
};

CompleteVideo.defaultProps = {};

CompleteVideo.propTypes = {};

export default CompleteVideo;
