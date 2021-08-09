import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  headerSeparator: {
    backgroundColor: Colors.White,
    width: '100%',
    height: Metrics.ratio(60),
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  productContainer: {
    marginHorizontal: Metrics.ratio(16),
    marginTop: Metrics.ratio(5),
  },
  ratingContainer: {
    marginTop: Metrics.ratio(24),
    marginBottom: Metrics.ratio(8),
    marginHorizontal: Metrics.ratio(16),
  },
  ratingLine: {
    width: '100%',
    height: Metrics.ratio(1),
    backgroundColor: Colors.silver,
  },
  ratingText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.silver,
    backgroundColor: Colors.Concrete,
    marginTop: Metrics.ratio(-9),
    paddingHorizontal: Metrics.ratio(8),
    alignSelf: 'center',
  },
  customRatingContainer: {
    alignSelf: 'center',
  },
  notNowBtn: {
    alignSelf: 'center',
  },
  notNowBtnText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Affair,
  },
  addProductBtn: {
    backgroundColor: Colors.Affair,
    width: Metrics.ratio(60),
    height: Metrics.ratio(60),
    borderRadius: Metrics.ratio(30),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: Metrics.ratio(66),
    right: Metrics.ratio(25),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  addProductImage: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Metrics.ratio(16),
  },
  notFoundText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
    textAlign: 'center',
  },
});
