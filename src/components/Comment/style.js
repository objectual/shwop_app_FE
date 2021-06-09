import {StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../theme';
const {screenHeight, screenWidth} = Metrics;
const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: Metrics.ratio(20),
    flexDirection: 'row',
  },
  profileView: {
    width: screenWidth * 0.118,
    height: screenHeight * 0.07,
    borderRadius: Metrics.ratio(20),
  },
  profileImgStyle: {
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
    borderRadius: Metrics.ratio(30),
    alignSelf: 'center',
  },
  nameConatiner: {
    width: screenWidth * 0.5,
  },
  locationView: {
    padding: Metrics.ratio(8),
    flex: 1,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: Metrics.ratio(10),
    marginLeft: Metrics.ratio(10),
  },
  timeView: {
    height: screenHeight * 0.03,
    alignItems: 'flex-end',
    marginHorizontal: Metrics.ratio(10),
    marginTop: Metrics.ratio(10),
  },

  timetxt: {
    color: Colors.Silver_Chalice,
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(10),
  },
  descTxt: {
    color: Colors.Charade,
    fontFamily: Fonts.type.Nunito,
  },
});

export default styles;
