import {StyleSheet} from 'react-native';

import {Metrics, Colors, Fonts} from '../../theme';

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: Colors.White,
    borderRadius: Metrics.ratio(10),
    marginTop: Metrics.ratio(16),
    marginHorizontal: Metrics.ratio(16),
    flexDirection: 'row',
    height: Metrics.ratio(110),
  },
  productImgContainer: {
    width: Metrics.ratio(110),
    height: Metrics.ratio(110),
    borderRadius: Metrics.ratio(8),
    overflow: 'hidden',
  },
  productImg: {
    width: '100%',
    height: '100%',
  },
  productNameAndIconContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  productNameContainer: {
    flex: 1,
  },
  takesMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  takeImg: {
    width: Metrics.ratio(12),
    height: Metrics.ratio(12),
  },
  takeTxt: {
    fontFamily: Fonts.type.NunitoSemiBold,
    fontSize: Metrics.ratio(12),
    marginLeft: Metrics.ratio(6),
    color: Colors.Affair,
  },
  ratingContainer: {
    flexDirection: 'row',
    paddingTop: Metrics.ratio(8),
    paddingBottom: Metrics.ratio(12),
    alignItems: 'center',
  },
  ratingImg: {
    width: Metrics.ratio(13),
    height: Metrics.ratio(13),
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
    alignItems: 'center',
  },
  price: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(12),
    color: Colors.Charade,
  },
  priceContainer: {
    backgroundColor: Colors.Concrete,
    paddingHorizontal: Metrics.ratio(8),
    paddingVertical: Metrics.ratio(2),
    borderRadius: Metrics.ratio(6),
    borderColor: Colors.Affair,
    borderWidth: 1,
  },
  wishlist_img: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },
});

export default styles;
