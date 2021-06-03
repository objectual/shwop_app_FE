import React from 'react';
import {StatusBar} from 'react-native';

import styles from './styles';

import {
  Layout,
  Header,
  SocialOptions,
  VideoBuyCard,
  CustomVideoPlayer,
} from '../../components';
import {Images} from '../../theme';

const Home = props => {
  return (
    <Layout {...props}>
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

      <SocialOptions />
      <VideoBuyCard />
      <CustomVideoPlayer {...props} />
    </Layout>
  );
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
