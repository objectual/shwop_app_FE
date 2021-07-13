import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';

import styles from './styles';

import {Layout} from '../../components';
import {Images, Colors, Metrics, Fonts} from '../../theme';
import {useKeyboardStatus} from '../../hooks';

const users = [
  {
    id: 1,
    image: Images.user,
    name: 'Alex',
    message: 'Hey when are you going?',
    createdAt: '9:45AM',
    read: false,
  },
  {
    id: 2,
    image: Images.user,
    name: 'Sandra',
    message: 'I would love to take this trip with',
    createdAt: '9:45AM',
    read: true,
  },
  {
    id: 3,
    image: Images.user,
    name: 'Lisa',
    message: 'Sure, lets do it.',
    createdAt: '9:45AM',
    read: true,
  },
  {
    id: 4,
    image: Images.user,
    name: 'Mike',
    message: 'Yes, it was an amazing experience',
    createdAt: '9:45AM',
    read: false,
  },
  {
    id: 5,
    image: Images.user,
    name: 'Jennifer',
    message: 'Loved it out there.',
    createdAt: '9:45AM',
    read: true,
  },
  {
    id: 5,
    image: Images.user,
    name: 'Travis',
    message: "Can't wait to do it again",
    createdAt: '9:45AM',
    read: true,
  },
];

const Chat = props => {
  const searchRef = useRef();

  const [isOpen] = useKeyboardStatus();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (!isOpen) {
      searchRef.current.blur();
    }
  }, [isOpen]);

  const results = !searchText
    ? users
    : users?.filter(
        item =>
          item?.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
          item?.message.toLowerCase().includes(searchText.toLocaleLowerCase()),
      );

  const renderUsers = item => {
    return (
      <View style={{...styles.userContainer}}>
        <View style={{...styles.userImageNameContainer}}>
          <Image source={item.image} style={{...styles.userImage}} />

          <View style={{...styles.userNameMessageContainer}}>
            <Text numberOfLines={1} style={{...styles.userNameText}}>
              {item.name}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                ...styles.userMessageText,
                color: item.read ? Colors.Silver_Chalice : Colors.Black,
                fontFamily: item.read
                  ? Fonts.type.Nunito
                  : Fonts.type.NunitoBold,
              }}>
              {item.message}
            </Text>
          </View>
        </View>

        <View style={{...styles.createdAtContainer}}>
          <Text style={{...styles.createdAtText}}>{item.createdAt}</Text>
          {!item.read && <View style={{...styles.unreadIcon}} />}
        </View>
      </View>
    );
  };

  return (
    <Layout {...props} isLogedIn={true}>
      <StatusBar
        translucent
        backgroundColor={Colors.Concrete}
        barStyle="dark-content"
      />

      <View style={{...styles.headerContainer}}>
        <TouchableOpacity style={{...styles.leftBtn}}>
          <Image
            source={Images.back_arrow_nav}
            resizeMode={'contain'}
            style={{...styles.leftBtnImage}}
          />
        </TouchableOpacity>
        <Text numberOfLines={1} style={{...styles.headerText}}>
          Chats
        </Text>
        <View style={{...styles.freeSeparator}} />
        <Text numberOfLines={1} style={{...styles.unreadText}}>
          {`${23} Unread Chats`}
        </Text>
      </View>

      <View style={{...styles.searchContainer}}>
        <Image
          source={Images.search_gray_chat}
          resizeMode={'contain'}
          style={{...styles.searchImage}}
        />
        <TextInput
          ref={searchRef}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={{...styles.searchTextInput}}
          placeholder={'Search by Name or Handle'}
          placeholderTextColor={Colors.silver}
        />
      </View>

      <FlatList
        data={results}
        contentContainerStyle={{...styles.contentContainerStyle}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderUsers(item)}
      />
    </Layout>
  );
};

Chat.defaultProps = {};

Chat.propTypes = {};

export default Chat;
