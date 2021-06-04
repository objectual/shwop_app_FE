// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  cardArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'row',
    marginRight: Metrics.ratio(16),
    marginLeft: Metrics.ratio(16),
    paddingTop: Metrics.ratio(10),
    paddingBottom: Metrics.ratio(10),
    paddingRight: Metrics.ratio(35),
    paddingLeft: Metrics.ratio(12),
    borderRadius: Metrics.ratio(10),
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: Metrics.ratio(138),
    right: Metrics.ratio(0),
    left: Metrics.ratio(0),
  },
  imageText: {
    flexDirection: 'row',
  },
  buyProductTitle: {
    color: Colors.White,
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(12),
  },
  buyProductPrice: {
    color: Colors.White,
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(16),
  },
  buyArea: {
    paddingLeft: Metrics.ratio(15),
  },
  buyBtn: {
    backgroundColor: Colors.Affair,
    borderRadius: Metrics.ratio(20),
    padding: Metrics.ratio(10),
    paddingLeft: Metrics.ratio(15),
    paddingRight: Metrics.ratio(15),
    height: Metrics.ratio(34),
    marginTop: Metrics.ratio(3),
  },
  BuyBtnText: {
    color: Colors.White,
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(10),
  },
  ImageCard: {
    width: Metrics.screenHeight * 0.07,
    height: Metrics.screenHeight * 0.07,
  },
  close: {
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenHeight * 0.03,
    height: Metrics.screenHeight * 0.03,
    borderRadius: Metrics.ratio(30),
    position: 'absolute',
    right: Metrics.ratio(8),
    top: Metrics.ratio(8),
  },
});
