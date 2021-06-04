import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  imageView: {
    paddingHorizontal: Metrics.ratio(15),
    backgroundColor: Colors.White,
    marginHorizontal: Metrics.ratio(16),
    marginTop: Metrics.ratio(30),
    borderRadius: Metrics.ratio(10),
  },
});
