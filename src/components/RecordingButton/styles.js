import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: Metrics.ratio(16),
    color: Colors.White,
    fontFamily: Fonts.type.Nunito,
    marginBottom: Metrics.ratio(8),
  },
  outerCircle: {
    height: Metrics.ratio(78),
    width: Metrics.ratio(78),
    borderRadius: Metrics.ratio(39),
    borderWidth: Metrics.ratio(8),
    borderColor: 'rgba(138, 73, 161, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: Metrics.ratio(58),
    height: Metrics.ratio(58),
    borderRadius: Metrics.ratio(29),
    backgroundColor: Colors.Affair,
  },
});
