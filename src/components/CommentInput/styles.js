import {StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../theme';

const {ratio} = Metrics;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContainer: {
    width: '78%',
    height: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: Metrics.ratio(50),
    margin: Metrics.ratio(10),
  },
  nestedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    color: Colors.silver,
    width: '75%',
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
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.ratio(30),
    alignSelf: 'center',
    marginTop: Metrics.ratio(14),
    marginRight: Metrics.ratio(10),
  },
  imageSend: {
    width: Metrics.screenHeight * 0.085,
    height: Metrics.screenHeight * 0.085,
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
    marginRight: Metrics.ratio(10),
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
