import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import styles from './styles';

import {Images, Metrics, Colors} from '../../theme';

const SocialOptions = props => {
  const {
    userImage,
    onPressUserImage,
    onPressFollow,
    onPressLike,
    totalLikes,
    onPressComment,
    totalComments,
    onPressShare,
    totalShares,
  } = props;

  return (
    <View style={styles.homeOptions}>
      <View style={styles.UserImageView}>
        <TouchableOpacity
          onPress={onPressUserImage}
          style={{...styles.userImgView}}>
          <Image
            style={{...styles.userImg}}
            resizeMode="contain"
            source={userImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.follow} onPress={onPressFollow}>
          <MaterialCommunityIcons
            name="plus"
            size={Metrics.ratio(16)}
            color={Colors.White}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.UserOptions}>
        <TouchableOpacity onPress={onPressLike}>
          <Image
            style={styles.optionImg}
            resizeMode="contain"
            source={Images.heart}
          />
        </TouchableOpacity>
        <Text style={styles.optionText}>{totalLikes}</Text>
      </View>

      <View style={styles.UserOptions}>
        <TouchableOpacity onPress={onPressComment}>
          <Image
            style={styles.optionImg}
            resizeMode="contain"
            source={Images.comments}
          />
        </TouchableOpacity>
        <Text style={styles.optionText}>{totalComments}</Text>
      </View>

      <View style={{...styles.UserOptions, marginBottom: Metrics.ratio(20)}}>
        <TouchableOpacity onPress={onPressShare}>
          <Image
            style={styles.optionImg}
            resizeMode="contain"
            source={Images.share}
          />
        </TouchableOpacity>
        <Text style={styles.optionText}>{totalShares}</Text>
      </View>
    </View>
  );
};

SocialOptions.defaultProps = {
  onPressUserImage: undefined,
  onPressFollow: undefined,
  onPressLike: undefined,
  totalLikes: 0,
  onPressComment: undefined,
  totalComments: 0,
  onPressShare: undefined,
  totalShares: 0,
};

SocialOptions.propTypes = {
  userImage: PropTypes.object || PropTypes.number,
  onPressUserImage: PropTypes.func,
  onPressFollow: PropTypes.func,
  onPressLike: PropTypes.func,
  totalLikes: PropTypes.number,
  onPressComment: PropTypes.func,
  totalComments: PropTypes.number,
  onPressShare: PropTypes.func,
  totalShares: PropTypes.number,
};

export default SocialOptions;
