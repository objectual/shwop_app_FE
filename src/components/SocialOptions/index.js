import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Images, Metrics, Colors} from '../../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SocialOptions = () => {
  return (
    <View style={styles.homeOptions}>
      <View style={styles.UserImageView}>
        <Image
          style={styles.userImg}
          resizeMode="contain"
          source={Images.user}></Image>
        <TouchableOpacity style={styles.follow}>
          <MaterialCommunityIcons 
            name="plus"
            size={Metrics.ratio(20)}
            color={Colors.White}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.UserOptions}>
        <TouchableOpacity>
          <Image
            style={styles.optionImg}
            resizeMode="contain"
            source={Images.heartFill}></Image>
        </TouchableOpacity>
        <Text style={styles.optionText}>24.5k</Text>
      </View>
      <View style={styles.UserOptions}>
        <TouchableOpacity>
          <Image
            style={styles.optionImg}
            resizeMode="contain"
            source={Images.comments}></Image>
        </TouchableOpacity>
        <Text style={styles.optionText}>24.5k</Text>
      </View>
      <View style={styles.UserOptions}>
        <TouchableOpacity>
          <Image
            style={styles.optionImg}
            resizeMode="contain"
            source={Images.share}></Image>
        </TouchableOpacity>
        <Text style={styles.optionText}>24.5k</Text>
      </View>
    </View>
  );
};

export default SocialOptions;
