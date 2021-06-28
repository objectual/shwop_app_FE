import React, {useRef, useState, useEffect} from 'react';
import {StatusBar} from 'react-native';

import {Images, Metrics} from '../../theme';
import {useKeyboardStatus} from '../../hooks';

import styles from './styles';

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

const AfterSplash = props => {
  const [isOpen] = useKeyboardStatus();

  const modalizeRef = useRef(null);

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

  const openModalize = () => {
    modalizeRef.current?.open();
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

  return (
    <Layout
      {...props}
      isLogedIn={false}
      isModalizeOpen={value => setIsHideOptions(value)}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />

      <Header
        {...props}
        leftIcon={Images.menu}
        isLeftIconImg={true}
        leftIconImageStyle={{...styles.leftIconImageStyle}}
        leftBtnPress={() => props.navigation.openDrawer()}
        isRightIconImg={true}
        rightIcon={Images.filter}
        rightBtnPress={() => props.navigation.goBack()}
        headerTextStyle={styles.headerTextStyle}
        rightIconImageStyle={{...styles.leftIconImageStyle}}
      />

      {!isLoading && !isOpen && !isHideOptions && (
        <SocialOptions
          userImage={Images.user}
          onPressFollow={() => {}}
          onPressLike={() => {}}
          totalLikes={'24.5k'}
          onPressComment={openModalize}
          totalComments={'24.5k'}
          onPressShare={() => {}}
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
        modalizeRef={modalizeRef}
        modalStyle={{...styles.modalStyle}}
        handleStyle={{...styles.handleStyle}}
        noCloseBtn={true}
        footerComponent={renderCommentBox}
        modalTopOffset={modalTopOffset}
        renderItem={renderCommentMsg}
        onOpened={() => setIsHideOptions(true)}
        onClosed={() => setIsHideOptions(false)}
      />

      <OverlayLoader isLoading={isLoading} />
    </Layout>
  );
};

AfterSplash.defaultProps = {};

AfterSplash.propTypes = {};

export default AfterSplash;
