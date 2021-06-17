import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth * 0.32,
    height: Metrics.screenWidth * 0.32,
    borderRadius: Metrics.ratio(10),
    backgroundColor: Colors.Affair,
    margin: Metrics.ratio(12),
    padding: Metrics.ratio(12),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
    flex: 1,
  },
  cardLabel: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.White,
  },
});
