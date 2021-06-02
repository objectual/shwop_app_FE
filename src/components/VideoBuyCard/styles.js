// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  cardArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'row',  
    marginRight: Metrics.ratio(16),
    marginLeft: Metrics.ratio(16),
    padding: Metrics.ratio(15),
    paddingRight: Metrics.ratio(35),
    paddingLeft: Metrics.ratio(20),
    borderRadius: Metrics.ratio(10),
    justifyContent: 'space-between', 
    position:'absolute',
    bottom:Metrics.ratio(100),
    right:0,
    left:0,
  },
  imageText: {
    flexDirection: 'row',
  },
  buyProductTitle: {
    color: Colors.White,
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(15),
  },
  buyProductPrice: {
    color: Colors.White,
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(20),
  },
  buyArea: {
    paddingLeft: Metrics.ratio(15),
  },
  buyBtn: {
    backgroundColor: Colors.Affair,
    borderRadius: Metrics.ratio(20),
    padding: Metrics.ratio(10),
    paddingLeft: Metrics.ratio(20),
    paddingRight: Metrics.ratio(20),
    marginTop: Metrics.ratio(8),
  },
  BuyBtnText: {
    color: Colors.White,
    fontFamily: Fonts.type.NunitoBold,
  },
  close: {
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.ratio(22),
    height: Metrics.ratio(22),
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    right: Metrics.ratio(8),
    top: Metrics.ratio(8),
  },
});
