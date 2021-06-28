import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

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
  formContainer: {
    paddingHorizontal: Metrics.ratio(16),
  },
  titleContainer: {
    marginTop: Metrics.ratio(16),
  },
  titleTextInput: {
    backgroundColor: Colors.White,
    textAlignVertical: 'top',
    borderRadius: Metrics.ratio(16),
    padding: Metrics.ratio(20),
    paddingHorizontal: Metrics.ratio(20),
    fontSize: Metrics.ratio(14),
    fontFamily: Fonts.type.NunitoLight,
    color: Colors.Black,
    borderColor: Colors.Mercury,
    borderWidth: Metrics.ratio(1),
  },
  titleCount: {
    fontSize: Metrics.ratio(10),
    color: Colors.Charade,
    fontFamily: Fonts.type.Nunito,
    marginTop: Metrics.ratio(6),
    textAlign: 'right',
    marginRight: Metrics.ratio(20),
  },

  gradientButtonContainer: {
    marginTop: Metrics.ratio(25),
    marginBottom: Metrics.ratio(40),
  },
  labelTopText: {
    position: 'absolute',
    color: Colors.Affair,
    top: Metrics.ratio(4),
    left: Metrics.ratio(20),
    fontSize: Metrics.ratio(10),
    zIndex: Metrics.ratio(2),
  },
  terms_bg: {
    width: '100%',
    height: Metrics.ratio(190),
    marginVertical: Metrics.ratio(15),
  },
  errormsg: {
    color: 'red',
    fontSize: Fonts.size.fourteen,
    fontFamily: Fonts.type.Nunito,
  },
});
