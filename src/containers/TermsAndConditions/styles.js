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
  contentScrollView: {
    marginBottom: Metrics.ratio(55),
  },
  formContainer: {
    paddingHorizontal: Metrics.ratio(16),
  },

  gradientButtonContainer: {
    marginTop: Metrics.ratio(25),
    marginBottom: Metrics.ratio(40),
  },
  terms_bg: {
    width: '100%',
    height: Metrics.ratio(190),
    marginVertical: Metrics.ratio(15),
  },
  descriptionContainer: {
    paddingVertical: Metrics.ratio(12),
    marginBottom: Metrics.ratio(20),
  },
  descriptionText: {
    fontSize: Metrics.ratio(12),
    fontFamily: Fonts.type.Nunito,
    color: Colors.Charade,
  },
});
