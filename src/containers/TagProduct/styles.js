import {meta} from 'eslint/lib/rules/*';
import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  headerSeparator: {
    backgroundColor: Colors.White,
    width: '100%',
    height: Metrics.ratio(60),
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  productContainer: {
    marginHorizontal: Metrics.ratio(16),
    marginTop: Metrics.ratio(5),
  },
});
