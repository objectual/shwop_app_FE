import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import {Images} from '../../theme';

const FollowingFollowerCard = props => {
  const {
    cardType,
    image,
    name,
    userName,
    isFollowBack,
    onPressFollowBack,
    onPressFollow,
    onPressMore,
    onPressFriend,
  } = props;

  return (
    <React.Fragment>
      {cardType === 'following' && (
        <View style={{...styles.cardContainer}}>
          <View style={{...styles.cardContentContainer}}>
            <Image
              source={image}
              resizeMode={'cover'}
              style={{...styles.userImage}}
            />
            <View style={{...styles.infoContainer}}>
              <Text numberOfLines={1} style={{...styles.nameText}}>
                {name}
              </Text>
              <Text numberOfLines={1} style={{...styles.userNameText}}>
                {userName}
              </Text>
            </View>
          </View>

          <View style={{...styles.cardButtonRow}}>
            {isFollowBack ? (
              <TouchableOpacity
                onPress={onPressFollowBack}
                style={{...styles.cardFollowBackBtn}}>
                <Text style={{...styles.cardFollowBackBtnText}}>
                  {'Follow Back'}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={onPressFollow}
                style={{...styles.cardFollowBtn}}>
                <Text style={{...styles.cardFollowBtnText}}>{'Follow'}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={onPressMore}
              style={{...styles.moreOptionBtn}}>
              <Image
                source={Images.more_following_and_followers}
                resizeMode={'contain'}
                style={{...styles.moreOptionBtnImage}}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {cardType === 'followers' && (
        <View style={{...styles.cardContainer}}>
          <View style={{...styles.cardContentContainer}}>
            <Image
              source={image}
              resizeMode={'cover'}
              style={{...styles.userImage}}
            />
            <View style={{...styles.infoContainer}}>
              <Text numberOfLines={1} style={{...styles.nameText}}>
                {name}
              </Text>
              <Text numberOfLines={1} style={{...styles.userNameText}}>
                {userName}
              </Text>
            </View>
          </View>

          <View style={{...styles.cardButtonRow}}>
            {isFollowBack ? (
              <TouchableOpacity
                onPress={onPressFollowBack}
                style={{...styles.cardFollowBackBtn}}>
                <Text style={{...styles.cardFollowBackBtnText}}>
                  Follow Back
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={onPressFriend}
                style={{...styles.cardFriendsBtn}}>
                <Text style={{...styles.cardFriendsBtnText}}>Friends</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={onPressMore}
              style={{...styles.moreOptionBtn}}>
              <Image
                source={Images.more_following_and_followers}
                resizeMode={'contain'}
                style={{...styles.moreOptionBtnImage}}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </React.Fragment>
  );
};

FollowingFollowerCard.defaultProps = {
  cardType: '',
  name: '',
  userName: '',
  isFollowBack: false,
  onPressFollowBack: undefined,
  onPressFollow: undefined,
  onPressMore: undefined,
  onPressFriend: undefined,
};

FollowingFollowerCard.propTypes = {
  cardType: PropTypes.string.isRequired,
  name: PropTypes.string,
  userName: PropTypes.string,
  isFollowBack: PropTypes.bool,
  onPressFollowBack: PropTypes.func,
  onPressFollow: PropTypes.func,
  onPressMore: PropTypes.func,
  onPressFriend: PropTypes.func,
};

export default FollowingFollowerCard;
