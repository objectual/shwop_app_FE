import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: Metrics.ratio(16),
    backgroundColor: Colors.Concrete,
    height: Metrics.ratio(45),
    borderRadius: Metrics.ratio(20),
  },
  search_remove: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  searchInputContainer: {
    flex: 1,
    borderRadius: Metrics.ratio(20),
  },
  searchInput: {
    paddingHorizontal: Metrics.ratio(15),
    color: Colors.Charade,
  },
  remove_Search: {
    marginTop: Metrics.ratio(10),
    marginRight: Metrics.ratio(15),
    marginLeft: Metrics.ratio(5),
  },
});

export default styles;
