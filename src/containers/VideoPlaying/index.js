import React, {useRef, useState, useEffect} from 'react';
import {
  StatusBar,
  AppState,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import Share from 'react-native-share';
import RNFetchBlob from 'react-native-fetch-blob';
import {useSelector} from 'react-redux';
// import CameraRoll from '@react-native-community/cameraroll';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';
import {useIsFocused} from '@react-navigation/native';
// import convertToProxyURL from 'react-native-video-cache';
// import { createThumbnail } from "react-native-create-thumbnail";

import styles from './styles';

import {Images, Metrics} from '../../theme';
import util from '../../util';
import {useKeyboardStatus} from '../../hooks';
import {
  Layout,
  Header,
  SocialOptions,
  VideoBuyCard,
  CustomVideoPlayer,
  CustomModalize,
  CommentInput,
  Comment,
  OverlayLoader,
  SuccessOrErrorModal,
} from '../../components';

const comments = [
  {
    id: 1,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    time: '9:45AM',
    img: Images.commentUser,
  },

  {
    id: 2,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    time: '9:45AM',
    img: Images.commentUser,
  },
  {
    id: 3,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
    time: '9:45AM',
    img: Images.commentUser,
  },
  {
    id: 4,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
    time: '9:45AM',
    img: Images.commentUser,
  },
];

const videoUrl =
  'https://static.videezy.com/system/resources/previews/000/043/977/original/DSC_8447_V1-0010.mp4';

const VideoPlaying = props => {
  const networkInfoResponse = useSelector(state => state.networkInfo);

  const isFocused = useIsFocused();
  const [isOpen] = useKeyboardStatus();

  const commentModalizeRef = useRef(null);
  const socialShareModalizeRef = useRef(null);
  const appState = useRef(AppState.currentState);

  const [isLoading, setIsLoading] = useState(true);
  const [showVideoPlayer, setShowVideoPlayer] = useState(true);
  const [message, setMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [isSuccessOrError, setIsSuccessOrError] = useState(false);
  const [successOrErrorDetail, setSuccessOrErrorDetail] = useState({
    modalType: '',
    headingText: '',
    messageText: '',
    onPressConfirm: null,
  });
  const [modalTopOffset, setModalTopOffset] = useState(
    Metrics.screenHeight * 0.45,
  );

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setModalTopOffset(Metrics.screenHeight * 0.1);
    } else {
      setModalTopOffset(Metrics.screenHeight * 0.45);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isFocused) {
      setShowVideoPlayer(true);
      setShowOptions(false);
    } else {
      setShowVideoPlayer(false);
      setShowOptions(false);
    }
  }, [isFocused]);

  const handleAppStateChange = nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      setShowVideoPlayer(true);
    }
    appState.current = nextAppState;
  };

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const openCommentModalize = () => {
    commentModalizeRef.current?.open();
  };

  const openSocialShareModalize = () => {
    socialShareModalizeRef.current?.open();
  };

  const closeSocialShareModalize = () => {
    socialShareModalizeRef.current?.close();
  };

  const handleComment = () => {};

  const handleShare = async ({packageName, shareOptions}) => {
    try {
      setIsLoading(true);
      const {isInstalled} = await Share.isPackageInstalled(packageName);
      if (isInstalled) {
        setShowVideoPlayer(false);
        await Share.shareSingle(shareOptions);
        setIsLoading(false);
        closeSocialShareModalize();
      } else {
        util.showAlertWithDelay({
          title: 'Error',
          message: 'You do not have the application.',
        });
        setIsLoading(false);
        closeSocialShareModalize();
      }
    } catch (error) {
      util.showAlertWithDelay({title: 'Error', message: error?.error});
      console.log({error});
      setIsLoading(false);
      closeSocialShareModalize();
    }
  };

  const handleFacebookShare = async () => {
    try {
      setIsLoading(true);

      // const thumbnail = await createThumbnail({ url: videoUrl, timeStamp: 10000 });
      // console.log(thumbnail.path);

      let res = await RNFetchBlob.fetch('GET', videoUrl);
      let base64Str = res.base64();
      let {headers} = res.info();

      const shareOptions = {
        social: Share.Social.FACEBOOK,
        title: 'Dummy Title',
        message: 'Dummy text message here...',
        url: `data:${headers['content-type']};base64,${base64Str}`,
      };

      handleShare({packageName: 'com.facebook.katana', shareOptions});
    } catch (error) {
      util.showAlertWithDelay({title: 'Error', message: error?.message});
      setIsLoading(false);
      console.log({error});
    }
  };

  const handleTwitterShare = async () => {
    try {
      setIsLoading(true);

      // const thumbnail = await createThumbnail({ url: videoUrl, timeStamp: 10000 });
      // console.log(thumbnail.path);

      let res = await RNFetchBlob.fetch('GET', videoUrl);
      let base64Str = res.base64();
      let {headers} = res.info();

      const shareOptions = {
        social: Share.Social.TWITTER,
        title: 'Dummy Title',
        message: 'Dummy text message here...',
        url: `data:${headers['content-type']};base64,${base64Str}`,
      };

      handleShare({packageName: 'com.twitter.android', shareOptions});
    } catch (error) {
      util.showAlertWithDelay({title: 'Error', message: error?.message});
      setIsLoading(false);
      console.log({error});
    }
  };

  const handleWhatsAppShare = async () => {
    try {
      setIsLoading(true);

      // const thumbnail = await createThumbnail({ url: videoUrl, timeStamp: 10000 });
      // console.log(thumbnail.path);

      let res = await RNFetchBlob.fetch('GET', videoUrl);
      let base64Str = res.base64();
      let {headers} = res.info();

      const shareOptions = {
        social: Share.Social.WHATSAPP,
        title: 'Dummy Title',
        message: 'Dummy text message here...',
        url: `data:${headers['content-type']};base64,${base64Str}`,
      };

      handleShare({packageName: 'com.whatsapp', shareOptions});
    } catch (error) {
      util.showAlertWithDelay({title: 'Error', message: error?.message});
      setIsLoading(false);
      console.log({error});
    }
  };

  const handleSave = () => {
    const {isConnected} = networkInfoResponse.data;

    let newVideoUri = videoUrl.lastIndexOf('/');
    let videoName = videoUrl.substring(newVideoUri);

    let dirs = RNFetchBlob.fs.dirs;
    let path =
      Platform.OS === 'ios'
        ? dirs.MainBundleDir + videoName
        : dirs.PictureDir + videoName;

    if (isConnected) {
      setIsLoading(true);
      if (Platform.OS === 'android') {
        RNFetchBlob.config({
          fileCache: true,
          appendExt: 'mp4',
          indicator: true,
          IOSBackgroundTask: true,
          path: path,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: path,
            description: 'Downloading Video',
          },
        })
          .fetch('GET', videoUrl)
          .then(res => {
            setIsLoading(false);
            closeSocialShareModalize();
          })
          .catch(error => {
            setIsLoading(false);
            closeSocialShareModalize();
            console.log(error);
          });
      } else {
        // CameraRoll.saveToCameraRoll(imageUrl);
        closeSocialShareModalize();
      }
    } else {
      util.showAlertWithDelay({
        title: 'No internet connection',
        message: 'Please check your internet connection and try again.',
      });
    }
  };

  const handleCopyLink = () => {
    Clipboard.setString(videoUrl);
    Toast.showWithGravity('Link copied', Toast.LONG, Toast.CENTER);
  };

  const handleReport = () => {
    setIsLoading(true);
    closeSocialShareModalize();
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccessOrError(true);
      const modalDetails = {
        modalType: 'success',
        headingText: 'Thanks for letting us know',
        messageText:
          'Your feedback is important in helping us keep the Showpp community safe.',
        onPressConfirm: () => setIsSuccessOrError(false),
      };
      setSuccessOrErrorDetail({...modalDetails});
    }, 3000);
  };

  const renderCommentBox = () => {
    return (
      <CommentInput
        placeholder={'Type Message Here...'}
        value={message}
        onChangeText={text => setMessage(text)}
        onPress={handleComment}
      />
    );
  };

  const renderCommentMsg = ({item}) => {
    const {comment, time, img} = item;
    return <Comment description={comment} time={time} img={img} />;
  };

  const renderHeaderComponent = () => {
    return (
      <View style={{...styles.headerComponentContainer}}>
        <Text style={{...styles.headerText}}>{'Share to'}</Text>
      </View>
    );
  };

  const renderSocialButton = ({isImage, image, label, onPress}) => {
    return (
      <React.Fragment>
        {isImage ? (
          <TouchableOpacity
            onPress={onPress}
            style={{...styles.socailIconContainer}}>
            <Image source={image} style={{...styles.socailIconImage}} />
            <Text style={{...styles.socailIconLabel}}>{label}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={onPress}
            style={{...styles.socailIconContainer}}>
            <View style={{...styles.socailCustomIconContainer}}>
              <Image source={image} style={{...styles.socailCustomIconImage}} />
            </View>
            <Text style={{...styles.socailIconLabel}}>{label}</Text>
          </TouchableOpacity>
        )}
      </React.Fragment>
    );
  };

  const renderSocialShareContent = () => {
    return (
      <React.Fragment>
        <View style={{...styles.socialModalContent}}>
          {renderSocialButton({
            isImage: true,
            image: Images.facebook,
            label: 'Facebook',
            onPress: handleFacebookShare,
          })}
          {renderSocialButton({
            isImage: true,
            image: Images.instagram,
            label: 'Instagram',
            onPress: () =>
              handleNavigation('VideoSharing', {
                videoUrl,
                shareType: 'instagram',
              }),
          })}
          {renderSocialButton({
            isImage: true,
            image: Images.twitter,
            label: 'Twitter',
            onPress: handleTwitterShare,
          })}
          {renderSocialButton({
            isImage: true,
            image: Images.whatsapp,
            label: 'Whatsapp',
            onPress: handleWhatsAppShare,
          })}
          {renderSocialButton({
            isImage: false,
            image: Images.download_share_modal,
            label: 'Save',
            onPress: handleSave,
          })}
          {renderSocialButton({
            isImage: false,
            image: Images.copy_share_modal,
            label: 'Copy Link',
            onPress: handleCopyLink,
          })}
          {renderSocialButton({
            isImage: false,
            image: Images.report_share_modal,
            label: 'Report',
            onPress: handleReport,
          })}
        </View>

        <TouchableOpacity
          onPress={closeSocialShareModalize}
          style={{...styles.socialCancelButton}}>
          <Text style={{...styles.socialCancelText}}>Cancel</Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  };

  return (
    <Layout {...props} isModalizeOpen={value => setShowOptions(!value)}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />

      <Header
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerTextStyle={styles.headerTextStyle}
      />

      {!isLoading && showOptions && (
        <SocialOptions
          userImage={Images.user}
          onPressUserImage={() => handleNavigation('OthersProfile')}
          onPressFollow={() => {}}
          onPressLike={() => {}}
          totalLikes={'24.5k'}
          onPressComment={openCommentModalize}
          totalComments={'24.5k'}
          onPressShare={openSocialShareModalize}
          totalShares={'24.5k'}
        />
      )}

      {!isLoading && showOptions && (
        <VideoBuyCard
          cardImage={Images.cardProduct}
          cardTitle={'The New Products'}
          cardPrice={'$15.00'}
          onPress={() => {}}
        />
      )}

      {showVideoPlayer && (
        <CustomVideoPlayer
          source={{
            // uri: convertToProxyURL(videoUrl),
            uri: videoUrl,
            cache: true,
            // cache: {size: 50, expiresIn: 3600},
            // size: 50,
            // expiresIn: 1800,
          }}
          onBuffering={isBuffering => {
            setIsLoading(isBuffering);
            setShowOptions(!isBuffering);
          }}
        />
      )}

      <CustomModalize
        data={comments}
        modalizeType="flatList"
        modalizeRef={commentModalizeRef}
        modalStyle={{...styles.modalStyle}}
        handleStyle={{...styles.handleStyle}}
        noCloseBtn={true}
        footerComponent={renderCommentBox}
        modalTopOffset={modalTopOffset}
        renderItem={renderCommentMsg}
        onOpened={() => setShowOptions(false)}
        onClosed={() => setShowOptions(true)}
      />

      <CustomModalize
        modalizeType={'children'}
        modalizeRef={socialShareModalizeRef}
        modalTopOffset={modalTopOffset}
        headerComponent={renderHeaderComponent()}
        onOpened={() => setShowOptions(false)}
        onClosed={() => setShowOptions(true)}>
        {renderSocialShareContent()}
      </CustomModalize>

      <OverlayLoader isLoading={isLoading} />

      <SuccessOrErrorModal
        visible={isSuccessOrError}
        modalType={successOrErrorDetail.modalType}
        headingText={successOrErrorDetail.headingText}
        messageText={successOrErrorDetail.messageText}
        onPressConfirm={successOrErrorDetail.onPressConfirm}
      />
    </Layout>
  );
};

VideoPlaying.defaultProps = {};

VideoPlaying.propTypes = {};

export default VideoPlaying;
