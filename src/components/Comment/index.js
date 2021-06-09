import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';
const Comment = props => {
  const {
    container: {},
    img,
    name,
    time,
    description,
  } = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileView}>
        <Image
          source={img}
          resizeMode="contain"
          style={styles.profileImgStyle}
        />
      </View>
      <View style={styles.locationView}>
        <Text style={styles.descTxt}>{description}</Text>
        <View style={styles.timeView}>
          <Text style={styles.timetxt}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

Comment.defaultProps = {
  container: {},
  img: '',
  name: '',
  time: '',
  description: '',
};
Comment.propTypes = {
  container: PropTypes.object,
  img: PropTypes.any,
  name: PropTypes.any,
  time: PropTypes.any,
  description: PropTypes.any,
};

export default Comment;
