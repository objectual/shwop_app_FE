// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  cardArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'row',
    marginRight: Metrics.ratio(30),
    marginLeft: Metrics.ratio(30),
    paddingTop: Metrics.ratio(10),
    paddingBottom: Metrics.ratio(10),
    paddingRight: Metrics.ratio(35),
    paddingLeft: Metrics.ratio(8),
    borderRadius: Metrics.ratio(10),
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: Metrics.ratio(138),
    right: Metrics.ratio(0),
    left: Metrics.ratio(0),
    alignItems: 'center',
  },
  imageText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: Metrics.ratio(5),
  },
  buyArea: {
    paddingLeft: Metrics.ratio(10),
  },
  buyBtn: {
    backgroundColor: Colors.Affair,
    borderRadius: Metrics.ratio(20),
    padding: Metrics.ratio(10),
    paddingLeft: Metrics.ratio(20),
    paddingRight: Metrics.ratio(20),
    height: Metrics.ratio(34),
    marginTop: Metrics.ratio(3),
  },
  BuyBtnText: {
    color: Colors.White,
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(10),
  },
  ImageCard: {
    width: Metrics.screenHeight * 0.08,
    height: Metrics.screenHeight * 0.08,
  },
  close: {
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenHeight * 0.025,
    height: Metrics.screenHeight * 0.025,
    borderRadius: Metrics.ratio(30),
    position: 'absolute',
    right: Metrics.ratio(5),
    top: Metrics.ratio(5),
  },
});
