import {StyleSheet} from 'react-native';

import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  headerSeparator: {
    width: '100%',
    height: Metrics.ratio(60),
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  activeBtn: {
    backgroundColor: Colors.Affair,
    paddingHorizontal: Metrics.ratio(24),
    paddingVertical: Metrics.ratio(8),
    borderRadius: Metrics.ratio(50),
  },
  activeBtnText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoSemiBold,
    textTransform: 'capitalize',
    color: Colors.White,
  },
  inactiveBtn: {
    paddingHorizontal: Metrics.ratio(24),
    paddingVertical: Metrics.ratio(8),
    borderRadius: Metrics.ratio(50),
  },
  inactiveBtnText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoLight,
    textTransform: 'capitalize',
    color: Colors.Charade,
  },
  contentContainerStyle: {
    paddingTop: Metrics.ratio(8),
    paddingBottom: Metrics.ratio(80),
  },
});
