import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  FlatList,
  Platform,
} from 'react-native';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';

import styles from './styles';

import {Images, Colors, Metrics, Fonts} from '../../theme';
import {useKeyboardStatus} from '../../hooks';

const Messages = props => {
  const [isOpen] = useKeyboardStatus();

  const textInputRef = useRef();

  const [messages, setMessages] = useState([]);
  const [inputHeight, setInputHeight] = useState(0);
  const [messageText, setMessageText] = useState('');
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);

  const userInfo = {
    id: 1,
    name: 'Nancy Olive',
    avatar: Images.user,
  };

  useEffect(() => {
    setMessages(
      [
        {
          id: 1,
          text: 'Hey when are you going?',
          createdAt: new Date(),
          status: 'seen',
          user: {
            id: 1,
            name: 'Nancy Olive',
            avatar: Images.user,
          },
        },
        {
          id: 2,
          text: 'I would love to take this trip with ...',
          createdAt: new Date(),
          status: 'sent',
          user: {
            id: 2,
            name: 'Mike',
            avatar: 'https://placeimg.com/640/480/people',
          },
        },
        {
          id: 3,
          text: 'Sure, lets do it.',
          createdAt: new Date(),
          status: 'seen',
          user: {
            id: 1,
            name: 'Nancy Olive',
            avatar: Images.user,
          },
        },
        {
          id: 4,
          text: 'Yes, it was an amazing experience',
          createdAt: new Date(),
          status: 'sent',
          user: {
            id: 2,
            name: 'Mike',
            avatar: 'https://placeimg.com/640/480/people',
          },
        },
        {
          id: 5,
          text: 'Loved it out there.',
          createdAt: new Date(),
          status: 'delivered',
          user: {
            id: 1,
            name: 'Nancy Olive',
            avatar: Images.user,
          },
        },
        {
          id: 6,
          text: "Can't wait to do it again",
          createdAt: new Date(),
          status: 'sent',
          user: {
            id: 2,
            name: 'Mike',
            avatar: 'https://placeimg.com/640/480/people',
          },
        },
        {
          id: 7,
          text: 'Hey when are you going?',
          createdAt: new Date(),
          status: 'sent',
          user: {
            id: 1,
            name: 'Nancy Olive',
            avatar: Images.user,
          },
        },
      ].reverse(),
    );
  }, []);

  useEffect(() => {
    if (!isOpen) {
      textInputRef?.current?.blur();
    } else {
      setShowEmojiSelector(false);
    }
  }, [isOpen]);

  const onChangeMessageText = text => setMessageText(text);

  const onPressSmilingFace = () => {
    setShowEmojiSelector(!showEmojiSelector);
    textInputRef?.current?.blur();
  };

  const onSend = () => {
    let newMessage = {
      id: messages.length + 1,
      text: messageText,
      createdAt: new Date(),
      status: 'sent',
      user: {
        id: 1,
        name: 'Nancy Olive',
        avatar: Images.user,
      },
    };

    messages.unshift(newMessage);
    setMessageText('');
  };

  const renderListEmptyComponent = () => {
    return (
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: Metrics.ratio(16),
            fontFamily: Fonts.type.Nunito,
            color: Colors.Charade,
          }}>
          No record found.
        </Text>
      </View>
    );
  };

  const renderMessages = item => {
    return (
      <View
        style={{
          flexDirection: item.user.id === userInfo.id ? 'row-reverse' : 'row',
          marginVertical: Metrics.ratio(8),
        }}>
        <View
          style={{
            width: Metrics.ratio(32),
            height: Metrics.ratio(32),
            borderRadius: Metrics.ratio(16),
            overflow: 'hidden',
          }}>
          <Image
            source={
              item.user.id === userInfo.id
                ? item.user.avatar
                : {uri: item.user.avatar}
            }
            resizeMode={'cover'}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft:
              item.user.id === userInfo.id
                ? Metrics.ratio(0)
                : Metrics.ratio(8),
            marginRight:
              item.user.id === userInfo.id
                ? Metrics.ratio(8)
                : Metrics.ratio(0),
            backgroundColor:
              item.user.id === userInfo.id ? Colors.Alabaster : Colors.White,
            padding: Metrics.ratio(12),
            borderRadius: Metrics.ratio(12),
          }}>
          <Text
            style={{
              fontSize: Metrics.ratio(15),
              fontFamily: Fonts.type.Nunito,
              color: Colors.Charade,
            }}>
            {item.text}
          </Text>
          <View
            style={{
              marginTop: Metrics.ratio(8),
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: Metrics.ratio(10),
                fontFamily: Fonts.type.NunitoBold,
                color: Colors.Silver_Chalice,
              }}>
              9:45AM
            </Text>
            {item.user.id === userInfo.id && (
              <React.Fragment>
                {item.status === 'seen' && (
                  <Image
                    source={Images.tick_seen}
                    resizeMode={'contain'}
                    style={{
                      width: Metrics.ratio(18),
                      height: Metrics.ratio(18),
                      marginLeft: Metrics.ratio(8),
                    }}
                  />
                )}
                {item.status === 'delivered' && (
                  <Image
                    source={Images.tick_delivered}
                    resizeMode={'contain'}
                    style={{
                      width: Metrics.ratio(18),
                      height: Metrics.ratio(18),
                      marginLeft: Metrics.ratio(8),
                    }}
                  />
                )}
                {item.status === 'sent' && (
                  <Image
                    source={Images.tick_sent}
                    resizeMode={'contain'}
                    style={{
                      width: Metrics.ratio(14),
                      height: Metrics.ratio(14),
                      marginLeft: Metrics.ratio(8),
                    }}
                  />
                )}
              </React.Fragment>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor={Colors.White}
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

        <View style={{...styles.userInfoContainer}}>
          <View>
            <View style={{...styles.userImageContainer}}>
              <Image
                source={Images.user}
                resizeMode={'contain'}
                style={{...styles.userImage}}
              />
            </View>
            <View style={{...styles.userOnline}} />
          </View>
          <View style={{...styles.userNameContainer}}>
            <Text numberOfLines={1} style={{...styles.userName}}>
              Nancy Olive
            </Text>
            <Text style={{...styles.onlineText}}>Online</Text>
          </View>
        </View>

        <TouchableOpacity style={{...styles.rightBtn}}>
          <Image
            source={Images.more_following_and_followers}
            resizeMode={'contain'}
            style={{...styles.rightBtnImage}}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: Colors.White,
          width: '100%',
          height: Metrics.ratio(20),
          borderBottomLeftRadius: Metrics.ratio(10),
          borderBottomRightRadius: Metrics.ratio(10),
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <FlatList
            inverted={true}
            data={messages}
            contentContainerStyle={{
              paddingHorizontal: Metrics.ratio(12),
            }}
            ListEmptyComponent={renderListEmptyComponent}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => renderMessages(item)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            margin: Metrics.ratio(12),
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: Colors.White,
              borderRadius: Metrics.ratio(20),
              marginRight: Metrics.ratio(8),
              paddingRight: Metrics.ratio(8),
              alignItems: 'flex-end',
              overflow: 'hidden',
            }}>
            <TouchableOpacity
              onPress={onPressSmilingFace}
              style={{
                width: Metrics.ratio(40),
                height: Metrics.ratio(40),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: Metrics.ratio(20), height: Metrics.ratio(20)}}
                resizeMode="contain"
                source={Images.smiling_face}
              />
            </TouchableOpacity>
            <TextInput
              ref={textInputRef}
              value={messageText}
              onChangeText={onChangeMessageText}
              multiline={true}
              placeholder={'Type Message Here...'}
              onContentSizeChange={event =>
                setInputHeight(event.nativeEvent.contentSize.height)
              }
              placeholderTextColor={Colors.silver}
              style={{
                flex: 1,
                padding: 0,
                margin: 0,
                height: Math.max(Metrics.ratio(40), Metrics.ratio(inputHeight)),
                color: Colors.Charade,
                fontFamily: Fonts.type.Nunito,
                maxHeight: 120,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={onSend}
            style={{
              backgroundColor: Colors.White,
              width: Metrics.ratio(40),
              height: Metrics.ratio(40),
              borderRadius: Metrics.ratio(20),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: Metrics.ratio(20), height: Metrics.ratio(20)}}
              resizeMode="contain"
              source={Images.send}
            />
          </TouchableOpacity>
        </View>
      </View>

      {showEmojiSelector && (
        <EmojiSelector
          onEmojiSelected={emoji =>
            onChangeMessageText(`${messageText}${emoji}`)
          }
          showSearchBar={false}
          columns={8}
          showSectionTitles={false}
          showHistory={true}
          shouldInclude={emoji =>
            Platform.OS === 'android' && parseInt(emoji.added_in) === 0 && emoji
          }
        />
      )}
    </View>
  );
};

Messages.defaultProps = {};

Messages.propTypes = {};

export default Messages;
