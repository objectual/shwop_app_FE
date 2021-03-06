import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  imageView: {
    paddingHorizontal: Metrics.ratio(15),
    paddingBottom: Metrics.ratio(16),
    backgroundColor: Colors.White,
    marginHorizontal: Metrics.ratio(16),
    borderRadius: Metrics.ratio(10),
    marginTop: Metrics.ratio(90),
  },
  buyBtn: {
    backgroundColor: Colors.Affair,
    borderRadius: Metrics.ratio(20),
    paddingVertical: Metrics.ratio(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.ratio(16),
    width: Metrics.ratio(140),
    flexDirection: 'row',
  },
  uploadBtn: {
    backgroundColor: Colors.Affair,
    borderRadius: Metrics.ratio(20),
    padding: Metrics.ratio(10),
    paddingLeft: Metrics.ratio(15),
    paddingRight: Metrics.ratio(15),
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.ratio(140),
    flexDirection: 'row',
    marginTop: Metrics.ratio(16),
  },
  ImageUserView: {
    alignItems: 'center',
    backgroundColor: Colors.White,
    justifyContent: 'center',
    borderRadius: Metrics.screenHeight * 0.22,
    height: Metrics.screenHeight * 0.22,
    width: Metrics.screenHeight * 0.22,
    borderWidth: Metrics.ratio(1),
    borderColor: Colors.Mercury,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageDefault: {
    height: Metrics.screenHeight * 0.1,
    width: Metrics.screenHeight * 0.1,
  },
  BuyBtnText: {
    color: Colors.White,
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(12),
    marginLeft: Metrics.ratio(10),
  },
  upload: {
    height: Metrics.ratio(15),
    width: Metrics.ratio(15),
  },
  uploadArea: {
    alignItems: 'center',
    marginBottom: Metrics.ratio(15),
    marginTop: Metrics.ratio(-73),
  },
  titleTextInput: {
    backgroundColor: Colors.White,
    textAlignVertical: 'top',
    borderRadius: Metrics.ratio(16),
    padding: Metrics.ratio(20),
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.NunitoLight,
    color: Colors.Black,
    borderColor: Colors.Mercury,
    borderWidth: Metrics.ratio(1),
    paddingHorizontal: Metrics.ratio(20),
  },
  titleCount: {
    fontSize: Metrics.ratio(10),
    color: Colors.Charade,
    fontFamily: Fonts.type.Nunito,
    marginTop: Metrics.ratio(6),
    textAlign: 'right',
    marginRight: Metrics.ratio(20),
  },
  facebookIcon: {
    height: Metrics.ratio(15),
    width: Metrics.ratio(15),
  },
  fbTxt: {
    fontSize: Metrics.ratio(12),
    color: Colors.Charade,
    fontFamily: Fonts.type.Nunito,
    marginHorizontal: Metrics.ratio(10),
  },
  socialLinkArea: {
    flexDirection: 'row',
    marginTop: Metrics.ratio(5),
    marginBottom: Metrics.ratio(15),
  },
  purpleBtn: {
    backgroundColor: Colors.Affair,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Metrics.ratio(12),
    borderRadius: Metrics.ratio(30),
    width: Metrics.ratio(90),
    position: 'absolute',
    right: 0,
  },
  BtnText: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(16),
    color: Colors.White,
  },
  tagArea: {
    borderColor: Colors.Mercury,
    borderWidth: 1,
    borderRadius: Metrics.ratio(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.ratio(15),
    marginBottom: Metrics.ratio(15),
    borderRightWidth: 0,
  },
  inputTag: {
    width: Metrics.screenWidth * 0.58,
    height: Metrics.ratio(40),
    borderTopLeftRadius: Metrics.ratio(30),
    borderBottomLeftRadius: Metrics.ratio(30),
    paddingHorizontal: Metrics.ratio(15),
  },
  errormsg: {
    color: 'red',
    fontSize: Fonts.size.fourteen,
    fontFamily: Fonts.type.Nunito,
    marginHorizontal: Metrics.ratio(15),
  },
  labelTopText: {
    position: 'absolute',
    color: Colors.Affair,
    top: Metrics.ratio(4),
    left: Metrics.ratio(20),
    fontSize: Metrics.ratio(10),
    zIndex: Metrics.ratio(2),
  },
});
