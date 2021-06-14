// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
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
    paddingHorizontal: Metrics.ratio(16),
    borderTopLeftRadius: Metrics.ratio(10),
    borderTopRightRadius: Metrics.ratio(10),
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
    marginLeft: Metrics.ratio(20),
    marginRight: Metrics.ratio(20),
    marginTop: Metrics.ratio(20),
    alignItems: 'center',
  },
  socialView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  socialImg: {
    width: Metrics.screenHeight * 0.07,
    height: Metrics.screenHeight * 0.07,
    marginLeft: Metrics.ratio(14),
    marginRight: Metrics.ratio(14),
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
  gradientButtonContainer: {
    marginTop: Metrics.ratio(20),
    marginBottom: Metrics.ratio(0),
  },
  headerComponentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(16),
    color: Colors.Charade,
  },
  closeBtn: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
    backgroundColor: Colors.Concrete,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(15),
    position: 'absolute',
    top: Metrics.ratio(-8),
    right: Metrics.ratio(12),
    zIndex: 1,
  },
});
