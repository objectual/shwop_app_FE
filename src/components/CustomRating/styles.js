import {StyleSheet} from 'react-native';

import {Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: Metrics.ratio(12),
  },
  starContainer: {
    marginHorizontal: Metrics.ratio(4),
  },
  star: {
    width: Metrics.ratio(23),
    height: Metrics.ratio(23),
  },
});
