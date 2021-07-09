import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createThumbnail} from 'react-native-create-thumbnail';
import FastImage from 'react-native-fast-image';

import styles from './styles';

import {Images, Metrics, Colors} from '../../theme';

const ReviewCard = props => {
  const {
    userImage,
    userName,
    rating,
    content,
    video,
    createdAt,
    reviewType,
    comments,
    onPressPlay,
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    handleCreateThumbnail();
  }, []);

  const handleCreateThumbnail = async () => {
    try {
      setIsLoading(true);
      const thumbnail = await createThumbnail({url: video, timeStamp: 10000});
      setThumbnail(thumbnail.path);
    } catch (error) {
      console.log(error, 'error');
      setIsLoading(false);
    }
  };

  return (
    <View style={{...styles.container}}>
      <View style={{...styles.profileSec}}>
        <View style={{...styles.profileRow}}>
          <Image
            source={userImage}
            resizeMode={'cover'}
            style={{...styles.profileImage}}
          />
          <Text style={{...styles.profileName}}>{userName}</Text>
        </View>
        <View style={{...styles.ratingRow}}>
          <Image
            source={Images.star}
            resizeMode={'contain'}
            style={{...styles.ratingImage}}
          />
          <Text style={{...styles.ratingText}}>{rating}</Text>
        </View>
      </View>

      <Text style={{...styles.reviewText}}>{content}</Text>

      <View style={{...styles.videoContainer}}>
        {thumbnail.includes('file') && (
          <FastImage
            source={{uri: thumbnail, priority: FastImage.priority.normal}}
            resizeMode={FastImage.resizeMode.cover}
            style={{width: '100%', height: '100%'}}
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
          />
        )}

        {!isLoading && thumbnail.includes('file') && (
          <TouchableOpacity
            onPress={() => onPressPlay(video, thumbnail)}
            style={{...styles.playAndPausedBtn}}>
            <Ionicons
              name={'play'}
              size={Metrics.ratio(30)}
              color={Colors.White}
            />
          </TouchableOpacity>
        )}

        {isLoading && (
          <ActivityIndicator
            size="small"
            color={Colors.Affair}
            style={{...styles.activityIndicator}}
          />
        )}
      </View>

      <View style={{...styles.timeContainer}}>
        <View style={{...styles.timeRow}}>
          <Image
            source={Images.clock_reviews}
            resizeMode={'contain'}
            style={{...styles.timeImage}}
          />
          <Text style={{...styles.timeText}}>
            {moment(createdAt).fromNow()}
          </Text>
        </View>
        <Text
          style={{
            ...styles.reviewType,
          }}>{`Review From ${reviewType}`}</Text>
      </View>

      {comments?.map(comment => {
        return (
          <View
            key={comment.id.toString()}
            style={{...styles.commentContainer}}>
            <Image
              source={comment.image}
              resizeMode={'cover'}
              style={{...styles.profileImage}}
            />

            <View style={{...styles.commentDetailContainer}}>
              <Text style={{...styles.commentUserName}}>{comment.name}</Text>
              <Text style={{...styles.commentText}}>{comment.content}</Text>
              <View style={{...styles.timeContainer}}>
                <View style={{...styles.timeRow}}>
                  <Image
                    source={Images.clock_reviews}
                    resizeMode={'contain'}
                    style={{...styles.timeImage}}
                  />
                  <Text style={{...styles.timeText}}>
                    {moment(comment.createdAt).fromNow()}
                  </Text>
                </View>
                <Text
                  style={{
                    ...styles.reviewType,
                  }}>{`Review From ${comment.reviewType}`}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

ReviewCard.defaultProps = {
  userImage: undefined,
  userName: '',
  rating: 0,
  content: '',
  video: undefined,
  createdAt: '',
  reviewType: '',
  comments: [],
  onPressPlay: undefined,
};

ReviewCard.propTypes = {
  userImage: PropTypes.number || PropTypes.object,
  userName: PropTypes.string,
  rating: PropTypes.number,
  content: PropTypes.string,
  video: PropTypes.string,
  createdAt: PropTypes.string,
  reviewType: PropTypes.string,
  comments: PropTypes.array,
  onPressPlay: PropTypes.func,
};

export default ReviewCard;
