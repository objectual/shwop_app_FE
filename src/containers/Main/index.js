import React, {useState, useRef, useEffect} from 'react';
import {
  StatusBar,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import Menu, {MenuItem} from 'react-native-material-menu';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import util from '../../util';
import {Images} from '../../theme';
import ApiSauce from '../../services/ApiSauce';
import {REVIEW} from '../../config/WebServices';
import {Layout, FollowCard, OverlayLoader} from '../../components';

const Main = props => {
  const isFocused = useIsFocused();

  const userDetailsResponse = useSelector(state => state.userDetails);

  const menuRef = useRef(null);

  const [recordTipValue, setRecordTipValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const [active, setActive] = useState(0);
  const [activeForYou, setActiveForYou] = useState(null);
  const [showTipCard, setShowTipCard] = useState(true);

  useEffect(() => {
    if (isFocused) {
      getReviewData();
      getRecordTip();
    } else {
      setReviews([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const getRecordTip = async () => {
    try {
      const value = await AsyncStorage.getItem('recordTipSeen');
      if (value !== null) {
        setRecordTipValue(value);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const getReviewData = async () => {
    try {
      setIsLoading(true);
      const result = await ApiSauce.get(
        REVIEW,
        userDetailsResponse.data.access_token,
      );
      setIsLoading(false);
      if (result?.data?.length) {
        setReviews(result?.data);
      }
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      console.log('error', error);
      setIsLoading(false);
    }
  };

  const handleIsModalizeOpen = value => {
    setShowTipCard(!value);
    getRecordTip();
  };

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const handleFollowing = () => {
    setActive(0);
    setActiveForYou(0);
  };

  const handleForYou = () => {
    setActiveForYou(1);
    setActive(2);
  };

  const hideMenu = () => menuRef?.current?.hide();

  const showMenu = () => menuRef?.current?.show();

  const renderMenuItem = ({image, text, onPress}) => {
    return (
      <MenuItem onPress={onPress}>
        <View style={styles.menuItemContainer}>
          <Text style={styles.menuItemText}>{text}</Text>
        </View>
      </MenuItem>
    );
  };

  return (
    <Layout {...props} isModalizeOpen={value => handleIsModalizeOpen(value)}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <View style={{...styles.headerMain}}>
        <TouchableOpacity
          style={{...styles.TouchableMenu}}
          onPress={() => props.navigation.openDrawer()}>
          <View style={{...styles.backarrowView}}>
            <Image
              source={Images.menuBlack}
              style={{...styles.iconImage}}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.centerView}>
          <TouchableOpacity
            onPress={() => handleFollowing()}
            style={
              active === 0 ? {...styles.purpleBtn} : {...styles.transparentBtn}
            }>
            <Text
              style={
                active === 0
                  ? {...styles.BtnText}
                  : {...styles.transparentBtnText}
              }>
              Following
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleForYou()}
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
              For You
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={showMenu} style={{...styles.TouchableMenu}}>
          <Image
            source={Images.filterBlack}
            style={{...styles.iconImage}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <Menu ref={menuRef} style={styles.menu}>
          {renderMenuItem({
            text: 'Dupes',
            onPress: hideMenu,
          })}
          {renderMenuItem({
            text: 'Vegan',
            onPress: hideMenu,
          })}
          {renderMenuItem({
            text: 'Acne',
            onPress: hideMenu,
          })}
          {renderMenuItem({
            text: 'Drugstore',
            onPress: hideMenu,
          })}
          {renderMenuItem({
            text: 'Acne',
            onPress: hideMenu,
          })}
          {renderMenuItem({
            text: 'Vegan',
            onPress: hideMenu,
          })}
          {renderMenuItem({
            text: 'Dupes',
            onPress: hideMenu,
          })}
        </Menu>
      </View>

      {!isLoading && reviews.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.MainContainer}>
            {reviews.map(val => {
              const {
                thumbnail,
                createdAt,
                duration,
                products: {description},
                user: {
                  profile: {name, profileImage},
                },
                _count: {ReviewLike},
              } = val;
              return (
                <FollowCard
                  bannerImg={{uri: thumbnail}}
                  profileImg={{uri: profileImage}}
                  name={name}
                  description={description}
                  like={ReviewLike}
                  time={moment(createdAt).fromNow()}
                  duration={duration}
                  // subscriber={subscriber}
                  onPress={() => handleNavigation('VideoPlaying')}
                />
              );
            })}
          </View>
        </ScrollView>
      ) : null}

      {!isLoading && !reviews.length ? (
        <View style={styles.notFoundContainer}>
          <Text style={{...styles.notFoundText}}>
            {'Sorry, no record found.\nPlease try again later.'}
          </Text>
        </View>
      ) : null}

      {showTipCard && !recordTipValue ? (
        <View style={{...styles.tapView}}>
          <Text style={{...styles.tapTxt}}>Tap it to record your</Text>
          <Text style={{...styles.firstTxt}}>First Short</Text>
          <Text style={{...styles.firstTxt}}>Video</Text>
          <Image style={{...styles.recordImg}} source={Images.recordVideo} />
          <Image
            style={{...styles.polyginWhite}}
            source={Images.polygin_white}
          />
        </View>
      ) : null}

      <OverlayLoader isLoading={isLoading} />
    </Layout>
  );
};

Main.defaultProps = {};
Main.propTypes = {};

export default Main;
