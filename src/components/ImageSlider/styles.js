import {StyleSheet} from 'react-native';

import {Metrics} from '../../theme';

export default StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: Metrics.ratio(12),
    alignSelf: 'center',
    zIndex: 1,
  },
  dot: {
    width: Metrics.ratio(8),
    height: Metrics.ratio(8),
    borderRadius: Metrics.ratio(4),
    marginHorizontal: Metrics.ratio(6),
  },
});
