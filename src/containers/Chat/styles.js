import {StyleSheet} from 'react-native';

import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  headerContainer: {
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
  headerText: {
    fontSize: Metrics.ratio(20),
    color: Colors.Charade,
    fontFamily: Fonts.type.NunitoBold,
    textTransform: 'capitalize',
  },
  freeSeparator: {
    width: Metrics.ratio(50),
    height: Metrics.screenHeight * 0.095,
  },
  unreadText: {
    fontSize: Metrics.ratio(12),
    color: Colors.Silver_Chalice,
    fontFamily: Fonts.type.NunitoBold,
    textTransform: 'capitalize',
    position: 'absolute',
    right: Metrics.ratio(14),
  },
  searchContainer: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Metrics.ratio(50),
    marginHorizontal: Metrics.ratio(14),
    paddingHorizontal: Metrics.ratio(10),
    overflow: 'hidden',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  searchImage: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  searchTextInput: {
    flex: 1,
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
    marginLeft: Metrics.ratio(8),
  },
  contentContainerStyle: {
    paddingTop: Metrics.ratio(8),
    paddingBottom: Metrics.ratio(75),
    paddingHorizontal: Metrics.ratio(14),
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Metrics.ratio(8),
  },
  userImageNameContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: Metrics.ratio(53),
    height: Metrics.ratio(53),
    borderRadius: Metrics.ratio(26.5),
  },
  userNameMessageContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: Metrics.ratio(8),
  },
  userNameText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Black,
    marginBottom: Metrics.ratio(4),
  },
  userMessageText: {
    fontSize: Metrics.ratio(12),
  },
  createdAtContainer: {
    alignItems: 'flex-end',
  },
  createdAtText: {
    fontSize: Metrics.ratio(11),
    fontFamily: Fonts.type.ArialBold,
    color: Colors.Silver_Chalice,
  },
  unreadIcon: {
    width: Metrics.ratio(10),
    height: Metrics.ratio(10),
    borderRadius: Metrics.ratio(5),
    backgroundColor: Colors.Web_Orange,
    marginTop: Metrics.ratio(8),
  },
});
