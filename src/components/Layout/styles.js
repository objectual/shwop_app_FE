// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Concrete,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: Metrics.ratio(55),
    backgroundColor: Colors.White,
  },
  tabBarBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarImage: {
    width: Metrics.ratio(22),
    height: Metrics.ratio(22),
  },
  uploadBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
  },
  uploadBtnView: {
    width: Metrics.ratio(70),
    height: Metrics.ratio(70),
    borderRadius: Metrics.ratio(35),
    backgroundColor: Colors.Affair,
    borderColor: Colors.Concrete,
    borderWidth: Metrics.ratio(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtnImage: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },
  loginTxt: {
    color: Colors.Black,
    backgroundColor: Colors.Razzmatazz,
  },
  loginArea: {
    marginLeft: Metrics.ratio(40),
    marginRight: Metrics.ratio(40),
    marginTop: Metrics.ratio(20),
    alignItems: 'center',
  },
  verificationTxt: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(9),
    marginTop: Metrics.ratio(5),
  },
  loginBtn: {
    backgroundColor: Colors.Affair,
    borderRadius: Metrics.ratio(30),
    padding: Metrics.ratio(10),
    paddingLeft: Metrics.ratio(15),
    paddingRight: Metrics.ratio(15),
    height: Metrics.ratio(45),
    marginTop: Metrics.ratio(20),
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.ratio(164),
  },
  loginBtnTxt: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(15),
    color: Colors.White,
  },
  socialView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  socialImg: {
    width: Metrics.screenHeight * 0.07,
    height: Metrics.screenHeight * 0.07,
    marginLeft: Metrics.ratio(8),
    marginRight: Metrics.ratio(8),
  },
  RegisterTag: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: Metrics.ratio(20),
  },

  RegisterHere: {
    fontSize: Metrics.ratio(15),
    marginTop: Metrics.ratio(40),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },

  RegisterHereLink: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Affair,
    marginBottom: Metrics.ratio(10),
  },
  Orarea: {
    alignItems: 'center',
    marginTop: Metrics.ratio(30),
    marginBottom: Metrics.ratio(30),
  },
  line: {
    backgroundColor: Colors.silver,
    height: Metrics.ratio(1),
    width: Metrics.screenWidth * 0.8,
  },
  orText: {
    position: 'absolute',
    backgroundColor: Colors.White,
    top: -10,
    paddingLeft: Metrics.ratio(8),
    paddingRight: Metrics.ratio(8),
    color: Colors.silver,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
