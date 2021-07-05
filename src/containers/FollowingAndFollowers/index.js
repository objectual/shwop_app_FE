import React, {useState} from 'react';
import {View, StatusBar, FlatList, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

import {Header, Layout, FollowingFollowerCard} from '../../components';
import {Images, Colors} from '../../theme';

const following = [
  {
    id: 1,
    image: Images.user,
    name: 'Natalia Doe',
    userName: '@nataliadoe',
    isFollowBack: false,
  },
  {
    id: 2,
    image: Images.user,
    name: 'Ashley Tisdale',
    userName: '@ashleytis',
    isFollowBack: false,
  },
  {
    id: 3,
    image: Images.user,
    name: 'Nancy Olive',
    userName: '@nancyie',
    isFollowBack: true,
  },
  {
    id: 4,
    image: Images.user,
    name: 'Kamini Beck',
    userName: '@kaybee',
    isFollowBack: false,
  },
  {
    id: 5,
    image: Images.user,
    name: 'Amanda Joseph',
    userName: '@amandajoe',
    isFollowBack: false,
  },
];

const FollowingAndFollowers = props => {
  const [activeBtn, setActiveBtn] = useState('following');

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

  const renderFollowingCard = item => {
    console.log(item, 'item');
    return (
      <FollowingFollowerCard
        cardType={'following'}
        image={item.image}
        name={item.name}
        userName={item.userName}
        isFollowBack={item.isFollowBack}
        onPressFollowBack={() => {}}
        onPressFollow={() => {}}
        onPressMore={() => {}}
      />
    );
  };

  const renderFollowersCard = item => {
    console.log(item, 'item');
    return (
      <FollowingFollowerCard
        cardType={'followers'}
        image={item.image}
        name={item.name}
        userName={item.userName}
        isFollowBack={item.isFollowBack}
        onPressFollowBack={() => {}}
        onPressFriend={() => {}}
        onPressMore={() => {}}
      />
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
        leftIcon={Images.back_arrow_nav}
        isLeftIconImg={true}
        leftBtnPress={() => props.navigation.goBack()}
        headerText={'Emma Norman'}
      />

      <View style={{...styles.headerSeparator}}>
        {renderHeaderButton({
          isActive: activeBtn === 'following',
          label: `Following ${67}`,
          key: 'following',
          onPress: () => {},
        })}
        {renderHeaderButton({
          isActive: activeBtn === 'followers',
          label: `Followers ${74}`,
          key: 'followers',
          onPress: () => {},
        })}
      </View>

      <FlatList
        data={following}
        contentContainerStyle={{...styles.contentContainerStyle}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) =>
          activeBtn === 'following'
            ? renderFollowingCard(item)
            : renderFollowersCard(item)
        }
      />
    </Layout>
  );
};

FollowingAndFollowers.defaultProps = {};

FollowingAndFollowers.propTypes = {};

export default FollowingAndFollowers;
