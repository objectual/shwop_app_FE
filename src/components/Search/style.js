import {StyleSheet} from 'react-native';

import {Metrics, Colors} from '../../theme';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: Metrics.ratio(16),
    backgroundColor: Colors.Concrete,
    height: Metrics.ratio(45),
    borderRadius: Metrics.ratio(50),
    overflow: 'hidden',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: Metrics.ratio(16),
    color: Colors.Charade,
    paddingLeft: Metrics.ratio(16),
  },
  closeIcon: {
    width: Metrics.ratio(24),
    height: Metrics.ratio(24),
    marginRight: Metrics.ratio(12),
  },
  searchIcon: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
    marginRight: Metrics.ratio(14),
  },
});

export default styles;
