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
  CustomVideoPlayer,
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
          leftBtnPress={() => props.navigation.goBack()}
          rightBtnPress={() => props.navigation.goBack()}
          headerTextStyle={styles.headerTextStyle}
        />

        <SocialOptions />
        <VideoBuyCard />
        {/* <FloatVideo /> */}
        <CustomVideoPlayer />
      </Layout>
    </>
  );
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
