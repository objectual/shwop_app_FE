import React, {useState, useRef} from 'react';
import {View, StatusBar, FlatList, TouchableOpacity, Text} from 'react-native';
import Menu, {MenuItem} from 'react-native-material-menu';

import styles from './styles';

import {Header, Layout, ReviewCard, VideoModal} from '../../components';
import {Images, Colors} from '../../theme';

const reviews = [
  {
    id: 1,
    image: Images.user,
    name: 'Ricky Peck',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: '2021-07-07 13:04:27.619',
    reviewType: 'Buyer',
    rating: 4.9,
    video:
      'https://static.videezy.com/system/resources/previews/000/043/977/original/DSC_8447_V1-0010.mp4',
  },
  {
    id: 2,
    image: Images.user,
    name: 'Ricky Peck',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: '2021-07-07 13:04:27.619',
    reviewType: 'Buyer',
    rating: 4.9,
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    comments: [
      {
        id: 1.1,
        image: Images.user,
        name: 'Ricky Peck',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2021-07-07 13:04:27.619',
        reviewType: 'Buyer',
      },
    ],
  },
  {
    id: 3,
    image: Images.user,
    name: 'Ricky Peck',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: '2021-07-07 13:04:27.619',
    reviewType: 'Buyer',
    rating: 4.9,
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    comments: [
      {
        id: 2.1,
        image: Images.user,
        name: 'Ricky Peck',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2021-07-07 13:04:27.619',
        reviewType: 'Buyer',
      },
      {
        id: 2.2,
        image: Images.user,
        name: 'Ricky Peck',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2021-07-07 13:04:27.619',
        reviewType: 'Buyer',
      },
    ],
  },
];

const Reviews = props => {
  const menuRef = useRef(null);

  const [activeBtn, setActiveBtn] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');
  const [activeThumbnail, setActiveThumbnail] = useState('');

  const hideMenu = () => menuRef?.current?.hide();

  const showMenu = () => menuRef?.current?.show();

  const onPressPlay = (video, thumbnail) => {
    setActiveVideo(video);
    setActiveThumbnail(thumbnail);
    setShowVideoModal(true);
  };

  const onPressClose = () => {
    setActiveVideo('');
    setActiveThumbnail('');
    setShowVideoModal(false);
  };

  const renderHeaderButton = ({isActive, label, key, onPress}) => {
    return (
      <TouchableOpacity
        style={isActive ? styles.activeBtn : styles.inactiveBtn}
        onPress={() => {
          setActiveBtn(key);
          onPress();
        }}>
        <Text style={isActive ? styles.activeBtnText : styles.inactiveBtnText}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderMenuItem = ({text, onPress}) => {
    return (
      <MenuItem onPress={onPress}>
        <View style={{...styles.menuItem}}>
          <Text style={{...styles.menuItemText}}>{text}</Text>
        </View>
      </MenuItem>
    );
  };

  return (
    <Layout {...props} isLogedIn={true}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
        barStyle="dark-content"
      />

      <Header
        headerBgColor={Colors.White}
        isDropShadow={false}
        isLeftIconImg={true}
        leftIcon={Images.back_arrow_nav}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Nike Sports shoes UK4'}
        isRightIconImg={true}
        rightIcon={Images.filterBlack}
        rightBtnPress={showMenu}
        rightIconImageStyle={{...styles.rightIconImageStyle}}
      />

      <View style={{...styles.menuContainer}}>
        <Menu ref={menuRef} style={{...styles.menuStyle}}>
          {renderMenuItem({
            text: 'Newest',
            onPress: hideMenu,
          })}
          {renderMenuItem({
            text: 'Oldest',
            onPress: hideMenu,
          })}
        </Menu>
      </View>

      <View style={{...styles.headerSeparator}}>
        {renderHeaderButton({
          isActive: activeBtn === 'all',
          label: 'All',
          key: 'all',
          onPress: () => {},
        })}
        {renderHeaderButton({
          isActive: activeBtn === 'buyers',
          label: 'From Buyers',
          key: 'buyers',
          onPress: () => {},
        })}
      </View>

      <FlatList
        data={reviews}
        contentContainerStyle={{...styles.contentContainerStyle}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <ReviewCard
              userImage={item.image}
              userName={item.name}
              rating={item.rating}
              content={item.content}
              video={item.video}
              createdAt={item.createdAt}
              reviewType={item.reviewType}
              comments={item.comments}
              onPressPlay={onPressPlay}
            />
          );
        }}
      />

      {showVideoModal && (
        <VideoModal
          visible={showVideoModal}
          source={{uri: activeVideo}}
          poster={activeThumbnail}
          onPressClose={onPressClose}
        />
      )}
    </Layout>
  );
};

Reviews.defaultProps = {};

Reviews.propTypes = {};

export default Reviews;
