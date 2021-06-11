import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: Metrics.ratio(18),
    fontWeight: 'bold',
    color: Colors.black,
  },
  headerSeparator: {
    backgroundColor: Colors.White,
    width: '100%',
    height: Metrics.ratio(70),
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  contentScrollView: {
    marginTop: Metrics.ratio(-55),
    marginBottom: Metrics.ratio(55),
  },
  ProfileImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtnImage: {
    width: Metrics.ratio(100),
    height: Metrics.ratio(100),
    flex: 1,
  },
  profileCodeArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCodeTxt: {
    fontFamily: Fonts.type.NunitoSemiBold,
    fontSize: Metrics.ratio(15),
  },
  followArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Metrics.ratio(40),
    marginVertical: Metrics.ratio(10),
  },
  followNumber: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(15),
    color: Colors.Affair,
  },
  followTxt: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(12),
    color: Colors.Charade,
  },
  followWhiteArea: {
    borderRadius: Metrics.ratio(40),
    width: Metrics.ratio(70),
    height: Metrics.ratio(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    backgroundColor: Colors.White,
  },
  uploadBtn: {
    flexDirection: 'row',
  },
  purpleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.ratio(16),
    paddingVertical: Metrics.ratio(10),
    borderRadius: Metrics.ratio(30),
    backgroundColor: Colors.Charade,
  },
  BtnText: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(12),
    color: Colors.White,
    marginLeft: Metrics.ratio(5),
  },
  transparentBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.ratio(30),
    paddingVertical: Metrics.ratio(10),
    borderRadius: Metrics.ratio(30),
    backgroundColor: Colors.Affair,
  },
  transparentBtnText: {
    fontFamily: Fonts.type.LatoBold,
    fontSize: Metrics.ratio(12),
    color: Colors.White,
  },
  centerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Metrics.ratio(16),
  },
  uploadContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoImg: {
    width: Metrics.ratio(10),
    height: Metrics.ratio(10),
  },
  videoMainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: Metrics.ratio(20),
    marginHorizontal: Metrics.ratio(16),
  },
  bannerView: {
    width: Metrics.screenWidth * 0.29,
    height: Metrics.screenWidth * 0.35,
    borderRadius: Metrics.ratio(13),
    overflow: 'hidden',
    marginTop: Metrics.ratio(-1),
    marginBottom: Metrics.ratio(6),
    marginHorizontal: Metrics.screenWidth * 0.006,
    justifyContent: 'center',
  },
  followImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  likeContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: Metrics.ratio(8),
    bottom: Metrics.ratio(5),
  },
  viewContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: Metrics.ratio(8),
    top: Metrics.ratio(5),
  },
  viewTxt: {
    fontFamily: Fonts.type.LatoRegular,
    fontSize: Metrics.ratio(8),
    color: Colors.White,
    marginLeft: Metrics.ratio(3),
  },
  viewImg: {
    width: Metrics.ratio(10),
    height: Metrics.ratio(10),
  },
});
