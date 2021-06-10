import React, {useState, useRef} from 'react';
import {
  StatusBar,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Menu, {MenuItem} from 'react-native-material-menu';

import {Images} from '../../theme';
import {Layout, FollowCard} from '../../components';

import styles from './styles';

const Main = props => {
  const menuRef = useRef(null);
  const [active, setActive] = useState(0);
  const [activeForYou, setActiveForYou] = useState(null);
  const data = [
    {
      bannerImg: Images.FollowCardImg,
      profileImg: Images.commentUser,
      name: 'Natalia Doe',
      time: '23 min ago',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      like: '24.5k',
      subscriber: '1M',
      duration: '01:20',
    },
    {
      bannerImg: Images.FollowCardImg,
      profileImg: Images.commentUser,
      name: 'Natalia Doe',
      time: '23 min ago',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed adipiscing elit, sed',
      like: '24.5k',
      subscriber: '1M',
      duration: '01:20',
    },
    {
      bannerImg: Images.FollowCardImg,
      profileImg: Images.commentUser,
      name: 'Natalia Doe',
      time: '23 min ago',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      like: '24.5k',
      subscriber: '1M',
      duration: '01:20',
    },
    {
      bannerImg: Images.FollowCardImg,
      profileImg: Images.commentUser,
      name: 'Natalia Doe',
      time: '23 min ago',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      like: '24.5k',
      subscriber: '1M',
      duration: '01:20',
    },
    {
      bannerImg: Images.FollowCardImg,
      profileImg: Images.commentUser,
      name: 'Natalia Doe',
      time: '23 min ago',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      like: '24.5k',
      subscriber: '1M',
      duration: '01:20',
    },
  ];

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
    <Layout {...props}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <View style={{...styles.headerMain}}>
        <TouchableOpacity style={{...styles.TouchableMenu}}>
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
            style={[styles.iconImage]}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <Menu ref={menuRef} style={styles.menu}>
          {renderMenuItem({
            text: 'Dupes',
            // onPress: handleDownloadImage,
          })}
          {renderMenuItem({
            text: 'Vegan',
            // onPress: shareImage,
          })}
          {renderMenuItem({
            text: 'Acne',
            // onPress: modalizeOpen,
          })}
          {renderMenuItem({
            text: 'Drugstore',
            // onPress: modalizeOpen,
          })}
          {renderMenuItem({
            text: 'Acne',
            // onPress: modalizeOpen,
          })}
          {renderMenuItem({
            text: 'Vegan',
            // onPress: modalizeOpen,
          })}
          {renderMenuItem({
            text: 'Dupes',
            // onPress: modalizeOpen,
          })}
        </Menu>
      </View>
      <ScrollView>
        <View style={{...styles.MainContainer}}>
          {data.map(val => {
            const {
              bannerImg,
              profileImg,
              name,
              time,
              description,
              like,
              subscriber,
              duration,
            } = val;
            return (
              <FollowCard
                bannerImg={bannerImg}
                profileImg={profileImg}
                name={name}
                time={time}
                description={description}
                like={like}
                subscriber={subscriber}
                duration={duration}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={{...styles.tapView}}>
        <Text style={{...styles.tapTxt}}>Tap it to record your</Text>
        <Text style={{...styles.firstTxt}}>First Short</Text>
        <Text style={{...styles.firstTxt}}>Video</Text>
        <Image style={{...styles.recordImg}} source={Images.recordVideo} />
        <Image style={{...styles.polyginWhite}} source={Images.polygin_white} />
      </View>
    </Layout>
  );
};

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
