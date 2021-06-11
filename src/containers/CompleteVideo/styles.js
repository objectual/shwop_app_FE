import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSeparator: {
    backgroundColor: Colors.White,
    width: '100%',
    height: Metrics.ratio(50),
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  videoContainer: {
    height: Metrics.screenHeight * 0.71,
    marginHorizontal: Metrics.ratio(16),
    marginTop: Metrics.ratio(-40),
    borderRadius: Metrics.ratio(8),
    overflow: 'hidden',
  },
  videoStyle: {
    width: '100%',
    height: '100%',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -Metrics.screenHeight * 0.12,
  },
});
