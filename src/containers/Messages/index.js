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
import EmojiSelector from 'react-native-emoji-selector';

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
      <View style={{...styles.noRecordFoundContainer}}>
        <Text style={{...styles.noRecordFoundText}}>No record found.</Text>
      </View>
    );
  };

  const renderMessages = item => {
    return (
      <View
        style={{
          ...styles.messageContainer,
          flexDirection: item.user.id === userInfo.id ? 'row-reverse' : 'row',
        }}>
        <View style={{...styles.messageUserImageView}}>
          <Image
            source={
              item.user.id === userInfo.id
                ? item.user.avatar
                : {uri: item.user.avatar}
            }
            resizeMode={'cover'}
            style={{...styles.messageUserImage}}
          />
        </View>
        <View
          style={{
            ...styles.messageTextContainer,
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
          }}>
          <Text style={{...styles.messageText}}>{item.text}</Text>
          <View style={{...styles.timeContainer}}>
            <Text style={{...styles.timeText}}>9:45AM</Text>
            {item.user.id === userInfo.id && (
              <React.Fragment>
                {item.status === 'seen' && (
                  <Image
                    source={Images.tick_seen}
                    resizeMode={'contain'}
                    style={{...styles.seenImage}}
                  />
                )}
                {item.status === 'delivered' && (
                  <Image
                    source={Images.tick_delivered}
                    resizeMode={'contain'}
                    style={{...styles.deliveredImage}}
                  />
                )}
                {item.status === 'sent' && (
                  <Image
                    source={Images.tick_sent}
                    resizeMode={'contain'}
                    style={{...styles.sentImage}}
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

      <View style={{...styles.headerSeperator}} />

      <View style={{...styles.mainContentContainer}}>
        <View style={{...styles.chatContainer}}>
          <FlatList
            inverted={true}
            data={messages}
            contentContainerStyle={{...styles.contentContainerStyle}}
            ListEmptyComponent={renderListEmptyComponent}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => renderMessages(item)}
          />
        </View>

        <View style={{...styles.messageBoxContainer}}>
          <View style={{...styles.messageInputTextContainer}}>
            <TouchableOpacity
              onPress={onPressSmilingFace}
              style={{...styles.smilingFaceContainer}}>
              <Image
                style={{...styles.smilingFaceImage}}
                resizeMode="contain"
                source={Images.smiling_face}
              />
            </TouchableOpacity>
            <TextInput
              ref={textInputRef}
              value={messageText}
              multiline={true}
              placeholder={'Type Message Here...'}
              placeholderTextColor={Colors.silver}
              onChangeText={onChangeMessageText}
              onContentSizeChange={event =>
                setInputHeight(event.nativeEvent.contentSize.height)
              }
              style={{
                ...styles.messageTextInput,
                height: Math.max(Metrics.ratio(40), Metrics.ratio(inputHeight)),
              }}
            />
          </View>
          <TouchableOpacity onPress={onSend} style={{...styles.sendButton}}>
            <Image
              style={{...styles.sendButtonImage}}
              resizeMode="contain"
              source={Images.send}
            />
          </TouchableOpacity>
        </View>
      </View>

      {showEmojiSelector && (
        <EmojiSelector
          showSearchBar={false}
          columns={8}
          showSectionTitles={false}
          showHistory={true}
          shouldInclude={emoji =>
            Platform.OS === 'android' && parseInt(emoji.added_in) === 0 && emoji
          }
          onEmojiSelected={emoji =>
            onChangeMessageText(`${messageText}${emoji}`)
          }
        />
      )}
    </View>
  );
};

Messages.defaultProps = {};

Messages.propTypes = {};

export default Messages;
