import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

export default StyleSheet.create({
  MainContainer: {
    paddingHorizontal: Metrics.ratio(8),
  },
  headerMain: {
    marginTop: Metrics.ratio(24),
    height: Metrics.screenHeight * 0.095,
    flexDirection: 'row',
  },
  TouchableMenu: {
    width: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backarrowView: {
    backgroundColor: '#F7F7FA',
    borderRadius: Metrics.ratio(25),
  },
  iconImage: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  centerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
