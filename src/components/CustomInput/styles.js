import {StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  InputView: {
    paddingHorizontal: Metrics.ratio(15),
    borderRadius: Metrics.ratio(30),
    height: Metrics.ratio(50),
    borderColor: Colors.Mercury,
    borderWidth: 0.5,
    fontFamily: Fonts.type.Nunito,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  InputFloatView: {
    paddingHorizontal: Metrics.ratio(15),
    borderRadius: Metrics.ratio(30),
    height: Metrics.ratio(50),
    borderColor: Colors.Mercury,
    borderWidth: 0.5,
    fontFamily: Fonts.type.Nunito,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 10,
  },

  labelTopText: {
    position: 'absolute',
    color: Colors.Affair,
    top: 8,
    left: 20,
    fontSize: 10,
  },
  textInputStyle: {
    flex: 0.95,
    fontFamily: Fonts.type.Nunito,
    color: '#3B3B3B',
    fontSize: Fonts.size.thirteen,
  },
  inputIcon: {
    width: Metrics.ratio(40),
  },
  errormsg: {
    color: 'red',
    fontSize: Fonts.size.fourteen,
    fontFamily: Fonts.type.Nunito,
    marginHorizontal: Metrics.ratio(15),
  },
  rightIcon: {
    width: Metrics.ratio(20),
    marginRight: Metrics.ratio(10),
  },
});
