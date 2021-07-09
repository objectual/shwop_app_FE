import {StyleSheet} from 'react-native';

import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  rightIconImageStyle: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  menuContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: Metrics.ratio(17),
  },
  menuStyle: {
    borderRadius: Metrics.ratio(8),
    top: Metrics.ratio(50),
  },
  menuItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Platform.OS === 'ios' ? Metrics.ratio(8) : Metrics.ratio(0),
  },
  menuItemText: {
    color: '#454F63',
    fontFamily: Fonts.type.MontserratMedium,
    fontSize: Metrics.ratio(13),
    marginLeft: Metrics.ratio(8),
  },
  headerSeparator: {
    width: '100%',
    height: Metrics.ratio(60),
    backgroundColor: Colors.White,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  activeBtn: {
    backgroundColor: Colors.Affair,
    paddingHorizontal: Metrics.ratio(24),
    paddingVertical: Metrics.ratio(8),
    borderRadius: Metrics.ratio(50),
  },
  activeBtnText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoSemiBold,
    textTransform: 'capitalize',
    color: Colors.White,
  },
  inactiveBtn: {
    paddingHorizontal: Metrics.ratio(24),
    paddingVertical: Metrics.ratio(8),
    borderRadius: Metrics.ratio(50),
  },
  inactiveBtnText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoLight,
    textTransform: 'capitalize',
    color: Colors.Charade,
  },
  contentContainerStyle: {
    paddingTop: Metrics.ratio(8),
    paddingBottom: Metrics.ratio(80),
  },
});
