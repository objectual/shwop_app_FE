import {StyleSheet} from 'react-native';

import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  headerSeparator: {
    backgroundColor: Colors.White,
    width: '100%',
    height: Metrics.ratio(50),
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  flatListContainer: {
    marginTop: Metrics.ratio(-40),
  },
  contentContainerStyle: {
    paddingTop: Metrics.ratio(8),
    paddingBottom: Metrics.ratio(200),
  },
  cardContainer: {
    width: Metrics.screenWidth - 32,
    overflow: 'hidden',
    borderRadius: Metrics.ratio(12),
    backgroundColor: Colors.White,
    alignSelf: 'center',
    marginBottom: Metrics.ratio(16),
  },
  imageStyle: {
    borderRadius: Metrics.ratio(12),
  },
  cardContentContainer: {
    padding: Metrics.ratio(16),
  },
  nameAndPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Metrics.ratio(10),
  },
  nameText: {
    fontSize: Metrics.ratio(20),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
  priceBtn: {
    backgroundColor: Colors.Concrete,
    borderWidth: Metrics.ratio(1),
    borderColor: Colors.Affair,
    paddingHorizontal: Metrics.ratio(12),
    paddingVertical: Metrics.ratio(4),
    borderRadius: Metrics.ratio(6),
  },
  priceBtnText: {
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.Charade,
  },
  descriptionText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
});
