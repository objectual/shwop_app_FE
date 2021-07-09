import {StyleSheet} from 'react-native';

import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth - 32,
    height: Metrics.screenHeight * 0.3,
    borderRadius: Metrics.ratio(8),
    overflow: 'hidden',
  },
  activityIndicator: {
    position: 'absolute',
    zIndex: 2,
  },
  closeBtn: {
    position: 'absolute',
    zIndex: 2,
    top: Metrics.ratio(8),
    right: Metrics.ratio(8),
  },
  videoContainer: {
    width: '100%',
    height: '100%',
  },
});
