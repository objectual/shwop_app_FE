import {StyleSheet} from 'react-native';

import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.White,
    marginTop: Metrics.ratio(24),
    height: Metrics.screenHeight * 0.095,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftBtn: {
    width: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftBtnImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },
  userInfoContainer: {
    width: Metrics.screenWidth - 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImageContainer: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
    borderRadius: Metrics.ratio(25),
    overflow: 'hidden',
  },
  userImage: {
    width: '100%',
    height: '100%',
  },
  userOnline: {
    width: Metrics.ratio(12),
    height: Metrics.ratio(12),
    borderRadius: Metrics.ratio(6),
    backgroundColor: Colors.Harlequin,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  userNameContainer: {
    marginLeft: Metrics.ratio(8),
  },
  userName: {
    fontSize: Metrics.ratio(22),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  onlineText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Harlequin,
  },
  rightBtn: {
    width: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBtnImage: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  headerSeperator: {
    backgroundColor: Colors.White,
    width: '100%',
    height: Metrics.ratio(20),
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  mainContentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  chatContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: Metrics.ratio(12),
  },
  noRecordFoundContainer: {
    flex: 1,
  },
  noRecordFoundText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  messageContainer: {
    marginVertical: Metrics.ratio(8),
  },
  messageUserImageView: {
    width: Metrics.ratio(32),
    height: Metrics.ratio(32),
    borderRadius: Metrics.ratio(16),
    overflow: 'hidden',
  },
  messageUserImage: {
    width: '100%',
    height: '100%',
  },
  messageTextContainer: {
    flex: 1,
    padding: Metrics.ratio(12),
    borderRadius: Metrics.ratio(12),
  },
  messageText: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  timeContainer: {
    marginTop: Metrics.ratio(8),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  timeText: {
    fontSize: Metrics.ratio(10),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Silver_Chalice,
  },
  seenImage: {
    width: Metrics.ratio(18),
    height: Metrics.ratio(18),
    marginLeft: Metrics.ratio(8),
  },
  deliveredImage: {
    width: Metrics.ratio(18),
    height: Metrics.ratio(18),
    marginLeft: Metrics.ratio(8),
  },
  sentImage: {
    width: Metrics.ratio(14),
    height: Metrics.ratio(14),
    marginLeft: Metrics.ratio(8),
  },
  messageBoxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: Metrics.ratio(12),
  },
  messageInputTextContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.White,
    borderRadius: Metrics.ratio(20),
    marginRight: Metrics.ratio(8),
    paddingRight: Metrics.ratio(8),
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
  smilingFaceContainer: {
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  smilingFaceImage: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  messageTextInput: {
    flex: 1,
    padding: 0,
    margin: 0,
    color: Colors.Charade,
    fontFamily: Fonts.type.Nunito,
    maxHeight: 120,
  },
  sendButton: {
    backgroundColor: Colors.White,
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
    borderRadius: Metrics.ratio(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonImage: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
});
