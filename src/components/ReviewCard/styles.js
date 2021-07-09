import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    marginHorizontal: Metrics.ratio(14),
    marginBottom: Metrics.ratio(14),
    borderRadius: Metrics.ratio(12),
    padding: Metrics.ratio(12),
  },
  profileSec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    borderRadius: Metrics.ratio(15),
  },
  profileName: {
    fontSize: Metrics.ratio(13),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
    marginLeft: Metrics.ratio(6),
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingImage: {
    width: Metrics.ratio(14),
    height: Metrics.ratio(14),
  },
  ratingText: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
    marginLeft: Metrics.ratio(4),
  },
  reviewText: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
    marginTop: Metrics.ratio(4),
  },
  videoContainer: {
    height: Metrics.screenHeight * 0.25,
    marginTop: Metrics.ratio(4),
    borderRadius: Metrics.ratio(12),
    overflow: 'hidden',
    backgroundColor: Colors.Concrete,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoStyle: {
    width: '100%',
    height: '100%',
  },
  playAndPausedBtn: {
    position: 'absolute',
    zIndex: 999,
  },
  activityIndicator: {
    position: 'absolute',
    zIndex: 999,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.ratio(4),
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeImage: {
    width: Metrics.ratio(9),
    height: Metrics.ratio(9),
  },
  timeText: {
    fontSize: Metrics.ratio(9),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Silver_Chalice,
    marginLeft: Metrics.ratio(4),
  },
  reviewType: {
    fontSize: Metrics.ratio(9),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
    marginLeft: Metrics.ratio(8),
  },
  commentContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: Metrics.ratio(24),
    marginTop: Metrics.ratio(12),
  },
  commentDetailContainer: {
    flex: 1,
    marginLeft: Metrics.ratio(8),
  },
  commentUserName: {
    fontSize: Metrics.ratio(10),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
  },
  commentText: {
    fontSize: Metrics.ratio(10),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
    marginTop: Metrics.ratio(4),
  },
});
