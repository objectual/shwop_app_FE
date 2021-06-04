// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  modalStyle: {
    backgroundColor: Colors.White,
    borderTopLeftRadius: Metrics.ratio(16),
    borderTopRightRadius: Metrics.ratio(16),
    paddingVertical: Metrics.ratio(24),
  },
  handleStyle: {
    backgroundColor: Colors.White,
    height: Metrics.ratio(3),
    width: Metrics.ratio(93),
    borderRadius: Metrics.ratio(4),
  },
  overlayStyle: {
    backgroundColor: 'transparent',
  },
  emptyComponentContainer: {
    height: Metrics.screenHeight * 0.16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyComponentText: {
    color: '#454F63',
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.MontserratRegular,
    marginLeft: Metrics.ratio(8),
  },
  HeaderView: {
    alignItems: 'center',
  },
  HeaderText: {
    fontFamily: Fonts.type.NunitoBold,
    fontSize: Metrics.ratio(16),
  },
  close: {
    backgroundColor: Colors.Concrete,
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenHeight * 0.03,
    height: Metrics.screenHeight * 0.03,
    borderRadius: Metrics.ratio(30),
    position: 'absolute',
    top: Metrics.ratio(10),
    right: Metrics.ratio(20),
  },
});
