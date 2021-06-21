import React from 'react';
import {View, Text, StatusBar, ScrollView, Image} from 'react-native';

import styles from './styles';

import {Header} from '../../components';
import {Images} from '../../theme';

const notifications = [
  {
    image: Images.user,
    text: 'Alex sent you friend request',
    time: '9:45AM',
    read: false,
  },
  {
    image: Images.user,
    text: 'You have new unread Message here',
    time: '9:45AM',
    read: false,
  },
  {
    image: Images.user,
    text: 'Others have liked you video',
    time: '9:45AM',
    read: true,
  },
  {
    image: Images.user,
    text: 'Travis sent you a message',
    time: '9:45AM',
    read: true,
  },
];

const Notification = props => {
  return (
    <View style={{...styles.container}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <Header
        isLeftIconImg={true}
        leftIcon={Images.back_arrow_nav}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Notification'}
      />

      <ScrollView>
        {notifications.map(item => (
          <View style={{...styles.card}}>
            <Image
              resizeMode={'contain'}
              source={item.image}
              style={{...styles.cardImage}}
            />
            <View style={{...styles.detailRow}}>
              <View style={{...styles.headingContainer}}>
                <Text
                  numberOfLines={1}
                  style={
                    item.read
                      ? {...styles.readHeadingText}
                      : {...styles.unreadHeadingText}
                  }>
                  {item.text}
                </Text>
                {!item.read && <View style={{...styles.unreadIcon}} />}
              </View>
              <Text style={{...styles.timeText}}>{item.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

Notification.defaultProps = {};

Notification.propTypes = {};

export default Notification;
