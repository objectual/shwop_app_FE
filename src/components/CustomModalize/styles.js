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
});
