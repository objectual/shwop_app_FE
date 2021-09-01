import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  dotStyle: {
    width: Metrics.ratio(8),
    height: Metrics.ratio(8),
    borderRadius: Metrics.ratio(4),
  },
  detailContainer: {
    marginHorizontal: Metrics.ratio(16),
  },
  productNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.ratio(8),
  },
  productName: {
    flex: 1,
    color: Colors.Charade,
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(18),
    marginRight: Metrics.ratio(16),
  },
  wishlistContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishlistImage: {
    width: Metrics.ratio(18),
    height: Metrics.ratio(18),
  },
  wishlistText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Radical_Red,
    marginLeft: Metrics.ratio(6),
  },
  priceMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.ratio(4),
    justifyContent: 'space-between',
  },
  priceContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: Metrics.ratio(12),
    paddingVertical: Metrics.ratio(4),
    borderColor: Colors.Affair,
    borderWidth: Metrics.ratio(1),
    borderRadius: Metrics.ratio(6),
    backgroundColor: Colors.Concrete,
  },
  priceText: {
    fontSize: Metrics.ratio(15),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
  },
  refundableView: {
    paddingLeft: Metrics.ratio(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  refundableText: {
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
    textTransform: 'capitalize',
    marginLeft: Metrics.ratio(4),
  },
  timeAndNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.ratio(8),
  },
  timeImage: {
    width: Metrics.ratio(16),
    height: Metrics.ratio(16),
  },
  timeText: {
    marginLeft: Metrics.ratio(6),
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  nameText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Affair,
  },
  ratingAndReviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.ratio(8),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Metrics.ratio(6),
  },
  ratingImage: {
    width: Metrics.ratio(14),
    height: Metrics.ratio(14),
    marginRight: Metrics.ratio(4),
  },
  reviewText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  reviewViewBtn: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Affair,
  },
  descriptionContainer: {
    paddingVertical: Metrics.ratio(12),
  },
  descriptionText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  buttonsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: Metrics.ratio(16),
  },
  chatBtn: {
    width: Metrics.screenWidth * 0.33,
    backgroundColor: Colors.Charade,
    borderRadius: Metrics.ratio(30),
    paddingVertical: Metrics.ratio(13),
    paddingHorizontal: Metrics.ratio(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatBtnText: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(16),
    color: Colors.White,
  },
  gradientBtnContainer: {
    width: Metrics.screenWidth * 0.55,
  },
  gradientContainer: {
    width: Metrics.screenWidth * 0.55,
  },
  gradientLabel: {
    fontSize: Metrics.ratio(16),
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
