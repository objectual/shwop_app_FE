import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  purpleBtn: {
    backgroundColor: Colors.Affair,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Metrics.ratio(12),
    borderRadius: Metrics.ratio(30),
    marginHorizontal: Metrics.ratio(16),
    marginVertical: Metrics.ratio(15),
  },
  BtnText: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(16),
    color: Colors.White,
  },
});
