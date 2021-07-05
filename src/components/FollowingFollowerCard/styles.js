// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginVertical: Metrics.ratio(8),
    marginHorizontal: Metrics.ratio(12),
    justifyContent: 'space-between',
  },
  cardContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userImage: {
    width: Metrics.ratio(55),
    height: Metrics.ratio(55),
    borderRadius: Metrics.ratio(27.5),
  },
  infoContainer: {
    marginLeft: Metrics.ratio(6),
  },
  nameText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  userNameText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  cardButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardFollowBackBtn: {
    width: Metrics.ratio(85),
    height: Metrics.ratio(25),
    borderColor: Colors.Charade,
    borderWidth: Metrics.ratio(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(42.5),
  },
  cardFollowBackBtnText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  cardFollowBtn: {
    width: Metrics.ratio(85),
    height: Metrics.ratio(25),
    backgroundColor: Colors.Affair,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(42.5),
  },
  cardFollowBtnText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.White,
  },
  cardFriendsBtn: {
    width: Metrics.ratio(85),
    height: Metrics.ratio(25),
    borderColor: Colors.Affair,
    borderWidth: Metrics.ratio(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(42.5),
  },
  cardFriendsBtnText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Affair,
  },
  moreOptionBtn: {
    marginLeft: Metrics.ratio(8),
  },
  moreOptionBtnImage: {
    width: Metrics.ratio(15),
    height: Metrics.ratio(15),
  },
});
