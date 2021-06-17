import {StyleSheet, Platform} from 'react-native';
import {StatusBar} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  MainContainer: {
    paddingHorizontal: Metrics.ratio(14),
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: Metrics.ratio(8),
    marginBottom: Metrics.ratio(70),
    justifyContent: 'space-between',
  },
  headerMain: {
    marginTop: Metrics.ratio(24),
    height: Metrics.screenHeight * 0.099,
    flexDirection: 'row',
  },
  TouchableMenu: {
    width: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  centerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  tapView: {
    backgroundColor: Colors.White,
    borderRadius: Metrics.ratio(10),
    padding: Metrics.ratio(8),
    position: 'absolute',
    bottom: Metrics.ratio(95),
    alignSelf: 'center',
    paddingBottom: Metrics.ratio(20),
    width: Metrics.screenWidth * 0.5,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  tapTxt: {
    fontFamily: Fonts.type.NunitoSemiBold,
    fontSize: Metrics.ratio(14),
    color: Colors.Affair,
  },
  firstTxt: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(12),
    color: Colors.Charade,
    marginRight: Metrics.ratio(10),
  },
  recordImg: {
    position: 'absolute',
    bottom: 0,
    right: Metrics.ratio(5),
    width: Metrics.ratio(80),
    height: Metrics.ratio(50),
  },
  polyginWhite: {
    position: 'absolute',
    bottom: -7,
    alignSelf: 'center',
    width: Metrics.ratio(10),
    height: Metrics.ratio(10),
  },
  purpleBtn: {
    backgroundColor: Colors.Affair,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.ratio(20),
    paddingVertical: Metrics.ratio(5),
    borderRadius: Metrics.ratio(30),
    marginHorizontal: Metrics.ratio(6),
    marginVertical: Metrics.ratio(15),
  },
  BtnText: {
    fontFamily: Fonts.type.NunitoSemiBoldBold,
    fontSize: Metrics.ratio(14),
    color: Colors.White,
  },
  transparentBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.ratio(12),
    borderRadius: Metrics.ratio(30),
    marginHorizontal: Metrics.ratio(6),
    marginVertical: Metrics.ratio(15),
  },
  transparentBtnText: {
    fontFamily: Fonts.type.NunitoSemiBoldBold,
    fontSize: Metrics.ratio(14),
    color: Colors.Charade,
  },
  menu: {
    borderRadius: Metrics.ratio(8),
    top: 50,
  },
  menuContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    marginRight: Metrics.ratio(17),
  },
  menuItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Platform.OS === 'ios' ? Metrics.ratio(8) : Metrics.ratio(0),
  },
  menuItemText: {
    color: '#454F63',
    fontFamily: Fonts.type.MontserratMedium,
    fontSize: Metrics.ratio(13),
    marginLeft: Metrics.ratio(8),
  },
});
