import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {Header, Layout} from '../../components';
import {Images, Colors} from '../../theme';

import styles from './styles';

const OthersProfile = props => {
  const data = [
    {
      bannerImg: Images.FollowCardImg,
      viewCount: '295k',
      likeCount: '295k',
    },
    {
      bannerImg: Images.FollowCardImg,
      viewCount: '295k',
      likeCount: '295k',
    },
    {
      bannerImg: Images.FollowCardImg,
      viewCount: '295k',
      likeCount: '295k',
    },
    {
      bannerImg: Images.FollowCardImg,
      viewCount: '295k',
      likeCount: '295k',
    },
    {
      bannerImg: Images.FollowCardImg,
      viewCount: '295k',
      likeCount: '295k',
    },
    {
      bannerImg: Images.FollowCardImg,
      viewCount: '295k',
      likeCount: '295k',
    },
  ];

  return (
    <Layout {...props}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />
      <Header
        {...props}
        headerBgColor={Colors.White}
        isDropShadow={false}
        leftIcon={Images.back_arrow_nav}
        rightIcon={Images.share_profile}
        isRightIconImg={true}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Emma Norman'}
        isRightSecIconImg={true}
        rightSecIcon={Images.details}
      />

      <View style={{...styles.headerSeparator}} />

      <ScrollView style={{...styles.contentScrollView}}>
        <View style={{...styles.ProfileImgContainer}}>
          <Image
            source={Images.commentUser}
            resizeMode={'contain'}
            style={{...styles.uploadBtnImage}}
          />
        </View>
        <View style={{...styles.profileCodeArea}}>
          <Text style={{...styles.profileCodeTxt}}>@654897</Text>
        </View>
        <View style={{...styles.followArea}}>
          <View style={{...styles.followWhiteArea}}>
            <Text style={{...styles.followNumber}}>29</Text>
            <Text style={{...styles.followTxt}}>Following</Text>
          </View>
          <View style={{...styles.followWhiteArea}}>
            <Text style={{...styles.followNumber}}>213.9K</Text>
            <Text style={{...styles.followTxt}}>Fans</Text>
          </View>
          <View style={{...styles.followWhiteArea}}>
            <Text style={{...styles.followNumber}}>213.9K</Text>
            <Text style={{...styles.followTxt}}>Hearts</Text>
          </View>
        </View>
        <View style={{...styles.centerView}}>
          <View style={{...styles.uploadContainer}}>
            <TouchableOpacity style={{...styles.purpleBtn}}>
              <Image
                resizeMode="contain"
                style={styles.infoImg}
                source={Images.info}
              />
              <Text style={{...styles.BtnText}}>Product Info</Text>
            </TouchableOpacity>
          </View>
          <View style={{...styles.uploadContainer}}>
            <TouchableOpacity style={{...styles.transparentBtn}}>
              <Text style={{...styles.transparentBtnText}}>FOLLOW</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{...styles.videoMainContainer}}>
          {data.map(val => {
            const {bannerImg, viewCount, likeCount} = val;
            return (
              <View style={{...styles.bannerView}}>
                <TouchableOpacity>
                  <ImageBackground
                    resizeMode="stretch"
                    style={{...styles.followImg}}
                    source={bannerImg}>
                    <View style={{...styles.viewContainer}}>
                      <Image
                        style={{...styles.viewImg}}
                        source={Images.view}
                        resizeMode="contain"
                      />
                      <Text style={{...styles.viewTxt}}>{viewCount}</Text>
                    </View>
                    <View style={{...styles.likeContainer}}>
                      <Image
                        style={{...styles.viewImg}}
                        source={Images.heartFill}
                        resizeMode="contain"
                      />
                      <Text style={{...styles.viewTxt}}>{likeCount}</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </Layout>
  );
};

OthersProfile.defaultProps = {};

OthersProfile.propTypes = {};

export default OthersProfile;
