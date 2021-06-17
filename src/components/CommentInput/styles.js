import {StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../theme';

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Metrics.ratio(70),
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: Metrics.ratio(50),
  },
  nestedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    color: Colors.silver,
    width: '75%',
    height: Metrics.ratio(50),
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.NunitoItalic,
  },
  iconContainer: {
    width: '20%',
    height: Metrics.ratio(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
    backgroundColor: Colors.White,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.ratio(30),
    marginLeft: Metrics.ratio(8),
    overflow: 'hidden',
  },
  imageSend: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
    alignSelf: 'center',
  },
  smileImg: {
    width: Metrics.screenHeight * 0.04,
    height: Metrics.screenHeight * 0.04,
  },
  sendIcon: {
    color: Colors.White,
    fontSize: Metrics.ratio(20),
    alignSelf: 'center',
    justifyContent: 'center',
    paddingRight: Metrics.ratio(6),
  },
  smileView: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(50),
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: Metrics.ratio(5),
    borderRadius: Metrics.ratio(30),
  },
  smileIcon: {
    color: Colors.Black,
    fontSize: Metrics.ratio(20),
    alignSelf: 'center',
    justifyContent: 'center',
    paddingRight: Metrics.ratio(6),
  },
});

export default styles;
