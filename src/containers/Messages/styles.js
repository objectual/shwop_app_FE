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
});
