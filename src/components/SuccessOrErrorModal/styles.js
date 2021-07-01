// @flow
import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    alignItems: 'center',
    width: Metrics.screenWidth * 0.85,
    borderRadius: Metrics.ratio(8),
    paddingHorizontal: Metrics.ratio(16),
    paddingVertical: Metrics.ratio(24),
  },
  icon: {
    marginBottom: Metrics.ratio(4)
  },
  heading: {
    color: Colors.Charade,
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoBold,
    textAlign: 'center',
    marginVertical: Metrics.ratio(4),
  },
  message: {
    color: Colors.Charade,
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.Nunito,
    textAlign: 'center',
    marginVertical: Metrics.ratio(4),
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: Metrics.ratio(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: Colors.Affair,
    paddingHorizontal: Metrics.ratio(20),
    paddingVertical: Metrics.ratio(3),
    borderRadius: Metrics.ratio(32),
  },
  cancelButton: {
    backgroundColor: Colors.Silver_Chalice,
    paddingHorizontal: Metrics.ratio(20),
    paddingVertical: Metrics.ratio(3),
    borderRadius: Metrics.ratio(32),
    marginHorizontal: Metrics.ratio(8),
  },
  buttonText: {
    color: Colors.White,
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    textAlign: 'center',
    marginVertical: Metrics.ratio(4),
  }
});
