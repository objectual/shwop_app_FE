import {StyleSheet} from 'react-native';

import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  headerSeparator: {
    backgroundColor: Colors.White,
    width: '100%',
    height: Metrics.ratio(50),
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  button: {
    height: Metrics.ratio(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.White,
    marginTop: Metrics.ratio(16),
    marginHorizontal: Metrics.ratio(12),
    paddingHorizontal: Metrics.ratio(12),
    borderRadius: Metrics.ratio(10),
  },
  buttonText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
  },
  buttonImage: {
    width: Metrics.ratio(15),
    height: Metrics.ratio(15),
  },
  card: {
    backgroundColor: Colors.White,
    marginHorizontal: Metrics.ratio(12),
    padding: Metrics.ratio(12),
    borderRadius: Metrics.ratio(10),
    marginTop: Metrics.ratio(16),
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeadingRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeadingText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
    marginRight: Metrics.ratio(8),
  },
  cardHeadingImage: {
    width: Metrics.ratio(15),
    height: Metrics.ratio(15),
  },
  cardRightImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },
  logoutContainer: {
    marginTop: Metrics.ratio(24),
    marginBottom: Metrics.ratio(90),
    marginHorizontal: Metrics.ratio(12),
  },
  manageItem: {
    marginTop: Metrics.ratio(12),
  },
  manageItemLabel: {
    fontSize: Metrics.ratio(10),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Affair,
  },
  manageItemValue: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.ratio(16),
    alignItems: 'center',
  },
  userDetailContainer: {
    flexDirection: 'row',
  },
  userImage: {
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
    borderRadius: Metrics.ratio(20),
  },
  userNameContainer: {
    marginLeft: Metrics.ratio(8),
    justifyContent: 'space-between',
  },
  userFullName: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  userName: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  unblockBtn: {
    paddingHorizontal: Metrics.ratio(20),
    paddingVertical: Metrics.ratio(6),
    borderWidth: Metrics.ratio(1),
    borderColor: Colors.Affair,
    borderRadius: Metrics.ratio(50),
  },
  unblockBtnText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Affair,
  },

  logoutBtn: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: Metrics.ratio(12),
  },
  logoutBtnImage: {
    width: Metrics.ratio(28),
    height: Metrics.ratio(28),
  },
  logoutBtnText: {
    fontSize: Metrics.ratio(20),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Alizarin_Crimson,
    marginLeft: Metrics.ratio(8),
  },
});
