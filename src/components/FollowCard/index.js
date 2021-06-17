import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {Images} from '../../theme';

const FollowCard = props => {
  const {
    bannerImg,
    profileImg,
    name,
    time,
    description,
    like,
    subscriber,
    duration,
  } = props;
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.bannerView}>
        <Image
          resizeMode={'cover'}
          style={styles.followImg}
          source={bannerImg}
        />
      </View>
      <View style={styles.profileArea}>
        <Image
          resizeMode="contain"
          style={styles.profileImg}
          source={profileImg}
        />
        <View style={styles.nameArea}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.clockArea}>
            <Image
              resizeMode="contain"
              style={styles.clock}
              source={Images.clock}
            />
            <Text style={styles.clockTxt}>{time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.desctxtArea}>
        <Text numberOfLines={2} style={styles.desctxt}>
          {description}
        </Text>
      </View>
      <View style={{...styles.likeArea}}>
        <View style={{...styles.likeSubscriber}}>
          <View style={{...styles.likeRightSpacing}}>
            <Image
              resizeMode="contain"
              style={styles.heart}
              source={Images.heartFill}
            />
            <Text style={styles.likeTxt}>{like}</Text>
          </View>
          <View style={styles.likeImageText}>
            <Image
              resizeMode="contain"
              style={styles.heart}
              source={Images.subscribers}
            />
            <Text style={styles.likeTxt}>{subscriber}</Text>
          </View>
        </View>

        <View style={styles.likeImageText}>
          <Image
            resizeMode="contain"
            style={styles.play}
            source={Images.play}
          />
          <Text style={styles.likeTxt}>{duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

FollowCard.defaultProps = {};
FollowCard.propTypes = {};

export default FollowCard;
