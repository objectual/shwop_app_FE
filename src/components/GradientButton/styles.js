import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth * 0.4,
    alignSelf: 'center',
  },
  gradientContainer: {
    width: Metrics.screenWidth * 0.4,
    backgroundColor: Colors.Affair,
    borderRadius: Metrics.ratio(30),
    paddingVertical: Metrics.ratio(13),
    paddingHorizontal: Metrics.ratio(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(16),
    color: Colors.White,
  },
});
