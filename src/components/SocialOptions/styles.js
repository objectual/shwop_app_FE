// @flow
import {StyleSheet} from 'react-native'; 
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  homeOptions: {
    backgroundColor: Colors.White,
    borderRadius: 40,
    height: Metrics.ratio(330),
    overflow: 'hidden',
    width: Metrics.ratio(70),
    position: 'absolute',
    right: 16,
    top: 130,
  },
  userImg: {
    borderRadius: 30,
    width: Metrics.ratio(70),
    height: Metrics.ratio(70),
  },
  follow: {
    backgroundColor: Colors.Razzmatazz,
    width: Metrics.ratio(22),
    height: Metrics.ratio(22),
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    bottom: -10,
    left: 24,
  },
  UserImageView: {
    width: Metrics.ratio(70),
    height: Metrics.ratio(70),
    marginBottom: 10,
  },
  optionImg: {
    height: Metrics.ratio(28),
    width: Metrics.ratio(28),
  },
  optionText: {
    fontFamily: Fonts.type.LatoBold,
    fontSize: Fonts.size.sixteen,
    marginTop: 5,
  },
  UserOptions: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
