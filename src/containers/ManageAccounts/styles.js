import {StyleSheet} from 'react-native';

import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  headerSeparator: {
    backgroundColor: Colors.White,
    width: '100%',
    height: Metrics.ratio(30),
    borderBottomLeftRadius: Metrics.ratio(10),
    borderBottomRightRadius: Metrics.ratio(10),
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    paddingTop: Metrics.ratio(16),
    marginHorizontal: Metrics.ratio(16),
  },
  saveBtn: {
    backgroundColor: Colors.Affair,
    paddingVertical: Metrics.ratio(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(50),
  },
  saveBtnText: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.NunitoBold,
    color: Colors.White,
  },
  customPhoneInputcontainer: {
    marginBottom: Metrics.ratio(16),
  },
});
