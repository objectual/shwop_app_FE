import {StyleSheet} from 'react-native';

import {Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: Metrics.ratio(47),
    right: 0,
    left: 0,
    zIndex: -1,
  },
  videoPlayer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  controlsContainer: {
    height: Metrics.ratio(50),
    left: 0,
    right: 0,
    bottom: Metrics.ratio(32),
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: Metrics.ratio(8),
    marginHorizontal: Metrics.ratio(16),
  },
});
