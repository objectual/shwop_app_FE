import React, {useRef, useState} from 'react';
import {StatusBar, View, ScrollView} from 'react-native';

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
} from '../../components';

const Home = props => {
  const data = [
    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      time: '9:45AM',
      img: Images.commentUser,
    },

    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      time: '9:45AM',
      img: Images.commentUser,
    },
    {
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .',
      time: '9:45AM',
      img: Images.commentUser,
    },
  ];
  const [email, handleEmail] = useState('');
  const modalizeRef = useRef(null);

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
        value={email}
        onChangeText={text => handleEmail(text)}
        onPress={handleComment}
      />
    );
  };

  const renderComments = () => {
    return (
      <View style={styles.commentContainer}>
        <ScrollView style={styles.commentArea}>
          {data.map(val => {
            const {comment, time, img} = val;
            return <Comment description={comment} time={time} img={img} />;
          })}
        </ScrollView>
      </View>
    );
  };

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <Layout {...props}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <CustomModalize
        modalizeRef={modalizeRef}
        headerText=""
        noCloseBtn={true}
        footerComponent={renderCommentBox}
        modalTopOffset={Metrics.ratio(190)}>
        {renderComments()}
      </CustomModalize>
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
      <SocialOptions onPress={onOpen} />
      <VideoBuyCard />
      <CustomVideoPlayer {...props} />
    </Layout>
  );
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
