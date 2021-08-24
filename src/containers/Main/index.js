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
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU2ODk1ZTY5LWJiNjUtNGY5Mi04OTg5LTZhYWUyNGRlZmM4NiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyOTc5NjY0NiwiYXVkIjoiaHR0cHM6Ly9wcmVyZWMtYmVhdXR5LWFwcC5oZXJva3VhcHAuY29tIiwiaXNzIjoic2h3b3BwX2FwcCIsInN1YiI6InNod29wcC5hcHBAZ21haWwuY29tIn0.pSglQ55b50prb8UONSJycdJYu-t3aK8lQ32JySSPHnA119RV8tuQsrr4OXO7ZsEeblUVt8KCwyYs95ElPb6LUl-RMyDUKcvWLMn1nrbMRPEMoJwEH7aWN12ZGBhGGaemvIxIjgudEoKDvQD0V-4TK5dLMRpgDl16-IgdzUi8yM1y0g21kCqtrDJBc4rvplicBLsXw0ZqjN9dZyHJBFJUR8LzfNxyvAv9eDs0xx1SNw-ftfO7vYYMwWbTY3Sbfn6GyKklFy6e9pChMy8UEQl4ksh0a0P4kUw_7zfptF02boYklsULroPsm4X7u9fdXMVnpBxQRE8u--v8ztOUZHDBF-AZtXv-Ncluyy4XzZ84Q3RH9iSqFy2875grxdjjmL2QujzfFseUhcPH3SIu6RR92MJ2Uzq5YxLFrW7pIqQE49V4boGLyVUYmEVECvC_47AWuweddJp75fPFNAwOnPv7M7NB7ctm6itsWUateiipLXuyB9pr8KRkl7Aw298qHaZOduyMwLDzqg4SS7backLFUl09w8DucsUF0_bPsmrPyIyZhsfIOPYdExNYg9VnPIuFwiOTkmTil4XuYkJAuIY-umZNbXuME3X58Q8645mBdGfDvGNK_MjnfZU99CGRRUW8hsmOxPnYCM9XxGtXWggs3SPBHHSSuoPy6Ve-8x3GJPQ',
        // userDetailsResponse.data.access_token,
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
