import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import {Images, Metrics, Colors} from '../../theme';

const SocialOptions = props => {
  const {onPress} = props;
  return (
    <View style={styles.homeOptions}>
      <View style={styles.UserImageView}>
        <View style={{...styles.userImgView}}>
          <Image
            style={{...styles.userImg}}
            resizeMode="contain"
            source={Images.user}
          />
        </View>
        <TouchableOpacity style={styles.follow}>
          <MaterialCommunityIcons
            name="plus"
            size={Metrics.ratio(16)}
            color={Colors.White}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.UserOptions}>
        <TouchableOpacity>
          <Image
            style={styles.optionImg}
            resizeMode="contain"
            source={Images.heart}
          />
        </TouchableOpacity>
        <Text style={styles.optionText}>24.5k</Text>
      </View>
      <View style={styles.UserOptions}>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={styles.optionImg}
            resizeMode="contain"
            source={Images.comments}
          />
        </TouchableOpacity>
        <Text style={styles.optionText}>24.5k</Text>
      </View>
      <View style={{...styles.UserOptions, marginBottom: Metrics.ratio(20)}}>
        <TouchableOpacity>
          <Image
            style={styles.optionImg}
            resizeMode="contain"
            source={Images.share}
          />
        </TouchableOpacity>
        <Text style={styles.optionText}>24.5k</Text>
      </View>
    </View>
  );
};

export default SocialOptions;
