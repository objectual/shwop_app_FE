import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';
const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: Colors.White,
    borderRadius: Metrics.ratio(10),
    marginTop: Metrics.ratio(15),
    flexDirection: 'row',
  },
  productImg: {
    width: Metrics.screenWidth * 0.3,
    height: Metrics.screenWidth * 0.3,
  },
  takesMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  takeImg: {
    width: Metrics.ratio(15),
    height: Metrics.ratio(15),
  },
  takeTxt: {
    fontFamily: Fonts.type.NunitoSemiBold,
    fontSize: Metrics.ratio(12),
    marginLeft: Metrics.ratio(5),
    color: Colors.Affair,
  },
  ratingContainer: {
    flexDirection: 'row',
    paddingVertical: Metrics.ratio(15),
    alignItems: 'center',
    flex: 1,
  },
  ratingImg: {
    width: Metrics.ratio(15),
    height: Metrics.ratio(15),
    marginRight: Metrics.ratio(4),
  },
  productTitle: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(15),
    color: Colors.Charade,
  },
  productDesc: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(10),
    color: Colors.Charade,
  },
  cardMain: {
    padding: Metrics.ratio(10),
    flex: 1,
  },
  takesContainer: {
    flexDirection: 'row',
  },
  price: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(14),
    color: Colors.Charade,
  },
  priceContainer: {
    backgroundColor: Colors.Concrete,
    paddingHorizontal: Metrics.ratio(8),
    paddingVertical: Metrics.ratio(2),
    borderRadius: Metrics.ratio(5),
    borderColor: Colors.Affair,
    borderWidth: 1,
  },
  wishlistContainer: {
    position: 'absolute',
    top: Metrics.ratio(5),
    right: Metrics.ratio(10),
  },
  wishlist_img: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
});

export default styles;
