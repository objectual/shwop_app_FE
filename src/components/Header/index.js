import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import {Metrics, Colors} from '../../theme';

const Header = props => {
  const {
    headerBgColor,
    isDropShadow,
    isLeftIconImg,
    leftIcon,
    leftIconColor,
    leftBtnPress,
    leftIconStyle,
    leftIconCircleStyle,
    leftIconImageStyle,
    leftIconSize,
    headerLogo,
    headerLogoStyle,
    headerText,
    headerTextStyle,
    isRightIconImg,
    rightIcon,
    rightIconColor,
    rightIconStyle,
    rightBtnPress,
    rightIconSize,
    rightIconImageStyle,
    rightText,
    isSearchBar,
    searchBarStyle,
    searchBarTextInputStyle,
    searchPlaceholder,
    searchValue,
    onChangeSearchText,
    rightSecBtnPress,
    rightSecIconStyle,
    rightSecText,
    rightSecIcon,
    isRightSecIconImg,
    rightSecIconSize,
    rightSecIconColor,
    rightSecIconImageStyle,
  } = props;

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: headerBgColor},
        isDropShadow ? styles.dropShadow : null,
      ]}>
      <TouchableOpacity
        style={[styles.TouchableMenu, leftIconStyle]}
        onPress={leftBtnPress}>
        {leftIcon && isLeftIconImg ? (
          <View style={(styles.backarrowView, leftIconCircleStyle)}>
            <Image
              source={leftIcon}
              style={{...styles.iconImage, ...leftIconImageStyle}}
              resizeMode={'contain'}
            />
          </View>
        ) : (
          <Icon
            size={leftIconSize ? leftIconSize : Metrics.ratio(28)}
            color={leftIconColor ? leftIconColor : Colors.Dove_Gray}
            name={leftIcon}
          />
        )}
      </TouchableOpacity>

      <View style={[styles.centerView]}>
        {headerLogo ? (
          <Image
            source={headerLogo}
            style={[styles.headerLogo, headerLogoStyle]}
            resizeMode={'contain'}
          />
        ) : null}
        <Text numberOfLines={1} style={[styles.headerText, headerTextStyle]}>
          {headerText}
        </Text>
      </View>

      {isSearchBar ? (
        <View style={[styles.centerView]}>
          <View style={[styles.searchBarView, searchBarStyle]}>
            <Icon
              name={'search'}
              color={Colors.Dove_Gray}
              size={Metrics.ratio(23)}
            />
            <TextInput
              style={[styles.searchBarTextInput, searchBarTextInputStyle]}
              onChangeText={onChangeSearchText}
              placeholder={searchPlaceholder}
              placeholderTextColor={Colors.Dove_Gray}
              value={searchValue}
              onPressOut={Keyboard.dismiss}
            />
          </View>
        </View>
      ) : null}

      <TouchableOpacity
        onPress={rightBtnPress}
        style={[styles.TouchableMenu, rightIconStyle]}>
        {rightIcon && isRightIconImg ? (
          <Image
            source={rightIcon}
            style={{...styles.iconImage, ...rightIconImageStyle}}
            resizeMode={'contain'}
          />
        ) : (
          <Icon
            size={rightIconSize ? rightIconSize : Metrics.ratio(28)}
            color={rightIconColor ? rightIconColor : Colors.Dove_Gray}
            name={rightIcon}
          />
        )}
        {rightText ? (
          <Text style={{...styles.rightText}}>{rightText}</Text>
        ) : null}
      </TouchableOpacity>

      {rightSecIcon ? (
        <TouchableOpacity
          onPress={rightSecBtnPress}
          style={[styles.TouchableMenu, rightSecIconStyle]}>
          {rightSecText ? (
            <Text style={styles.rightText}>{rightSecText}</Text>
          ) : null}
          {rightSecIcon && isRightSecIconImg ? (
            <Image
              source={rightSecIcon}
              style={{...styles.iconImage, ...rightSecIconImageStyle}}
              resizeMode={'contain'}
            />
          ) : (
            <Icon
              size={rightSecIconSize ? rightSecIconSize : Metrics.ratio(28)}
              color={rightSecIconColor ? rightSecIconColor : Colors.Dove_Gray}
              name={rightSecIcon}
            />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

Header.defaultProps = {
  headerBgColor: '',
  isDropShadow: true,
  isLeftIconImg: false,
  leftIcon: undefined,
  leftBtnPress: undefined,
  leftIconStyle: undefined,
  leftIconCircleStyle: undefined,
  leftIconSize: undefined,
  headerLogo: '',
  headerLogoStyle: undefined,
  headerText: '',
  headerTextStyle: undefined,
  isRightIconImg: false,
  rightIcon: undefined,
  rightBtnPress: undefined,
  rightIconStyle: undefined,
  rightIconSize: undefined,
  rightText: '',
  isSearchBar: false,
  searchBarStyle: undefined,
  searchBarTextInputStyle: undefined,
  searchPlaceholder: 'Search',
  searchValue: '',
  onChangeSearchText: undefined,
  rightSecBtnPress: undefined,
  rightSecIconStyle: undefined,
  rightSecText: '',
  rightSecIcon: undefined,
  isRightSecIconImg: false,
  rightSecIconSize: undefined,
  rightSecIconColor: undefined,
};

Header.propTypes = {
  headerBgColor: PropTypes.string,
  isDropShadow: PropTypes.bool,
  isLeftIconImg: PropTypes.bool,
  leftIcon: PropTypes.number,
  leftIconColor: PropTypes.string,
  leftBtnPress: PropTypes.func,
  leftIconStyle: PropTypes.object,
  leftIconCircleStyle: PropTypes.object,
  leftIconSize: PropTypes.number,
  headerLogo: PropTypes.string,
  headerLogoStyle: PropTypes.object,
  headerText: PropTypes.string,
  headerTextStyle: PropTypes.object,
  isRightIconImg: PropTypes.bool,
  rightIcon: PropTypes.number,
  rightIconColor: PropTypes.string,
  rightBtnPress: PropTypes.func,
  rightIconStyle: PropTypes.object,
  rightIconSize: PropTypes.number,
  rightText: PropTypes.string,
  isSearchBar: PropTypes.bool,
  searchBarStyle: PropTypes.object,
  searchBarTextInputStyle: PropTypes.object,
  searchPlaceholder: PropTypes.string,
  searchValue: PropTypes.string,
  onChangeSearchText: PropTypes.func,
  rightSecBtnPress: PropTypes.func,
  rightSecIconStyle: PropTypes.object,
  rightSecText: PropTypes.string,
  rightSecIcon: PropTypes.string,
  isRightSecIconImg: PropTypes.bool,
  rightSecIconSize: PropTypes.number,
  rightSecIconColor: PropTypes.string,
  leftIconImageStyle: PropTypes.object,
  rightIconImageStyle: PropTypes.object,
  rightSecIconImageStyle: PropTypes.object,
};

export default Header;
