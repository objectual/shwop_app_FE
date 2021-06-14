import {StyleSheet} from 'react-native';

import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderRadius: Metrics.ratio(10),
    width: Metrics.screenWidth * 0.93,
    padding: Metrics.ratio(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Metrics.ratio(130),
    height: Metrics.ratio(130),
  },
  heading: {
    fontSize: Metrics.ratio(18),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
    marginVertical: Metrics.ratio(8),
    textAlign: 'center',
  },
  highlightedHeading: {
    color: Colors.Affair,
  },
  description: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
    textAlign: 'center',
    marginBottom: Metrics.ratio(20),
  },
  btnContainerStyle: {
    width: Metrics.screenWidth * 0.35,
  },
  btnGradientContainer: {
    width: Metrics.screenWidth * 0.35,
    paddingVertical: Metrics.ratio(10),
  },
  btnLabelStyle: {
    fontSize: Metrics.ratio(14),
  },
});
