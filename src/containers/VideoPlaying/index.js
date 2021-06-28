import React, {useRef, useState, useEffect} from 'react';
import {StatusBar, View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

import {Images, Metrics} from '../../theme';
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
  const [isOpen] = useKeyboardStatus();

  const commentModalizeRef = useRef(null);
  const socialShareModalizeRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isHideOptions, setIsHideOptions] = useState(false);
  const [modalTopOffset, setModalTopOffset] = useState(
    Metrics.screenHeight * 0.45,
  );

  useEffect(() => {
    if (isOpen) {
      setModalTopOffset(Metrics.screenHeight * 0.1);
    } else {
      setModalTopOffset(Metrics.screenHeight * 0.45);
    }
  }, [isOpen]);

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
            onPress: () => {},
          })}
          {renderSocialButton({
            isImage: true,
            image: Images.google,
            label: 'Google Plus',
            onPress: () => {},
          })}
          {renderSocialButton({
            isImage: true,
            image: Images.instagram,
            label: 'Instagram',
            onPress: () => {},
          })}
          {renderSocialButton({
            isImage: true,
            image: Images.twitter,
            label: 'Twitter',
            onPress: () => {},
          })}
          {renderSocialButton({
            isImage: true,
            image: Images.whatsapp,
            label: 'Whatsapp',
            onPress: () => {},
          })}
          {renderSocialButton({
            isImage: false,
            image: Images.download_share_modal,
            label: 'Save',
            onPress: () => {},
          })}
          {renderSocialButton({
            isImage: false,
            image: Images.copy_share_modal,
            label: 'Copy Link',
            onPress: () => {},
          })}
          {renderSocialButton({
            isImage: false,
            image: Images.report_share_modal,
            label: 'Report',
            onPress: () => {},
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
    <Layout
      {...props}
      isLogedIn={true}
      isModalizeOpen={value => setIsHideOptions(value)}>
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

      {!isLoading && !isOpen && !isHideOptions && (
        <SocialOptions
          userImage={Images.user}
          onPressFollow={() => {}}
          onPressLike={() => {}}
          totalLikes={'24.5k'}
          onPressComment={openCommentModalize}
          totalComments={'24.5k'}
          onPressShare={openSocialShareModalize}
          totalShares={'24.5k'}
        />
      )}

      {!isLoading && !isOpen && !isHideOptions && <VideoBuyCard />}

      <CustomVideoPlayer
        source={{uri: videoUrl}}
        onBuffering={isBuffering => setIsLoading(isBuffering)}
      />

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
        onOpened={() => setIsHideOptions(true)}
        onClosed={() => setIsHideOptions(false)}
      />

      <CustomModalize
        modalizeType={'children'}
        modalizeRef={socialShareModalizeRef}
        modalTopOffset={modalTopOffset}
        headerComponent={renderHeaderComponent()}
        onOpened={() => setIsHideOptions(true)}
        onClosed={() => setIsHideOptions(false)}>
        {renderSocialShareContent()}
      </CustomModalize>

      <OverlayLoader isLoading={isLoading} />
    </Layout>
  );
};

VideoPlaying.defaultProps = {};

VideoPlaying.propTypes = {};

export default VideoPlaying;
