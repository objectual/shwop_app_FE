// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

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
});
