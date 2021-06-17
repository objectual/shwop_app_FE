import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  containerStyle: {
    paddingVertical: Metrics.ratio(0),
    fontSize: Fonts.size.fifteen,
    fontFamily: Fonts.type.NunitoLight,
    borderRadius: Metrics.ratio(30),
    overflow: 'hidden',
    borderColor: Colors.Mercury,
    borderWidth: Metrics.ratio(1),
    height: Metrics.ratio(50),
    width: '100%',
  },
  flagButtonStyle: {
    padding: Metrics.ratio(0),
    margin: Metrics.ratio(0),
    paddingRight: Metrics.ratio(40),
    width: Metrics.ratio(100),
  },
  textInputStyle: {
    borderColor: Colors.Mercury,
    borderLeftWidth: Metrics.ratio(1),
    paddingLeft: Metrics.ratio(10),
    marginTop: Metrics.ratio(5),
    marginBottom: Metrics.ratio(5),
  },
  codeTextStyle: {
    position: 'absolute',
    left: Metrics.ratio(-60),
    color: Colors.Mercury,
  },
  textContainerStyle: {
    backgroundColor: Colors.White,
    paddingVertical: Metrics.ratio(0),
    paddingLeft: Metrics.ratio(0),
  },
  verificationText: {
    fontFamily: Fonts.type.Nunito,
    fontSize: Metrics.ratio(9),
    marginTop: Metrics.ratio(5),
    marginBottom: Metrics.ratio(10),
  },
  warningTextView: {
    justifyContent: 'center',
  },
  warningText: {
    color: 'red',
    fontSize: Metrics.ratio(10),
    marginHorizontal: 5,
    marginVertical: 5,
  },
  dropdownImage: {
    width: Metrics.ratio(5),
    height: Metrics.ratio(5),
    position: 'absolute',
    right: Metrics.ratio(5),
  },
});
