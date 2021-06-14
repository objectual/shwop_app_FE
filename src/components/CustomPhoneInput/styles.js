import {StyleSheet} from 'react-native';
import {Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  polygon: {
    width: Metrics.ratio(5),
    height: Metrics.ratio(5),
    position: 'absolute',
    right: Metrics.ratio(5),
  },
  verificationTxt: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(9),
    marginTop: Metrics.ratio(5),
    marginBottom: Metrics.ratio(10),
  },
  countryInput: {},
});
