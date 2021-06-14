import React, {useRef, useState} from 'react';
import {StatusBar} from 'react-native';

import {Images, Metrics} from '../../theme';

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

const Home = props => {
  const modalizeRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');

  const openModalize = () => {
    modalizeRef.current?.open();
  };

  const handleComment = () => {
    // const payload = {
    //   data: Commentdata,
    //   token: loginResponse?.data?.data?.access_token,
    // };
    // dispatch(Add_Comment_Request(payload));
    // handleEmail('');
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

  return (
    <Layout {...props} isLogedIn={false}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />

      <Header
        {...props}
        leftIcon={Images.menu}
        isLeftIconImg={true}
        isRightIconImg={true}
        rightIcon={Images.filter}
        leftBtnPress={() => props.navigation.openDrawer()}
        rightBtnPress={() => props.navigation.goBack()}
        headerTextStyle={styles.headerTextStyle}
      />

      {!isLoading && <SocialOptions onPress={openModalize} />}

      {!isLoading && <VideoBuyCard />}

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
        modalTopOffset={Metrics.screenHeight * 0.45}
        renderItem={renderCommentMsg}
      />

      <OverlayLoader isLoading={isLoading} />
    </Layout>
  );
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
