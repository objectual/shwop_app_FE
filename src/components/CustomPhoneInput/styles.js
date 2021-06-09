import {StyleSheet} from 'react-native';
import {Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  countryInput: {
    // backgroundColor: 'orange',
  },
  polygon: {
    width: 5,
    height: 5,
    position: 'absolute',
    right: 5,
  },
  verificationTxt: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(9),
    marginTop: Metrics.ratio(5),
    marginBottom: Metrics.ratio(10),
  },
});
