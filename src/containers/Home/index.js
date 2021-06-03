import React from 'react';
import Video from 'react-native-video';
import {Images} from '../../theme';
import styles from './styles';
import {
  Layout,
  Header,
  SocialOptions,
  VideoBuyCard,
  FloatVideo,
  VideoPlayer,
} from '../../components';

const Home = props => {
  return (
    <>
      <Layout {...props}>
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

        <SocialOptions />
        <VideoBuyCard />
        {/* <FloatVideo /> */}
        <VideoPlayer />
      </Layout>
    </>
  );
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
