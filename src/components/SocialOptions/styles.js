// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  homeOptions: {
    backgroundColor: Colors.White,
    borderRadius: 40,
    height: Metrics.screenHeight * 0.42,
    overflow: 'hidden',
    width: Metrics.screenHeight * 0.09,
    position: 'absolute',
    right: Metrics.ratio(16),
    bottom: Metrics.ratio(232),
  },
  userImgView: {
    borderRadius: Metrics.screenHeight * 0.045,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  userImg: {
    width: '100%',
    height: '100%',
  },
  follow: {
    backgroundColor: Colors.Razzmatazz,
    width: Metrics.screenHeight * 0.03,
    height: Metrics.screenHeight * 0.03,
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    bottom: Metrics.ratio(-8),
    left: Metrics.ratio(18),
  },
  UserImageView: {
    width: Metrics.screenHeight * 0.09,
    height: Metrics.screenHeight * 0.09,
    marginBottom: 10,
  },
  optionImg: {
    height: Metrics.screenHeight * 0.033,
    width: Metrics.screenHeight * 0.033,
  },
  optionText: {
    fontFamily: Fonts.type.LatoBold,
    fontSize: Metrics.ratio(12),
    marginTop: 5,
  },
  UserOptions: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
