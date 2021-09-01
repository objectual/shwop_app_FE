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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import util from '../../util';
import {Images, Metrics} from '../../theme';
import ApiSauce from '../../services/ApiSauce';
import {
  CATEGORIES,
  FOLLOWING_REVIEWS,
  FOR_YOU_REVIEWS,
} from '../../config/WebServices';
import {Layout, FollowCard, OverlayLoader} from '../../components';

const Main = props => {
  const isFocused = useIsFocused();

  const userDetailsResponse = useSelector(state => state.userDetails);

  const menuRef = useRef(null);

  const [recordTipValue, setRecordTipValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [reviews, setReviews] = useState([]);

  const [active, setActive] = useState(0);
  const [activeForYou, setActiveForYou] = useState(null);
  const [showTipCard, setShowTipCard] = useState(true);

  useEffect(() => {
    if (isFocused) {
      getRecordTip();
      getCategories();
      getFollowingReviews();
    } else {
      setReviews([]);
      setCategories([]);
      setSelectedCategory({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  // RECORD TIP CARD //
  const getRecordTip = async () => {
    try {
      const value = await AsyncStorage.getItem('recordTipSeen');
      if (value !== null) {
        setRecordTipValue(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // GET CATEGORIES //
  const getCategories = async () => {
    try {
      setIsLoading(true);
      const categoriesResult = await ApiSauce.get(CATEGORIES);
      if (categoriesResult?.data?.length) {
        setCategories(categoriesResult?.data);
      }
      setIsLoading(false);
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
      console.log(error);
    }
  };

  // GET FOLLOWING REVIEWS //
  const getFollowingReviews = async categoryId => {
    try {
      setIsLoading(true);
      const result = await ApiSauce.get(
        FOLLOWING_REVIEWS(categoryId ? categoryId : ''),
        userDetailsResponse.data.access_token,
      );
      setReviews(result?.data);
      setIsLoading(false);
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
      console.log(error);
    }
  };

  // GET FOR_YOU REVIEWS //
  const getForYouReviews = async categoryId => {
    try {
      setIsLoading(true);
      const result = await ApiSauce.get(
        FOR_YOU_REVIEWS(categoryId ? categoryId : ''),
        userDetailsResponse.data.access_token,
      );
      setReviews(result?.data);
      setIsLoading(false);
    } catch (error) {
      util.showAlertWithDelay({
        title: 'Error',
        message: error,
      });
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleIsModalizeOpen = value => {
    setShowTipCard(!value);
    getRecordTip();
  };

  const handleCategory = val => {
    hideMenu();
    setSelectedCategory({id: val.id, name: val.name});
    active === 0 ? getFollowingReviews(val.id) : getForYouReviews(val.id);
  };

  const handleRemoveCategory = () => {
    setSelectedCategory({});
    active === 0 ? getFollowingReviews() : getForYouReviews();
  };

  const handleFollowing = () => {
    setSelectedCategory({});
    setReviews([]);
    setActive(0);
    setActiveForYou(0);
    getFollowingReviews();
  };

  const handleForYou = () => {
    setSelectedCategory({});
    setReviews([]);
    setActive(2);
    setActiveForYou(1);
    getForYouReviews();
  };

  const handleNavigation = (screenName, params) => {
    props.navigation.navigate(screenName, {...params});
  };

  const hideMenu = () => menuRef?.current?.hide();

  const showMenu = () => menuRef?.current?.show();

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
        <View style={{...styles.centerView}}>
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

      <View style={{...styles.menuContainer}}>
        <Menu
          ref={menuRef}
          style={{
            ...styles.menu,
            height: categories?.length > 6 ? Metrics.screenHeight * 0.48 : null,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {categories.map(val => {
              const {name} = val;
              return (
                <MenuItem
                  onPress={() => {
                    handleCategory(val);
                  }}>
                  <View style={{...styles.menuItemContainer}}>
                    <Text style={{...styles.menuItemText}}>{name}</Text>
                  </View>
                </MenuItem>
              );
            })}
          </ScrollView>
        </Menu>
      </View>

      {selectedCategory.name ? (
        <View style={{...styles.barMainContainer}}>
          <View style={{...styles.barView}}>
            <Text style={{...styles.barText}}>{selectedCategory.name}</Text>
            <TouchableOpacity
              onPress={() => {
                handleRemoveCategory();
              }}>
              <MaterialCommunityIcons
                name="close"
                style={{...styles.barClose}}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}

      {!isLoading && reviews.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{...styles.MainContainer}}>
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
        <View style={{...styles.notFoundContainer}}>
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
