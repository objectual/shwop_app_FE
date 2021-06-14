import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  verification_bg: {
    width: '100%',
    height: Metrics.ratio(190),
  },
  imageView: {
    paddingHorizontal: Metrics.ratio(25),
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
  loginBtn: {
    backgroundColor: Colors.Affair,
    borderRadius: Metrics.ratio(30),
    padding: Metrics.ratio(10),
    paddingLeft: Metrics.ratio(15),
    paddingRight: Metrics.ratio(15),
    height: Metrics.ratio(45),
    marginTop: Metrics.ratio(70),
    marginBottom: Metrics.ratio(30),
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.ratio(164),
  },
  loginBtnTxt: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(15),
    color: Colors.White,
  },
  verificationView: {alignItems: 'center'},
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  otpView: {marginTop: Metrics.ratio(20)},
  gradientButtonContainer: {
    marginTop: Metrics.ratio(50),
    marginBottom: Metrics.ratio(0),
  },
  cellViewStyle: {
    borderWidth: 1,
    borderRadius: 24,
    borderColor: Colors.Mercury,
    backgroundColor: Colors.White,
    marginLeft: Metrics.ratio(7),
    marginRight: Metrics.ratio(7),
  },
  cellViewFocused: {
    borderColor: Colors.Affair,
  },
  txtStyle: {
    fontSize: Metrics.ratio(24),
    color: Colors.Mercury,
    fontFamily: Fonts.type.Nunito,
  },
});
