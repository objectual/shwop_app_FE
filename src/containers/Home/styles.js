import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  heading: {
    fontSize: Metrics.ratio(18),
    fontWeight: 'bold',
    color: Colors.black,
  },
  headerTextStyle: {
    position:'absolute',
    top:0,
  },
 
});