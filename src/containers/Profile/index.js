import React, {useState} from 'react';
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

const Profile = props => {
  const [active, setActive] = useState(0);
  const [activeForYou, setActiveForYou] = useState(null);

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

  const handleUploads = () => {
    setActive(0);
    setActiveForYou(0);
  };
  const handleLikes = () => {
    setActiveForYou(1);
    setActive(2);
  };
  return (
    <Layout {...props} isLogedIn={true}>
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
        rightIcon={Images.edit_btn}
        isRightIconImg={true}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Emma Norman'}
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
            <Text style={{...styles.followNumber}}>77</Text>
            <Text style={{...styles.followTxt}}>Following</Text>
          </View>
          <View style={{...styles.followWhiteArea}}>
            <Text style={{...styles.followNumber}}>77</Text>
            <Text style={{...styles.followTxt}}>Followers</Text>
          </View>
          <View style={{...styles.followWhiteArea}}>
            <Text style={{...styles.followNumber}}>77</Text>
            <Text style={{...styles.followTxt}}>Likes</Text>
          </View>
        </View>
        <View style={{...styles.centerView}}>
          <View style={{...styles.uploadContainer}}>
            <Image
              resizeMode="contain"
              style={styles.uploadImg}
              source={
                active === 0 ? Images.video_upload_purple : Images.video_upload
              }
            />
            <TouchableOpacity
              onPress={() => handleUploads()}
              style={
                active === 0
                  ? {...styles.purpleBtn}
                  : {...styles.transparentBtn}
              }>
              <Text
                style={
                  active === 0
                    ? {...styles.BtnText}
                    : {...styles.transparentBtnText}
                }>
                Uploads (375)
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{...styles.uploadContainer}}>
            <Image
              resizeMode="contain"
              style={styles.uploadImg}
              source={activeForYou === 1 ? Images.heartFill : Images.heart}
            />
            <TouchableOpacity
              onPress={() => handleLikes()}
              style={
                activeForYou === 1
                  ? {...styles.purpleBtn}
                  : {...styles.transparentBtn}
              }>
              <Text
                style={
                  activeForYou === 1
                    ? {...styles.BtnText}
                    : {...styles.transparentBtnText}
                }>
                Liked (375)
              </Text>
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
                    <View style={{...styles.playBtnArea}}>
                      <Image
                        style={{...styles.playBtnImg}}
                        source={Images.play_white}
                        resizeMode="contain"
                      />
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

Profile.defaultProps = {};

Profile.propTypes = {};

export default Profile;
