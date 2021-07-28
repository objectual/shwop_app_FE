import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  verification_bg: {
    width: '100%',
    height: Metrics.ratio(190),
  },
  imageView: {
    paddingHorizontal: Metrics.ratio(16),
    backgroundColor: Colors.White,
    marginHorizontal: Metrics.ratio(16),
    marginTop: Metrics.ratio(30),
    borderRadius: Metrics.ratio(10),
  },
  verificationTitle: {
    marginTop: Metrics.ratio(20),
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(20),
  },
  verificationText: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(10),
  },
  verificationView: {
    alignItems: 'center',
  },
  otpView: {
    marginTop: Metrics.ratio(20),
  },
  gradientButtonContainer: {
    marginTop: Metrics.ratio(50),
    marginBottom: Metrics.ratio(0),
  },
  cellViewStyle: {
    borderWidth: 1,
    borderRadius: 24,
    borderColor: Colors.Mercury,
    backgroundColor: Colors.White,
    marginLeft: Metrics.ratio(3),
    marginRight: Metrics.ratio(3),
  },
  cellViewFocused: {
    borderColor: Colors.Affair,
  },
  txtStyle: {
    fontSize: Metrics.ratio(16),
    color: Colors.Mercury,
    fontFamily: Fonts.type.Nunito,
  },
  codeErrorText: {
    marginTop: Metrics.ratio(8),
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(14),
    color: 'red',
  },
});
